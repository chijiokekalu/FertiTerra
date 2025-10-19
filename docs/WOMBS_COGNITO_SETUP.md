# Wombs App - Cognito Email OTP Setup Guide

This guide will help you set up AWS Cognito authentication with email OTP for the Wombs fertility tracking app.

## Prerequisites

- AWS Account with Cognito access
- Vercel account
- Node.js 18+ installed
- Vercel CLI installed

## Step 1: Configure AWS Cognito User Pool

### 1.1 Create Custom Attributes

In your Cognito User Pool, add the following custom attributes:

| Attribute Name | Type | Mutable | Description |
|---------------|------|---------|-------------|
| `cycle_length` | String | Yes | User's menstrual cycle length (21-35 days) |
| `fertility_goal` | String | Yes | User's fertility tracking goal |
| `plan_type` | String | Yes | User's subscription plan |
| `referral_code` | String | Yes | Referral code used during signup |

### 1.2 Configure Email Verification

1. Go to **User Pool Settings** > **MFA and verifications**
2. Enable **Email** as verification method
3. Configure email templates for verification codes
4. Set code validity period (recommended: 24 hours)

### 1.3 Configure App Client

1. Create an app client (if not exists)
2. Note down the **Client ID**
3. Enable the following OAuth flows:
   - Authorization code grant
   - Implicit grant
4. Set OAuth scopes:
   - `openid`
   - `email`
   - `profile`
5. Add callback URLs:
   - `https://fertiterratechnologies.com/wombs`
   - `http://localhost:3000/wombs` (for local testing)

## Step 2: Get Required Credentials

You'll need the following from AWS Cognito:

1. **User Pool ID**: Found in User Pool > General Settings
   - Format: `us-east-1_xxxxxxxxx`

2. **App Client ID**: Found in App Clients section
   - Format: `3ufs87b5gdr4e33f9sbbk154vl`

3. **Cognito Domain**: Your custom domain or AWS-provided domain
   - Format: `https://login.fertiterratechnologies.com`

4. **Region**: AWS region where your User Pool is located
   - Example: `us-east-1`

## Step 3: Local Development Setup

### 3.1 Create Environment File

\`\`\`bash
cp .env.local.example .env.local
\`\`\`

### 3.2 Update Environment Variables

Edit `.env.local` with your Cognito credentials:

\`\`\`bash
# Cognito Configuration
NEXT_PUBLIC_COGNITO_DOMAIN=https://login.fertiterratechnologies.com
NEXT_PUBLIC_COGNITO_REDIRECT_URI=http://localhost:3000/wombs
NEXT_PUBLIC_COGNITO_LOGOUT_URI=http://localhost:3000/wombs
NEXT_PUBLIC_COGNITO_CLIENT_ID=3ufs87b5gdr4e33f9sbbk154vl
NEXT_PUBLIC_COGNITO_USER_POOL_ID=us-east-1_xxxxxxxxx
NEXT_PUBLIC_COGNITO_SCOPES=openid email profile
NEXT_PUBLIC_REGION=us-east-1
\`\`\`

### 3.3 Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 3.4 Verify Setup

\`\`\`bash
chmod +x scripts/verify-cognito-setup.sh
./scripts/verify-cognito-setup.sh
\`\`\`

### 3.5 Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Visit `http://localhost:3000/wombs/signup` to test signup flow.

## Step 4: Production Deployment

### 4.1 Make Deploy Script Executable

\`\`\`bash
chmod +x scripts/deploy-wombs-cognito.sh
\`\`\`

### 4.2 Run Deployment

\`\`\`bash
./scripts/deploy-wombs-cognito.sh
\`\`\`

The script will:
1. Check Vercel authentication
2. Set all environment variables in Vercel
3. Install dependencies
4. Build the application
5. Deploy to production

### 4.3 Update Cognito Callback URLs

After deployment, add the production URL to Cognito:

1. Go to App Client Settings
2. Add callback URL: `https://fertiterratechnologies.com/wombs`
3. Add sign-out URL: `https://fertiterratechnologies.com/wombs`
4. Save changes

