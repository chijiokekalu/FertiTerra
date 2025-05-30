"use client"
import { useState, useActionState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, AlertCircle, Mail, CheckCircle } from "lucide-react"
import { signUpAction } from "@/actions/auth"

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [clientError, setClientError] = useState<string | null>(null)
  const [state, formAction, isPending] = useActionState(signUpAction, null)

  const handleSubmit = async (formData: FormData) => {
    setClientError(null)

    // Client-side validation
    const emailValue = formData.get("email") as string
    const passwordValue = formData.get("password") as string
    const confirmPasswordValue = confirmPassword

    if (!emailValue || !passwordValue || !confirmPasswordValue) {
      setClientError("All fields are required")
      return
    }

    if (passwordValue !== confirmPasswordValue) {
      setClientError("Passwords do not match")
      return
    }

    if (passwordValue.length < 6) {
      setClientError("Password must be at least 6 characters")
      return
    }

    // If validation passes, submit to server action
    formAction(formData)
  }

  // Show success state if signup was successful
  if (state?.success && state?.needsConfirmation) {
    return (
      <div className="flex min-h-screen flex-col">
        <div className="flex flex-1 flex-col items-center justify-center px-4 py-12">
          <Link href="/" className="flex items-center mb-8">
            <Image
              src="/placeholder.svg?height=45&width=160&text=FertiTerra"
              alt="FertiTerra Logo"
              width={160}
              height={45}
              className="h-12 w-auto"
            />
          </Link>

          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <Mail className="mx-auto h-12 w-12 text-blue-500 mb-4" />
              <CardTitle className="text-2xl font-bold">Check Your Email</CardTitle>
              <CardDescription>
                We've sent a confirmation link to <strong>{state.email}</strong>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="bg-green-50 border-green-200">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  Account created successfully! Please check your email to confirm your account.
                </AlertDescription>
              </Alert>

              <div className="text-sm text-gray-600 space-y-2">
                <h4 className="font-medium">What's next?</h4>
                <ul className="space-y-1">
                  <li>• Check your email inbox for a confirmation link</li>
                  <li>• Click the link to activate your account</li>
                  <li>• Start tracking your fertility journey</li>
                  <li>• Book consultations with our doctors</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">After confirmation, you'll have access to:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>📊 Menstrual cycle and ovulation tracking</li>
                  <li>📚 Comprehensive fertility health resources</li>
                  <li>👩‍⚕️ Video consultations with fertility specialists</li>
                  <li>📈 Personalized health insights and reports</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="/login">Back to Login</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-12">
        <Link href="/" className="flex items-center mb-8">
          <Image
            src="/placeholder.svg?height=45&width=160&text=FertiTerra"
            alt="FertiTerra Logo"
            width={160}
            height={45}
            className="h-12 w-auto"
          />
        </Link>

        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Create your account</CardTitle>
            <CardDescription>
              Join FertiTerra to track your fertility journey and connect with specialists
            </CardDescription>
          </CardHeader>

          <form action={handleSubmit}>
            <CardContent className="space-y-4">
              {(clientError || state?.error) && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{clientError || state?.error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isPending}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="At least 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isPending}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm password</Label>
                <Input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  disabled={isPending}
                />
              </div>

              <div className="bg-rose-50 p-4 rounded-lg">
                <h4 className="font-medium text-rose-900 mb-2">What you'll get access to:</h4>
                <ul className="text-sm text-rose-800 space-y-1">
                  <li>🩺 Track menstrual cycles and ovulation</li>
                  <li>📖 Read expert fertility health content</li>
                  <li>👩‍⚕️ Book video consultations with doctors</li>
                  <li>📊 Get personalized health insights</li>
                </ul>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4">
              <Button className="w-full" type="submit" disabled={isPending}>
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  "Create account"
                )}
              </Button>

              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link href="/login" className="text-rose-500 hover:underline">
                  Log in
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}
