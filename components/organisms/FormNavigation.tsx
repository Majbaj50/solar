import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react"
import Link from "next/link"

interface FormNavigationProps {
  currentStep: number
  totalSteps: number
  isSubmitting: boolean
  onNext: () => void
  onBack: () => void
  onSubmit: (e: React.FormEvent) => void
}

export const FormNavigation = ({
  currentStep,
  totalSteps,
  isSubmitting,
  onNext,
  onBack,
  onSubmit,
}: FormNavigationProps) => {
  return (
    <div className="flex justify-between mt-8">
      {currentStep > 1 ? (
        <Button type="button" variant="outline" onClick={onBack} disabled={isSubmitting}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
      ) : (
        <Link href="/">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Home
          </Button>
        </Link>
      )}

      {currentStep < totalSteps ? (
        <Button type="button" onClick={onNext} disabled={isSubmitting}>
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      ) : (
        <Button type="submit" onClick={onSubmit} disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Application"
          )}
        </Button>
      )}
    </div>
  )
} 