# Environment Variables Setup Guide

This guide will help you set up all the necessary environment variables for the FertiTerra Technologies application.

## Quick Start

1. Copy the example environment file:
   \`\`\`bash
   cp .env.local.example .env.local
   \`\`\`

2. Fill in your actual values in `.env.local`

3. For production, create `.env.production` with production values

## Required Variables

### Site Configuration

\`\`\`bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`
- **Description**: The base URL of your application
- **Development**: `http://localhost:3000`
- **Production**: `https://fertiterratechnologies.com`
- **Note**: Must include protocol (http:// or https://)

### AWS Cognito (Authentication)

\`\`\`bash
COGNITO_DOMAIN=your-domain.auth.region.amazoncognito.com
COGNITO_CLIENT_ID=your_client_id
COGNITO_CLIENT_SECRET=your_client_secret
COGNITO_REDIRECT_URI=http://localhost:3000/api/auth/callback
COGNITO_LOGOUT_URI=http://localhost:3000
\`\`\`

**How to get these:**
1. Go to AWS Console → Cognito → User Pools
2. Create or select your user pool
3. Go to "App Integration" → "App clients"
4. Copy the Client ID and Client Secret
5. Set up the hosted UI domain and callback URLs

### Supabase (Database & Auth)

\`\`\`bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
\`\`\`

**How to get these:**
1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Go to Settings → API
4. Copy the URL and anon/service keys

### Database (Neon/Postgres)

\`\`\`bash
NEON_DATABASE_URL=postgresql://user:password@host:5432/database
\`\`\`

**How to get these:**
1. Sign up at [Neon](https://neon.tech) or your Postgres provider
2. Create a new database
3. Copy the connection string

### Redis/Upstash (Caching)

\`\`\`bash
KV_REST_API_URL=https://your-redis.upstash.io
KV_REST_API_TOKEN=your_token
\`\`\`

**How to get these:**
1. Sign up at [Upstash](https://upstash.com)
2. Create a new Redis database
3. Copy the REST API URL and token

### WhatsApp Business API

\`\`\`bash
WHATSAPP_VERIFY_TOKEN=your_custom_verify_token
WHATSAPP_PHONE_NUMBER_ID=your_phone_number_id
WHATSAPP_ACCESS_TOKEN=your_access_token
\`\`\`

**How to get these:**
1. Go to [Facebook Business Manager](https://business.facebook.com)
2. Set up WhatsApp Business API
3. Get your Phone Number ID and Access Token
4. Create a custom verify token for webhook verification

## Usage in Code

### Accessing Environment Variables

\`\`\`typescript
// Import the config helper
import { config, getBaseUrl, getAbsoluteUrl } from '@/lib/config'

// Use the config object
const siteUrl = config.siteUrl
const cognitoDomain = config.cognito.domain

// Get base URL
const baseUrl = getBaseUrl() // Returns appropriate URL based on environment

// Get absolute URL
const profileUrl = getAbsoluteUrl('/profile') // Returns full URL with domain
\`\`\`

### Using NEXT_PUBLIC_ Variables

Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser:

\`\`\`typescript
// Available in both client and server components
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
\`\`\`

### Server-Only Variables

Variables without `NEXT_PUBLIC_` prefix are only available on the server:

\`\`\`typescript
// Only available in Server Components, API routes, and Server Actions
const secretKey = process.env.COGNITO_CLIENT_SECRET
\`\`\`

## Environment-Specific Files

### `.env.local` (Local Development)
- Used for local development
- Never commit this file to version control
- Contains development credentials

### `.env.production` (Production)
- Used for production builds
- Contains production credentials
- Can be deployed via Vercel environment variables

### `.env.local.example` (Template)
- Template file showing all required variables
- Safe to commit to version control
- Contains placeholder values

## Vercel Deployment

When deploying to Vercel:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add all variables from `.env.production`
4. Make sure to set the environment (Production/Preview/Development)

## Security Best Practices

1. ✅ Never commit `.env.local` or `.env.production` to version control
2. ✅ Always use `.env.local.example` as a template
3. ✅ Keep sensitive keys server-side (no `NEXT_PUBLIC_` prefix)
4. ✅ Rotate API keys regularly
5. ✅ Use different credentials for development and production
6. ✅ Enable 2FA on all service accounts

## Troubleshooting

### Variables Not Loading

\`\`\`bash
# Restart the development server
npm run dev
\`\`\`

### Production Build Issues

\`\`\`bash
# Verify all required variables are set
npm run build
\`\`\`

### Checking Current Environment

\`\`\`typescript
console.log('Environment:', process.env.NODE_ENV)
console.log('Site URL:', process.env.NEXT_PUBLIC_SITE_URL)
\`\`\`

## Need Help?

- Check the [Next.js Environment Variables Documentation](https://nextjs.org/docs/basic-features/environment-variables)
- Contact the development team
- Review service-specific documentation for API keys
