import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText } from "lucide-react"

interface ApplicationFormTemplateProps {
  currentStep: number
  totalSteps: number
  children: React.ReactNode
  onSubmit: (e: React.FormEvent) => void
}

export const ApplicationFormTemplate = ({
  currentStep,
  totalSteps,
  children,
  onSubmit,
}: ApplicationFormTemplateProps) => {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        {currentStep === 1 && (
          <div className="bg-[#3b7afc] text-white p-8 rounded-lg mb-8 text-center">
            <div className="flex justify-center mb-4">
              <FileText className="h-16 w-16" />
            </div>
            <h1 className="text-3xl font-bold mb-4">See If You Qualify</h1>
            <p className="text-lg">
              Fill out the form below to start your journey towards energy independence. It only takes a few minutes!
            </p>
            <p className="text-lg mt-2">
              Need help? Call us at{" "}
              <a href="tel:+19169172432" className="underline hover:no-underline">
                +1 916-917-2432
              </a>
            </p>
          </div>
        )}

        <Card>
          <CardHeader>
            <CardTitle>SGIP Application {currentStep > 1 && `- Step ${currentStep} of ${totalSteps}`}</CardTitle>
            {currentStep === 1 && (
              <CardDescription>
                Enter the details of the property where the energy storage system will be installed. This helps confirm
                program eligibility, utility jurisdiction, and project feasibility. Please double-check for accuracy.
              </CardDescription>
            )}
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-6">
              {children}
            </form>
          </CardContent>
        </Card>

        <div className="mt-4 text-center text-sm text-gray-500">
          This site is protected by reCAPTCHA Enterprise and the Google{" "}
          <a href="#" className="text-[#3b7afc]">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-[#3b7afc]">
            Terms of Service
          </a>{" "}
          apply.
        </div>
      </div>
    </div>
  )
} 