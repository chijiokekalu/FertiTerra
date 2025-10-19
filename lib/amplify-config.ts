import { Amplify } from "aws-amplify"

const amplifyConfig = {
  Auth: {
    region: process.env.NEXT_PUBLIC_REGION || "us-east-1",
    userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || "us-east-1_example",
    userPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID || "3ufs87b5gdr4e33f9sbbk154vl",
    oauth: {
      domain: process.env.NEXT_PUBLIC_COGNITO_DOMAIN?.replace("https://", "") || "login.fertiterratechnologies.com",
      scope: ["openid", "email", "profile"],
      redirectSignIn: process.env.NEXT_PUBLIC_COGNITO_REDIRECT_URI || "https://fertiterratechnologies.com/wombs",
      redirectSignOut: process.env.NEXT_PUBLIC_COGNITO_LOGOUT_URI || "https://fertiterratechnologies.com/wombs",
      responseType: "code",
    },
  },
}

Amplify.configure(amplifyConfig)

export default amplifyConfig
