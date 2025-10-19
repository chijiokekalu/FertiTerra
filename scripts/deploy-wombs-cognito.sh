#!/bin/bash

# FertiTerra Wombs App Deployment Script with Cognito Email OTP
# This script deploys the Wombs app to Vercel with all required Cognito environment variables

set -e  # Exit on any error

echo "🚀 FertiTerra Wombs App - Cognito Email OTP Deployment"
echo "=================================================="
echo ""

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: package.json not found. Please run this script from the project root.${NC}"
    exit 1
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo -e "${YELLOW}⚠️  Vercel CLI not found. Installing...${NC}"
    npm install -g vercel
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ Failed to install Vercel CLI${NC}"
        exit 1
    fi
    echo -e "${GREEN}✅ Vercel CLI installed successfully${NC}"
fi

echo -e "${YELLOW}📝 Setting up Cognito environment variables for production...${NC}"
echo ""

# Check if user is logged in to Vercel
echo "Checking Vercel authentication..."
vercel whoami &> /dev/null
if [ $? -ne 0 ]; then
    echo -e "${YELLOW}Please login to Vercel:${NC}"
    vercel login
fi

echo ""
echo -e "${GREEN}✅ Authenticated with Vercel${NC}"
echo ""

# Cognito Configuration
echo "Setting Cognito Domain..."
vercel env add NEXT_PUBLIC_COGNITO_DOMAIN "https://login.fertiterratechnologies.com" production --yes 2>/dev/null || vercel env rm NEXT_PUBLIC_COGNITO_DOMAIN production --yes && vercel env add NEXT_PUBLIC_COGNITO_DOMAIN "https://login.fertiterratechnologies.com" production --yes

echo "Setting Redirect URI..."
vercel env add NEXT_PUBLIC_COGNITO_REDIRECT_URI "https://fertiterratechnologies.com/wombs" production --yes 2>/dev/null || vercel env rm NEXT_PUBLIC_COGNITO_REDIRECT_URI production --yes && vercel env add NEXT_PUBLIC_COGNITO_REDIRECT_URI "https://fertiterratechnologies.com/wombs" production --yes

echo "Setting Logout URI..."
vercel env add NEXT_PUBLIC_COGNITO_LOGOUT_URI "https://fertiterratechnologies.com/wombs" production --yes 2>/dev/null || vercel env rm NEXT_PUBLIC_COGNITO_LOGOUT_URI production --yes && vercel env add NEXT_PUBLIC_COGNITO_LOGOUT_URI "https://fertiterratechnologies.com/wombs" production --yes

echo "Setting Client ID..."
vercel env add NEXT_PUBLIC_COGNITO_CLIENT_ID "3ufs87b5gdr4e33f9sbbk154vl" production --yes 2>/dev/null || vercel env rm NEXT_PUBLIC_COGNITO_CLIENT_ID production --yes && vercel env add NEXT_PUBLIC_COGNITO_CLIENT_ID "3ufs87b5gdr4e33f9sbbk154vl" production --yes

echo "Setting Cognito Scopes..."
vercel env add NEXT_PUBLIC_COGNITO_SCOPES "openid email profile" production --yes 2>/dev/null || vercel env rm NEXT_PUBLIC_COGNITO_SCOPES production --yes && vercel env add NEXT_PUBLIC_COGNITO_SCOPES "openid email profile" production --yes

echo "Setting AWS Region..."
vercel env add NEXT_PUBLIC_REGION "us-east-1" production --yes 2>/dev/null || vercel env rm NEXT_PUBLIC_REGION production --yes && vercel env add NEXT_PUBLIC_REGION "us-east-1" production --yes

# Add User Pool ID (required for Amplify)
echo ""
echo -e "${YELLOW}⚠️  Please enter your Cognito User Pool ID (e.g., us-east-1_xxxxxxxxx):${NC}"
echo -e "${YELLOW}You can find this in AWS Cognito Console > User Pools > General Settings${NC}"
read -r USER_POOL_ID

if [ -z "$USER_POOL_ID" ]; then
    echo -e "${RED}❌ User Pool ID is required. Exiting...${NC}"
    exit 1
fi

echo "Setting User Pool ID..."
vercel env add NEXT_PUBLIC_COGNITO_USER_POOL_ID "$USER_POOL_ID" production --yes 2>/dev/null || vercel env rm NEXT_PUBLIC_COGNITO_USER_POOL_ID production --yes && vercel env add NEXT_PUBLIC_COGNITO_USER_POOL_ID "$USER_POOL_ID" production --yes

echo ""
echo -e "${GREEN}✅ Environment variables configured successfully!${NC}"
echo ""

# Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm install

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Failed to install dependencies${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Dependencies installed successfully${NC}"
echo ""

# Build the application
echo -e "${YELLOW}🔨 Building the application...${NC}"
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✅ Build successful!${NC}"
    echo ""
    echo -e "${YELLOW}🚀 Deploying to Vercel Production...${NC}"
    vercel --prod --yes
    
    if [ $? -eq 0 ]; then
        echo ""
        echo -e "${GREEN}✅ Deployment successful!${NC}"
        echo ""
        echo -e "${GREEN}🎉 Wombs app with Cognito Email OTP is now live!${NC}"
        echo ""
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo ""
        echo -e "${GREEN}📋 Next Steps:${NC}"
        echo "1. Test signup: https://fertiterratechnologies.com/wombs/signup"
        echo "2. Check email for verification code"
        echo "3. Login: https://fertiterratechnologies.com/wombs/login"
        echo "4. Access dashboard: https://fertiterratechnologies.com/wombs/dashboard"
        echo ""
        echo -e "${GREEN}🔐 Cognito Features Enabled:${NC}"
        echo "✅ Email OTP verification"
        echo "✅ Custom user attributes:"
        echo "   - cycle_length (21-35 days)"
        echo "   - fertility_goal (tracking, conceiving, preventing, health, planning)"
        echo "   - plan_type (free, basic, premium, enterprise)"
        echo "   - referral_code"
        echo "✅ Secure authentication with AWS Cognito"
        echo "✅ Personalized dashboard based on user attributes"
        echo ""
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo ""
        echo -e "${YELLOW}⚠️  Important:${NC}"
        echo "Make sure your Cognito User Pool has:"
        echo "1. Email verification enabled"
        echo "2. Custom attributes configured:"
        echo "   - custom:cycle_length (String)"
        echo "   - custom:fertility_goal (String)"
        echo "   - custom:plan_type (String)"
        echo "   - custom:referral_code (String)"
        echo "3. App client configured with OAuth flows"
        echo ""
    else
        echo ""
        echo -e "${RED}❌ Deployment failed. Please check the error messages above.${NC}"
        exit 1
    fi
else
    echo ""
    echo -e "${RED}❌ Build failed. Please check the error messages above.${NC}"
    exit 1
fi
