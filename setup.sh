#!/bin/bash

# ============================================
# 🚀 快速启动脚本 - Visionary App
# ============================================

set -e  # 出错立即停止

echo "╔════════════════════════════════════════╗"
echo "║   启动 Visionary 应用（前后端）        ║"
echo "╚════════════════════════════════════════╝"
echo ""

# ============================================
# 步骤1：后端设置
# ============================================
echo "📦 步骤1: 后端设置..."
cd backend

# 检查.env文件
if [ ! -f .env ]; then
    echo "⚠️  后端 .env 文件不存在，创建默认配置..."
    cp .env.example .env
    echo "❌ 请编辑 backend/.env 并填入 Supabase 凭证"
    echo "   SUPABASE_URL=..."
    echo "   SUPABASE_ANON_KEY=..."
    echo ""
    exit 1
fi

# 安装后端依赖
echo "📥 安装后端依赖..."
if [ ! -d "node_modules" ]; then
    npm install --silent
    echo "✅ 后端依赖安装完成"
else
    echo "✅ 后端依赖已存在"
fi

# ============================================
# 步骤2：前端设置
# ============================================
echo ""
echo "🎨 步骤2: 前端设置..."
cd ..

# 检查.env文件
if [ ! -f .env ]; then
    echo "⚠️  前端 .env 文件不存在，创建默认配置..."
    cp .env.example .env
    echo "❌ 请编辑 .env 并填入配置"
    echo "   VITE_SUPABASE_URL=..."
    echo "   VITE_SUPABASE_ANON_KEY=..."
    echo "   VITE_API_URL=http://localhost:3001/api"
    echo ""
    exit 1
fi

# 安装前端依赖
echo "📥 安装前端依赖..."
if [ ! -d "node_modules" ]; then
    npm install --silent
    echo "✅ 前端依赖安装完成"
else
    echo "✅ 前端依赖已存在"
fi

# ============================================
# 步骤3：启动提示
# ============================================
echo ""
echo "╔════════════════════════════════════════╗"
echo "║       所有配置完成！现在启动...        ║"
echo "╚════════════════════════════════════════╝"
echo ""
echo "📌 后端启动命令（在新终端中运行）:"
echo "   cd backend && npm run dev"
echo ""
echo "📌 前端启动命令（在另一个新终端中运行）:"
echo "   npm run dev"
echo ""
echo "📌 验证 API："
echo "   curl http://localhost:3001/health"
echo "   curl http://localhost:3001/api/data/categories"
echo ""
echo "✨ 完成！打开 http://localhost:5173 开始使用"
echo ""
