-- ============================================================
-- 激活码系统 SQL 脚本
-- 请在 Supabase Dashboard -> SQL Editor 中执行此脚本
-- ============================================================

-- 1. 创建激活码表
CREATE TABLE IF NOT EXISTS public.redemption_codes (
    code TEXT PRIMARY KEY,                          -- 激活码本体 (如: MIST-ANNUAL-X9K2P)
    type TEXT NOT NULL CHECK (type IN ('annual', 'lifetime', 'tokens')),  -- 码类型
    token_value INTEGER DEFAULT 0,                  -- 如果是 tokens 类型，具体增加多少
    is_used BOOLEAN DEFAULT FALSE,                  -- 是否已被使用
    used_by UUID REFERENCES auth.users(id),         -- 使用者
    used_at TIMESTAMPTZ,                            -- 使用时间
    created_at TIMESTAMPTZ DEFAULT NOW(),            -- 创建时间
    expires_at TIMESTAMPTZ                          -- 过期时间 (可选)
);

-- 2. 启用 RLS
ALTER TABLE public.redemption_codes ENABLE ROW LEVEL SECURITY;

-- 3. RLS 策略: 用户不能直接读取或修改这张表 (只能通过 RPC)
-- 不创建任何 SELECT/INSERT/UPDATE 策略 = 前端完全无法直接操作此表

-- 4. 核心安全函数: 兑换激活码 (Redeem Code)
-- 这个函数会在数据库内部以 SECURITY DEFINER (管理员权限) 执行
-- 前端只需要调用 supabase.rpc('redeem_code', { input_code: 'XXX' })
CREATE OR REPLACE FUNCTION public.redeem_code(input_code TEXT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER  -- 以创建者权限执行，绕过 RLS
SET search_path = public
AS $$
DECLARE
    v_user_id UUID;
    v_code_record RECORD;
    v_new_tier TEXT;
    v_new_tokens INTEGER;
    v_current_tokens INTEGER;
    v_result JSONB;
BEGIN
    -- 获取当前登录用户 ID
    v_user_id := auth.uid();
    IF v_user_id IS NULL THEN
        RETURN jsonb_build_object('success', false, 'error', 'NOT_LOGGED_IN');
    END IF;

    -- 查找激活码
    SELECT * INTO v_code_record
    FROM public.redemption_codes
    WHERE code = UPPER(TRIM(input_code));

    -- 码不存在
    IF NOT FOUND THEN
        RETURN jsonb_build_object('success', false, 'error', 'CODE_NOT_FOUND');
    END IF;

    -- 码已被使用
    IF v_code_record.is_used THEN
        RETURN jsonb_build_object('success', false, 'error', 'CODE_ALREADY_USED');
    END IF;

    -- 码已过期
    IF v_code_record.expires_at IS NOT NULL AND v_code_record.expires_at < NOW() THEN
        RETURN jsonb_build_object('success', false, 'error', 'CODE_EXPIRED');
    END IF;

    -- 标记激活码为已使用
    UPDATE public.redemption_codes
    SET is_used = TRUE, used_by = v_user_id, used_at = NOW()
    WHERE code = v_code_record.code;

    -- 根据类型更新用户 profile
    IF v_code_record.type = 'annual' THEN
        UPDATE public.profiles
        SET membership_tier = 'annual'
        WHERE id = v_user_id;
        v_result := jsonb_build_object(
            'success', true,
            'type', 'annual',
            'message', 'ANNUAL_ACTIVATED'
        );

    ELSIF v_code_record.type = 'lifetime' THEN
        UPDATE public.profiles
        SET membership_tier = 'lifetime'
        WHERE id = v_user_id;
        v_result := jsonb_build_object(
            'success', true,
            'type', 'lifetime',
            'message', 'LIFETIME_ACTIVATED'
        );

    ELSIF v_code_record.type = 'tokens' THEN
        -- 读取当前 tokens 并增加
        SELECT tokens INTO v_current_tokens FROM public.profiles WHERE id = v_user_id;
        v_new_tokens := COALESCE(v_current_tokens, 0) + COALESCE(v_code_record.token_value, 0);
        UPDATE public.profiles
        SET tokens = v_new_tokens
        WHERE id = v_user_id;
        v_result := jsonb_build_object(
            'success', true,
            'type', 'tokens',
            'tokens_added', v_code_record.token_value,
            'new_total', v_new_tokens,
            'message', 'TOKENS_ADDED'
        );
    END IF;

    RETURN v_result;
END;
$$;

-- 5. 批量生成激活码的辅助函数 (管理员用)
-- 使用方法: SELECT * FROM generate_codes('annual', 10);
-- 会生成10个年度会员激活码
CREATE OR REPLACE FUNCTION public.generate_codes(
    code_type TEXT,
    quantity INTEGER DEFAULT 10,
    token_val INTEGER DEFAULT 0,
    prefix TEXT DEFAULT 'MIST'
)
RETURNS TABLE(generated_code TEXT)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    i INTEGER;
    new_code TEXT;
    type_prefix TEXT;
BEGIN
    -- 根据类型设置前缀
    IF code_type = 'annual' THEN
        type_prefix := 'ARC';
    ELSIF code_type = 'lifetime' THEN
        type_prefix := 'CRE';
    ELSIF code_type = 'tokens' THEN
        type_prefix := 'TKN';
    ELSE
        RAISE EXCEPTION 'Invalid code type: %. Must be annual, lifetime, or tokens', code_type;
    END IF;

    FOR i IN 1..quantity LOOP
        -- 生成格式: MIST-ARC-XXXX-XXXX (随机字母数字)
        new_code := prefix || '-' || type_prefix || '-' ||
            UPPER(SUBSTRING(MD5(RANDOM()::TEXT || CLOCK_TIMESTAMP()::TEXT) FROM 1 FOR 4)) || '-' ||
            UPPER(SUBSTRING(MD5(RANDOM()::TEXT || CLOCK_TIMESTAMP()::TEXT) FROM 5 FOR 4));

        INSERT INTO public.redemption_codes (code, type, token_value)
        VALUES (new_code, code_type, token_val);

        generated_code := new_code;
        RETURN NEXT;
    END LOOP;
END;
$$;

-- ============================================================
-- 使用示例 (在 SQL Editor 中手动执行):
--
-- 生成 5 个年度会员码:
--   SELECT * FROM generate_codes('annual', 5);
--
-- 生成 3 个终身会员码:
--   SELECT * FROM generate_codes('lifetime', 3);
--
-- 生成 10 个算力码 (每个 100 tokens):
--   SELECT * FROM generate_codes('tokens', 10, 100);
--
-- 查看所有未使用的码:
--   SELECT code, type, token_value FROM redemption_codes WHERE is_used = FALSE;
--
-- 查看使用记录:
--   SELECT code, type, used_by, used_at FROM redemption_codes WHERE is_used = TRUE;
-- ============================================================
