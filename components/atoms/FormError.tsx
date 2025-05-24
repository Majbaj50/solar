interface FormErrorProps {
  message?: string
  className?: string
}

export const FormError = ({ message, className }: FormErrorProps) => {
  if (!message) return null
  return <div className={`text-red-500 text-sm mt-1 ${className || ""}`}>{message}</div>
} 