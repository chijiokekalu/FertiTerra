#!/bin/bash

# FertiTerra Wombs App Deployment Script with Cognito Email OTP
# This script deploys the Wombs app to Vercel with all required Cognito environment variables

echo "🚀 FertiTerra Wombs App - Cognito Email OTP Deployment"
echo "=================================================="
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

echo "📝 Setting up Cognito environment variables for production..."
echo ""

# Cognito Configuration
vercel env add NEXT_PUBLIC_COGNITO_DOMAIN "https://login.fertiterratechnologies.com" production --yes
vercel env add NEXT_PUBLIC_COGNITO_REDIRECT_URI "https://fertiterratechnologies.com/wombs" production --yes
vercel env add NEXT_PUBLIC_COGNITO_LOGOUT_URI "https://fertiterratechnologies.com/wombs" production --yes
vercel env add NEXT_PUBLIC_COGNITO_CLIENT_ID "3ufs87b5gdr4e33f9sbbk154vl" production --yes
vercel env add NEXT_PUBLIC_COGNITO_SCOPES "openid email profile" production --yes
vercel env add NEXT_PUBLIC_REGION "us-east-1" production --yes

# Add User Pool ID (required for Amplify)
echo ""
echo "⚠️  Please enter your Cognito User Pool ID (e.g., us-east-1_xxxxxxxxx):"
read -r USER_POOL_ID
vercel env add NEXT_PUBLIC_COGNITO_USER_POOL_ID "$USER_POOL_ID" production --yes

echo ""
echo "✅ Environment variables configured successfully!"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install aws-amplify @aws-amplify/ui-react

echo ""
echo "🔨 Building the application..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build successful!"
    echo ""
    echo "🚀 Deploying to Vercel Production..."
    vercel --prod --yes
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Deployment successful!"
        echo ""
        echo "🎉 Wombs app with Cognito Email OTP is now live!"
        echo ""
        echo "📋 Next Steps:"
        echo "1. Test signup: https://fertiterratechnologies.com/wombs/signup"
        echo "2. Check email for verification code"
        echo "3. Login: https://fertiterratechnologies.com/wombs/login"
        echo "4. Access dashboard: https://fertiterratechnologies.com/wombs/dashboard"
        echo ""
        echo "🔐 Cognito Features:"
        echo "- Email OTP verification"
        echo "- Custom user attributes (cycle_length, fertility_goal, plan_type, referral_code)"
        echo "- Secure authentication with AWS Cognito"
        echo "- Personalized dashboard based on user attributes"
        echo ""
    else
        echo ""
        echo "❌ Deployment failed. Please check the error messages above."
        exit 1
    fi
else
    echo ""
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi
