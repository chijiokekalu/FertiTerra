#!/bin/bash

# Verification script to check Cognito setup

echo "🔍 Verifying Cognito Setup"
echo "=========================="
echo ""

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo "Checking environment variables..."
echo ""

# Check if .env.local exists
if [ -f ".env.local" ]; then
    echo -e "${GREEN}✅ .env.local file found${NC}"
    echo ""
    
    # Check each required variable
    REQUIRED_VARS=(
        "NEXT_PUBLIC_COGNITO_DOMAIN"
        "NEXT_PUBLIC_COGNITO_REDIRECT_URI"
        "NEXT_PUBLIC_COGNITO_LOGOUT_URI"
        "NEXT_PUBLIC_COGNITO_CLIENT_ID"
        "NEXT_PUBLIC_COGNITO_USER_POOL_ID"
        "NEXT_PUBLIC_REGION"
    )
    
    ALL_PRESENT=true
    
    for VAR in "${REQUIRED_VARS[@]}"; do
        if grep -q "^$VAR=" .env.local; then
            echo -e "${GREEN}✅ $VAR is set${NC}"
        else
            echo -e "${RED}❌ $VAR is missing${NC}"
            ALL_PRESENT=false
        fi
    done
    
    echo ""
    
    if [ "$ALL_PRESENT" = true ]; then
        echo -e "${GREEN}✅ All required environment variables are set!${NC}"
    else
        echo -e "${RED}❌ Some environment variables are missing.${NC}"
        echo "Please update your .env.local file."
    fi
else
    echo -e "${YELLOW}⚠️  .env.local file not found${NC}"
    echo "Creating from template..."
    
    if [ -f ".env.local.example" ]; then
        cp .env.local.example .env.local
        echo -e "${GREEN}✅ Created .env.local from template${NC}"
        echo -e "${YELLOW}⚠️  Please fill in your Cognito User Pool ID in .env.local${NC}"
    else
        echo -e "${RED}❌ .env.local.example not found${NC}"
    fi
fi

echo ""
echo "Checking package.json dependencies..."
echo ""

# Check if aws-amplify is installed
if grep -q '"aws-amplify"' package.json; then
    echo -e "${GREEN}✅ aws-amplify is in package.json${NC}"
else
    echo -e "${RED}❌ aws-amplify is missing from package.json${NC}"
    echo "Run: npm install aws-amplify @aws-amplify/ui-react"
fi

# Check if @aws-amplify/ui-react is installed
if grep -q '"@aws-amplify/ui-react"' package.json; then
    echo -e "${GREEN}✅ @aws-amplify/ui-react is in package.json${NC}"
else
    echo -e "${RED}❌ @aws-amplify/ui-react is missing from package.json${NC}"
    echo "Run: npm install aws-amplify @aws-amplify/ui-react"
fi

echo ""
echo "Checking required files..."
echo ""

REQUIRED_FILES=(
    "lib/amplify-config.ts"
    "app/wombs/layout.tsx"
    "app/wombs/signup/page.tsx"
    "app/wombs/login/page.tsx"
    "app/wombs/dashboard/page.tsx"
)

ALL_FILES_PRESENT=true

for FILE in "${REQUIRED_FILES[@]}"; do
    if [ -f "$FILE" ]; then
        echo -e "${GREEN}✅ $FILE exists${NC}"
    else
        echo -e "${RED}❌ $FILE is missing${NC}"
        ALL_FILES_PRESENT=false
    fi
done

echo ""

if [ "$ALL_FILES_PRESENT" = true ]; then
    echo -e "${GREEN}✅ All required files are present!${NC}"
else
    echo -e "${RED}❌ Some files are missing.${NC}"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo -e "${YELLOW}Next Steps:${NC}"
echo "1. Update .env.local with your Cognito User Pool ID"
echo "2. Install dependencies: npm install"
echo "3. Test locally: npm run dev"
echo "4. Deploy: ./scripts/deploy-wombs-cognito.sh"
echo ""
