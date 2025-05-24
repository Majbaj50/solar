import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface FormLabelProps {
  htmlFor: string
  required?: boolean
  className?: string
  children: React.ReactNode
}

export const FormLabel = ({ htmlFor, required = false, className, children }: FormLabelProps) => {
  return (
    <Label htmlFor={htmlFor} className={cn("text-base", className)}>
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </Label>
  )
} 