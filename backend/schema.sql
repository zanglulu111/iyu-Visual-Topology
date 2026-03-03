-- ============================================
-- Supabase Schema for Visionary App
-- ============================================

-- Users table (extends Supabase auth)
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    username TEXT NOT NULL UNIQUE,
    level TEXT DEFAULT 'Visitor',
    is_pro BOOLEAN DEFAULT FALSE,
    avatar_color TEXT DEFAULT 'bg-zinc-500',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- History items table
CREATE TABLE IF NOT EXISTS history_items (
    id BIGSERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    type TEXT NOT NULL CHECK (type IN ('NARRATIVE', 'METONYMY')),
    driver_id TEXT NOT NULL,
    driver_name TEXT NOT NULL,
    field_state JSONB NOT NULL,
    world_law JSONB,
    blueprint JSONB,
    treatments JSONB,
    saved_blueprints JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Collections table
CREATE TABLE IF NOT EXISTS collections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    save_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    blueprint JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Creative Blueprints table
CREATE TABLE IF NOT EXISTS creative_blueprints (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    treatment_id TEXT NOT NULL,
    driver_type TEXT NOT NULL,
    style_name TEXT,
    narrative JSONB NOT NULL,
    context JSONB NOT NULL,
    commercial_data JSONB,
    experimental_data JSONB,
    trailer_data JSONB,
    aesthetic_data JSONB,
    metonymy_data JSONB,
    poetic_data JSONB,
    assets JSONB NOT NULL,
    version_history JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Settings table
CREATE TABLE IF NOT EXISTS settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    api_settings JSONB NOT NULL,
    theme TEXT DEFAULT 'light',
    language TEXT DEFAULT 'CN',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id)
);

-- Custom Library Definitions table
CREATE TABLE IF NOT EXISTS custom_library_defs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    library_key TEXT NOT NULL,
    def TEXT NOT NULL,
    core TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, library_key)
);

-- Indexes for better query performance
CREATE INDEX idx_history_items_user_id ON history_items(user_id);
CREATE INDEX idx_history_items_date ON history_items(date DESC);
CREATE INDEX idx_collections_user_id ON collections(user_id);
CREATE INDEX idx_creative_blueprints_user_id ON creative_blueprints(user_id);
CREATE INDEX idx_custom_library_defs_user_id ON custom_library_defs(user_id);

-- Enable Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE history_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE creative_blueprints ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE custom_library_defs ENABLE ROW LEVEL SECURITY;

-- RLS Policies for users
CREATE POLICY "Users can view own profile"
    ON users FOR SELECT
    USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
    ON users FOR UPDATE
    USING (auth.uid() = id);

-- RLS Policies for history_items
CREATE POLICY "Users can view own history"
    ON history_items FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can create history items"
    ON history_items FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own history"
    ON history_items FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own history"
    ON history_items FOR DELETE
    USING (auth.uid() = user_id);

-- RLS Policies for collections
CREATE POLICY "Users can view own collections"
    ON collections FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can create collections"
    ON collections FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own collections"
    ON collections FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own collections"
    ON collections FOR DELETE
    USING (auth.uid() = user_id);

-- RLS Policies for creative_blueprints
CREATE POLICY "Users can view own blueprints"
    ON creative_blueprints FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can create blueprints"
    ON creative_blueprints FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own blueprints"
    ON creative_blueprints FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own blueprints"
    ON creative_blueprints FOR DELETE
    USING (auth.uid() = user_id);

-- RLS Policies for settings
CREATE POLICY "Users can view own settings"
    ON settings FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can create settings"
    ON settings FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own settings"
    ON settings FOR UPDATE
    USING (auth.uid() = user_id);

-- RLS Policies for custom_library_defs
CREATE POLICY "Users can view own library"
    ON custom_library_defs FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can create library items"
    ON custom_library_defs FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own library items"
    ON custom_library_defs FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own library items"
    ON custom_library_defs FOR DELETE
    USING (auth.uid() = user_id);