## Step 5: Testing

### Test Signup Flow

1. Go to `https://fertiterratechnologies.com/wombs/signup`
2. Fill in all required fields:
   - First Name
   - Last Name
   - Email
   - Password (min 8 characters)
   - Cycle Length (21-35 days)
   - Fertility Goal
   - Plan Type
   - Referral Code (optional)
3. Submit form
4. Check email for verification code
5. Enter code to verify account
6. Should auto-login and redirect to dashboard

### Test Login Flow

1. Go to `https://fertiterratechnologies.com/wombs/login`
2. Enter email and password
3. Should redirect to personalized dashboard

### Test Dashboard Personalization

The dashboard should display:
- User's name and email
- Personalized greeting with cycle day
- Fertility goal-specific content
- Plan type badge
- Custom cycle length in stats
- Referral code (if provided)

## Troubleshooting

### Issue: "User Pool ID is required"

**Solution**: Make sure you've set `NEXT_PUBLIC_COGNITO_USER_POOL_ID` in environment variables.

### Issue: "Invalid verification code"

**Solutions**:
1. Check that email verification is enabled in Cognito
2. Verify code hasn't expired (default: 24 hours)
3. Check spam folder for verification email
4. Try resending code

### Issue: "NotAuthorizedException"

**Solutions**:
1. Verify email/password are correct
2. Check if user's email is verified
3. Confirm user exists in Cognito User Pool

### Issue: Custom attributes not showing

**Solutions**:
1. Verify custom attributes are created in Cognito
2. Check attribute names match exactly: `custom:cycle_length`, etc.
3. Ensure attributes are marked as mutable
4. Re-deploy after adding attributes

### Issue: "User is not authenticated"

**Solutions**:
1. Check if Amplify is properly configured
2. Verify environment variables are set correctly
3. Clear browser localStorage and try again
4. Check Network tab for authentication errors

## Custom Attributes Reference

### cycle_length
- **Type**: String
- **Values**: "21" to "35"
- **Purpose**: Track user's menstrual cycle length for predictions

### fertility_goal
- **Type**: String
- **Values**: 
  - `"tracking"` - General cycle tracking
  - `"conceiving"` - Trying to conceive
  - `"preventing"` - Pregnancy prevention
  - `"health"` - Health monitoring
  - `"planning"` - Future family planning
- **Purpose**: Personalize dashboard and recommendations

### plan_type
- **Type**: String
- **Values**:
  - `"free"` - Free plan
  - `"basic"` - Basic plan ($9.99/mo)
  - `"premium"` - Premium plan ($19.99/mo)
  - `"enterprise"` - Enterprise plan
- **Purpose**: Control feature access and display plan badge

### referral_code
- **Type**: String
- **Values**: Any alphanumeric string
- **Purpose**: Track user acquisition and apply referral benefits

## Security Considerations

1. **Never expose secrets**: Only `NEXT_PUBLIC_*` variables are safe for client-side
2. **Use HTTPS**: Always use HTTPS in production
3. **Rotate credentials**: Regularly rotate Client Secrets
4. **Monitor usage**: Set up CloudWatch alarms for suspicious activity
5. **Enable MFA**: Consider enabling MFA for sensitive operations
6. **CORS policies**: Configure proper CORS in Cognito
7. **Token expiration**: Set appropriate token expiration times

## Support

For issues or questions:
- Email: support@fertiterratechnologies.com
- AWS Cognito Docs: https://docs.aws.amazon.com/cognito/
- Amplify Docs: https://docs.amplify.aws/

## Next Steps

After successful setup:
1. Configure email templates in Cognito for better branding
2. Set up CloudWatch monitoring for authentication events
3. Implement password reset flow
4. Add social sign-in (Google, Facebook)
5. Set up user data backup
6. Implement analytics tracking
\`\`\`

Now create a quick start guide:
