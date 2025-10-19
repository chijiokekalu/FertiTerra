"use client"

import type React from "react"

import { useEffect } from "react"
import { Amplify } from "aws-amplify"

const amplifyConfig = {
  Auth: {
    region: process.env.NEXT_PUBLIC_REGION || "us-east-1",
    userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID || "3ufs87b5gdr4e33f9sbbk154vl",
  },
}

export default function WombsLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    Amplify.configure(amplifyConfig)
  }, [])

  return <>{children}</>
}
