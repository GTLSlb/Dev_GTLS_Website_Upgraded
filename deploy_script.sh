#!/bin/bash

set -e  # Exit on error

# Set PATH to include pnpm
export PATH="/home/deployer/.local/share/pnpm:$PATH"
export PNPM_HOME="/home/deployer/.local/share/pnpm"

echo "=========================================="
echo "🚀 Deployment Script - Staging"
echo "Date: $(date)"
echo "=========================================="

PROJECT_ROOT="/www/wwwroot/website_upgraded"

# Navigate to project
cd "$PROJECT_ROOT"

# Pull latest code
echo ""
echo "📥 Pulling latest code..."
sudo git reset --hard HEAD
sudo git pull origin store

# Stop all PM2 processes
echo ""
echo "⏸️  Stopping sudo PM2 processes..."
sudo pm2 stop all

# Build frontend
echo ""
echo "🎨 Building frontend..."
cd website-frontend

echo "  → Installing dependencies..."
pnpm i --force

echo "  → Building..."
pnpm build

cd "$PROJECT_ROOT"

# Build frontend
echo ""
echo " Building frontend..."
cd website-frontend

echo "  → Installing dependencies..."
pnpm i --force

echo "  → Building..."
pnpm build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi


# Go back to root
cd "$PROJECT_ROOT"

# Build backend
echo ""
echo "🔧 Building backend..."
cd website-backend
echo "  → Installing dependencies..."
pnpm i --force

# Restart PM2
echo ""
echo "♻️  Restarting PM2 processes..."
sudo pm2 restart all

# Save PM2 config
sudo pm2 save

echo ""
echo "=========================================="
echo "✅ Deployment Complete!"
echo "=========================================="
sudo pm2 list
