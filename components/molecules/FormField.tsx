import { FormLabel } from "@/components/atoms/FormLabel"
import { FormError } from "@/components/atoms/FormError"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

interface FormFieldProps {
  id: string
  label: string
  required?: boolean
  error?: string | null
  type?: "text" | "email" | "tel" | "select"
  value?: string
  onChange?: (value: string) => void
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  options?: { value: string; label: string }[]
  className?: string
  maxLength?: number
  disabled?: boolean
}

export const FormField = ({
  id,
  label,
  required = false,
  error,
  type = "text",
  value,
  onChange,
  onInputChange,
  placeholder,
  options,
  className,
  maxLength,
  disabled = false,
}: FormFieldProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onInputChange) {
      onInputChange(e)
    } else if (onChange) {
      onChange(e.target.value)
    }
  }

  const handleSelectChange = (value: string) => {
    onChange?.(value)
  }

  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <FormLabel htmlFor={id} required={required}>
          {label}
        </FormLabel>
      )}
      {type === "select" ? (
        <Select value={value} onValueChange={handleSelectChange} disabled={disabled}>
          <SelectTrigger id={id} className={cn(error && "border-red-500")}>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options?.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : (
        <Input
          id={id}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          maxLength={maxLength}
          disabled={disabled}
          className={cn(error && "border-red-500")}
          aria-required={required}
        />
      )}
      {error && <FormError message={error} />}
    </div>
  )
} 