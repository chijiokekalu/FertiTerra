# Wombs Cognito - Quick Start Guide

Get your Wombs app with Cognito authentication up and running in 5 minutes!

## ⚡ Quick Setup (5 minutes)

### 1. Clone and Install (1 min)

\`\`\`bash
# Install dependencies
npm install

# Verify setup
chmod +x scripts/verify-cognito-setup.sh
./scripts/verify-cognito-setup.sh
\`\`\`

### 2. Configure Environment (2 min)

Create `.env.local`:

\`\`\`bash
NEXT_PUBLIC_COGNITO_USER_POOL_ID=us-east-1_YOUR_POOL_ID
NEXT_PUBLIC_COGNITO_CLIENT_ID=your_client_id
NEXT_PUBLIC_COGNITO_DOMAIN=https://your-domain.auth.us-east-1.amazoncognito.com
NEXT_PUBLIC_COGNITO_REDIRECT_URI=http://localhost:3000/wombs
NEXT_PUBLIC_COGNITO_LOGOUT_URI=http://localhost:3000/wombs
NEXT_PUBLIC_REGION=us-east-1
\`\`\`

### 3. Run Locally (1 min)

\`\`\`bash
npm run dev
\`\`\`

Visit: http://localhost:3000/wombs/signup

### 4. Deploy to Production (1 min)

\`\`\`bash
chmod +x scripts/deploy-wombs-cognito.sh
./scripts/deploy-wombs-cognito.sh
\`\`\`

## ✅ What You Get

- 🔐 Secure email OTP authentication
- 👤 Custom user profiles with fertility tracking attributes
- 📊 Personalized dashboard based on user goals
- 🎨 Beautiful, responsive UI
- 🚀 Production-ready deployment

## 🎯 Test the Flow

1. **Signup**: Fill form → Receive email → Verify code
2. **Login**: Enter credentials → Access dashboard
3. **Dashboard**: See personalized content

## 📚 Need Help?

- Full setup guide: `docs/WOMBS_COGNITO_SETUP.md`
- Troubleshooting: Check the guide above
- Support: support@fertiterratechnologies.com

## 🔗 Important URLs

- Local Signup: http://localhost:3000/wombs/signup
- Local Login: http://localhost:3000/wombs/login
- Production: https://fertiterratechnologies.com/wombs

Happy coding! 🎉
