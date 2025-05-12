import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

export default function QuestionnairePage() {
  return (
    <div className="container max-w-3xl py-10">
      <div className="mb-8">
        <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Fertility Assessment</h1>
        <p className="text-muted-foreground mt-2">
          Help us understand your fertility health to provide personalized recommendations.
        </p>
      </div>
      <div className="flex items-center justify-between mb-6">
        <div className="text-sm font-medium">Step 1 of 5: Basic Information</div>
        <div className="text-sm text-muted-foreground">~5 minutes to complete</div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Tell us about yourself</CardTitle>
          <CardDescription>This information helps us understand your fertility journey better.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label>What is your primary reason for using FertiTerra?</Label>
            <RadioGroup defaultValue="ttc">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ttc" id="ttc" />
                <Label htmlFor="ttc" className="font-normal">
                  I'm trying to conceive
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="perimenopause" id="perimenopause" />
                <Label htmlFor="perimenopause" className="font-normal">
                  I'm experiencing perimenopause symptoms
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="wellness" id="wellness" />
                <Label htmlFor="wellness" className="font-normal">
                  I want to improve my general reproductive health
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other" className="font-normal">
                  Other
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label>How long have you been trying to conceive? (if applicable)</Label>
            <RadioGroup defaultValue="not-trying">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="not-trying" id="not-trying" />
                <Label htmlFor="not-trying" className="font-normal">
                  I'm not trying to conceive
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="less-than-6" id="less-than-6" />
                <Label htmlFor="less-than-6" className="font-normal">
                  Less than 6 months
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="6-12" id="6-12" />
                <Label htmlFor="6-12" className="font-normal">
                  6-12 months
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="more-than-12" id="more-than-12" />
                <Label htmlFor="more-than-12" className="font-normal">
                  More than 12 months
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label htmlFor="concerns">What are your main fertility concerns or symptoms?</Label>
            <Textarea
              id="concerns"
              placeholder="Please describe any symptoms or concerns you're experiencing..."
              className="min-h-[100px]"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" disabled>
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
          </Button>
          <Button>
            Next <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
