#!/bin/bash

# Project folder for /wombs
PROJECT_DIR="./wombs"

# Navigate to the /wombs folder
cd $PROJECT_DIR || { echo "Project folder not found!"; exit 1; }

# Add environment variables for Cognito
vercel env add COGNITO_DOMAIN "https://login.fertiterratechnologies.com" production --yes
vercel env add COGNITO_REDIRECT_URI "https://fertiterratechnologies.com/wombs" production --yes
vercel env add COGNITO_LOGOUT_URI "https://login.fertiterratechnologies.com/logout" production --yes
vercel env add COGNITO_CLIENT_ID "3ufs87b5gdr4e33f9sbbk154vl" production --yes
vercel env add COGNITO_CLIENT_SECRET "3ufs87b5gdr4e33f9sbbk154vl" production --yes
vercel env add COGNITO_SCOPES "openid email profile" production --yes

# Deploy the /wombs app
vercel --prod --confirm

echo "✅ /wombs app deployed with Cognito integration. Test at https://fertiterratechnologies.com/wombs"
