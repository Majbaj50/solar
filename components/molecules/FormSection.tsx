interface FormSectionProps {
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}

export const FormSection = ({ title, description, children, className }: FormSectionProps) => {
  return (
    <div className={`space-y-4 ${className || ""}`}>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        {description && <p className="text-sm text-gray-500 mb-4">{description}</p>}
      </div>
      {children}
    </div>
  )
} 