import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

interface SuccessMessageProps {
  email: string
}

export const SuccessMessage = ({ email }: SuccessMessageProps) => {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <h1 className="text-3xl font-bold text-[#3b7afc]">Application Submitted Successfully!</h1>
              <p className="text-lg text-gray-700">
                Thank you for applying for California's Free Solar & Battery Program. We've received your application
                and sent a confirmation email to {email}.
              </p>
              <div className="bg-[#f0f5ff] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#3b7afc] mb-3">What Happens Next?</h3>
                <ol className="text-left space-y-2">
                  <li>
                    <strong>1. Application Review (2-4 weeks):</strong> Our team will review your application and
                    verify your eligibility.
                  </li>
                  <li>
                    <strong>2. Site Assessment (1-2 weeks):</strong> If eligible, we'll schedule a property
                    assessment.
                  </li>
                  <li>
                    <strong>3. Installation (1-3 days):</strong> Professional installation at no cost to you.
                  </li>
                </ol>
              </div>
              <p className="text-gray-600">
                Questions? Call us at{" "}
                <a href="tel:+19169172432" className="text-[#3b7afc] font-semibold hover:underline">
                  +1 916-917-2432
                </a>
              </p>
              <Button asChild className="bg-[#3b7afc] hover:bg-[#2a5fd3]">
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 