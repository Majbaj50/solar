"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { FormField } from "@/components/molecules/FormField"
import { FormSection } from "@/components/molecules/FormSection"
import { FormNavigation } from "@/components/organisms/FormNavigation"
import { ApplicationFormTemplate } from "@/components/templates/ApplicationFormTemplate"
import { SuccessMessage } from "@/components/organisms/SuccessMessage"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

// Helper functions
function formatPhoneNumber(value: string) {
  const cleaned = value.replace(/\D/g, "")
  const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/)
  if (!match) return value
  let formatted = ""
  if (match[1]) formatted = `(${match[1]}`
  if (match[2]) formatted += match[2].length === 3 ? `) ${match[2]}` : match[2] ? `) ${match[2]}` : ""
  if (match[3]) formatted += match[3] ? `-${match[3]}` : ""
  return formatted.trim()
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function ApplicationForm() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    // Step 1 - Property Information
    propertyType: "",
    occupancyType: "",
    hoa: "",
    existingSolar: "",
    existingBattery: "",
    streetAddress: "",
    addressLine2: "",
    city: "",
    state: "CA",
    zipCode: "",
    county: "",

    // Step 2 - Host Customer Information
    firstName: "",
    lastName: "",
    dob: "",
    dobMonth: "",
    dobDay: "",
    dobYear: "",
    phoneNumber: "",
    email: "",
    language: "",

    // Step 3 - Utility and Income Information
    utilityCompany: "",
    utilityBill: "",
    greenButton: "",
    householdSize: "",
    incomeTypes: [] as string[],
  })

  // Error states
  const [step1Errors, setStep1Errors] = useState<{ [key: string]: string }>({})
  const [step2Errors, setStep2Errors] = useState<{ [key: string]: string }>({})
  const [step3Errors, setStep3Errors] = useState<{ [key: string]: string }>({})

  const [emailError, setEmailError] = useState<string | null>(null)
  const [dobError, setDobError] = useState<string | null>(null)
  const [phoneError, setPhoneError] = useState<string | null>(null)

  const totalSteps = 3
  const router = useRouter()

  // Form data update handler
  const updateFormData = (field: string, value: string | string[]) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  // Income type change handler
  const handleIncomeTypeChange = (incomeType: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      incomeTypes: checked ? [...prev.incomeTypes, incomeType] : prev.incomeTypes.filter((type) => type !== incomeType),
    }))
  }

  // Date of Birth options
  const dobMonths = [
    { value: "01", label: "01" },
    { value: "02", label: "02" },
    { value: "03", label: "03" },
    { value: "04", label: "04" },
    { value: "05", label: "05" },
    { value: "06", label: "06" },
    { value: "07", label: "07" },
    { value: "08", label: "08" },
    { value: "09", label: "09" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "12" },
  ]
  const dobDays = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, "0"))
  const currentYear = new Date().getFullYear()
  const dobYears = Array.from({ length: 120 }, (_, i) => (currentYear - i).toString())

  // Compose dob string
  useEffect(() => {
    if (formData.dobMonth && formData.dobDay && formData.dobYear) {
      updateFormData("dob", `${formData.dobYear}-${formData.dobMonth}-${formData.dobDay}`)
    }
  }, [formData.dobMonth, formData.dobDay, formData.dobYear])

  // Phone number formatting
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value
    const formatted = formatPhoneNumber(raw)
    updateFormData("phoneNumber", formatted)
  }

  // Email validation
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    updateFormData("email", value)
    if (value && !isValidEmail(value)) {
      setEmailError("Please enter a valid email address.")
    } else {
      setEmailError(null)
    }
  }

  // Validation functions
  const validateStep1 = () => {
    const errors: { [key: string]: string } = {}
    if (!formData.propertyType) errors.propertyType = "Property type is required."
    if (!formData.occupancyType) errors.occupancyType = "Occupancy type is required."
    if (!formData.hoa) errors.hoa = "HOA selection is required."
    if (!formData.existingSolar) errors.existingSolar = "Existing solar selection is required."
    if (!formData.existingBattery) errors.existingBattery = "Existing battery selection is required."
    if (!formData.streetAddress) errors.streetAddress = "Street address is required."
    if (!formData.city) errors.city = "City is required."
    if (!formData.zipCode) errors.zipCode = "ZIP code is required."
    if (!formData.county) errors.county = "County is required."
    setStep1Errors(errors)
    return Object.keys(errors).length === 0
  }

  const validateStep2 = () => {
    const errors: { [key: string]: string } = {}
    setDobError(null)
    setPhoneError(null)
    setEmailError(null)

    if (!formData.firstName) errors.firstName = "First name is required."
    if (!formData.lastName) errors.lastName = "Last name is required."
    if (!formData.dobMonth || !formData.dobDay || !formData.dobYear) {
      errors.dob = "Please select a valid date of birth."
      setDobError("Please select a valid date of birth.")
    } else {
      const dobDate = new Date(
        Number(formData.dobYear),
        Number(formData.dobMonth) - 1,
        Number(formData.dobDay)
      )
      if (isNaN(dobDate.getTime()) || dobDate > new Date() || Number(formData.dobYear) < 1900) {
        errors.dob = "Please select a valid date of birth."
        setDobError("Please select a valid date of birth.")
      }
    }

    const digits = formData.phoneNumber.replace(/\D/g, "")
    if (!formData.phoneNumber) {
      errors.phoneNumber = "Phone number is required."
      setPhoneError("Please enter a valid 10-digit phone number.")
    } else if (digits.length !== 10) {
      errors.phoneNumber = "Please enter a valid 10-digit phone number."
      setPhoneError("Please enter a valid 10-digit phone number.")
    }

    if (!formData.email) {
      errors.email = "Email is required."
      setEmailError("Please enter a valid email address.")
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Please enter a valid email address."
      setEmailError("Please enter a valid email address.")
    }

    if (!formData.language) errors.language = "Primary language is required."

    setStep2Errors(errors)
    return Object.keys(errors).length === 0
  }

  const validateStep3 = () => {
    const errors: { [key: string]: string } = {}
    if (!formData.utilityCompany) errors.utilityCompany = "Utility company is required."
    if (!formData.utilityBill) errors.utilityBill = "Utility bill selection is required."
    if (!formData.greenButton) errors.greenButton = "Green Button selection is required."
    if (!formData.householdSize) errors.householdSize = "Household size is required."
    if (!formData.incomeTypes || formData.incomeTypes.length === 0) errors.incomeTypes = "At least one income type is required."
    setStep3Errors(errors)
    return Object.keys(errors).length === 0
  }

  // Navigation handlers
  const nextStep = () => {
    if (step === 1 && !validateStep1()) return
    if (step === 2 && !validateStep2()) return
    if (step < totalSteps) {
      setStep(step + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
      window.scrollTo(0, 0)
    }
  }

  // Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    if (!validateStep1()) {
      setStep(1);
      valid = false;
    } else if (!validateStep2()) {
      setStep(2);
      valid = false;
    } else if (!validateStep3()) {
      setStep(3);
      valid = false;
    }
    if (!valid) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          router.push("/");
        }, 5000);
      } else {
        alert("There was an error submitting your application. Please try again or call +1 916-917-2432 for assistance.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("There was an error submitting your application. Please try again or call +1 916-917-2432 for assistance.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return <SuccessMessage email={formData.email} />
  }

  return (
    <ApplicationFormTemplate currentStep={step} totalSteps={totalSteps} onSubmit={handleSubmit}>
      {step === 1 && (
        <FormSection title="Property Information">
          <FormField
            id="propertyType"
            label="Property Type"
            type="select"
            value={formData.propertyType}
            onChange={(value) => updateFormData("propertyType", value)}
            error={step1Errors.propertyType}
            required
            options={[
              { value: "single-family", label: "Single Family Home" },
              { value: "multi-family", label: "Multi-Family Home" },
              { value: "condo", label: "Condominium" },
              { value: "townhouse", label: "Townhouse" },
              { value: "mobile", label: "Mobile Home" },
            ]}
          />

          <FormField
            id="occupancyType"
            label="Occupancy Type"
            type="select"
            value={formData.occupancyType}
            onChange={(value) => updateFormData("occupancyType", value)}
            error={step1Errors.occupancyType}
            required
            options={[
              { value: "owner", label: "Owner Occupied" },
              { value: "tenant", label: "Tenant Occupied" },
              { value: "vacant", label: "Vacant" },
            ]}
          />

          <FormField
            id="hoa"
            label="Is this Property Part of an HOA"
            type="select"
            value={formData.hoa}
            onChange={(value) => updateFormData("hoa", value)}
            error={step1Errors.hoa}
            required
            options={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ]}
          />

          <FormField
            id="existingSolar"
            label="Is there Existing Solar at this Address?"
            type="select"
            value={formData.existingSolar}
            onChange={(value) => updateFormData("existingSolar", value)}
            error={step1Errors.existingSolar}
            required
            options={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ]}
          />

          <FormField
            id="existingBattery"
            label="Is there an Existing Battery System?"
            type="select"
            value={formData.existingBattery}
            onChange={(value) => updateFormData("existingBattery", value)}
            error={step1Errors.existingBattery}
            required
            options={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ]}
          />

          <div className="space-y-2">
            <FormField
              id="streetAddress"
              label="Address"
              value={formData.streetAddress}
              onChange={(value) => updateFormData("streetAddress", value)}
              error={step1Errors.streetAddress}
              required
              placeholder="Street Address"
            />

            <FormField
              id="addressLine2"
              label=""
              value={formData.addressLine2}
              onChange={(value) => updateFormData("addressLine2", value)}
              placeholder="Address Line 2"
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                id="city"
                label=""
                value={formData.city}
                onChange={(value) => updateFormData("city", value)}
                error={step1Errors.city}
                required
                placeholder="City"
              />

              <FormField
                id="state"
                label=""
                value="CA"
                disabled
                placeholder="State"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                id="zipCode"
                label=""
                value={formData.zipCode}
                onChange={(value) => updateFormData("zipCode", value)}
                error={step1Errors.zipCode}
                required
                placeholder="Postal / Zip Code"
              />

              <FormField
                id="country"
                label=""
                value="US"
                disabled
                type="select"
                options={[{ value: "US", label: "United States" }]}
              />
            </div>
          </div>

          <FormField
            id="county"
            label="County"
            type="select"
            value={formData.county}
            onChange={(value) => updateFormData("county", value)}
            error={step1Errors.county}
            required
            options={[
              { value: "alameda", label: "Alameda" },
              { value: "losangeles", label: "Los Angeles" },
              { value: "orange", label: "Orange" },
              { value: "sandiego", label: "San Diego" },
              { value: "sanfrancisco", label: "San Francisco" },
              { value: "santaclara", label: "Santa Clara" },
            ]}
          />
        </FormSection>
      )}

      {step === 2 && (
        <FormSection
          title="Host Customer Information"
          description="Please provide the information for the Host Customer, which refers to the person listed on the utility account at the installation address."
        >
          <div>
            <Label htmlFor="firstName" className="text-base">
              Host Customer Full Legal Name <span className="text-red-500">*</span>
            </Label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <FormField
                id="firstName"
                label=""
                value={formData.firstName}
                onChange={(value) => updateFormData("firstName", value)}
                error={step2Errors.firstName}
                required
                placeholder="First"
              />

              <FormField
                id="lastName"
                label=""
                value={formData.lastName}
                onChange={(value) => updateFormData("lastName", value)}
                error={step2Errors.lastName}
                required
                placeholder="Last"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dob" className="text-base">
              Host Customer's Date of Birth <span className="text-red-500">*</span>
            </Label>
            <div className="flex gap-2">
              <FormField
                id="dobMonth"
                label=""
                type="select"
                value={formData.dobMonth}
                onChange={(value) => updateFormData("dobMonth", value)}
                error={dobError}
                required
                options={dobMonths}
                className="w-[80px]"
              />

              <FormField
                id="dobDay"
                label=""
                type="select"
                value={formData.dobDay}
                onChange={(value) => updateFormData("dobDay", value)}
                error={dobError}
                required
                options={dobDays.map((day) => ({ value: day, label: day }))}
                className="w-[80px]"
              />

              <FormField
                id="dobYear"
                label=""
                type="select"
                value={formData.dobYear}
                onChange={(value) => updateFormData("dobYear", value)}
                error={dobError}
                required
                options={dobYears.map((year) => ({ value: year, label: year }))}
                className="w-[100px]"
              />
            </div>
            {dobError && <div className="text-red-500 text-sm mt-1">{dobError}</div>}
          </div>

          <FormField
            id="phoneNumber"
            label="Phone Number"
            type="tel"
            value={formData.phoneNumber}
            onInputChange={handlePhoneChange}
            error={phoneError}
            required
            placeholder="(###) ###-####"
            maxLength={14}
          />

          <FormField
            id="email"
            label="Email"
            type="email"
            value={formData.email}
            onInputChange={handleEmailChange}
            error={emailError}
            required
            placeholder="Email"
          />

          <FormField
            id="language"
            label="Primary Language Spoken at Home"
            type="select"
            value={formData.language}
            onChange={(value) => updateFormData("language", value)}
            error={step2Errors.language}
            required
            options={[
              { value: "english", label: "English" },
              { value: "spanish", label: "Spanish" },
              { value: "chinese", label: "Chinese" },
              { value: "tagalog", label: "Tagalog" },
              { value: "vietnamese", label: "Vietnamese" },
              { value: "korean", label: "Korean" },
              { value: "other", label: "Other" },
            ]}
          />
        </FormSection>
      )}

      {step === 3 && (
        <>
          <FormSection
            title="Electrical Utility Information"
            description="Please provide details about the utility service at the property where the solar and/or battery system will be installed."
          >
            <FormField
              id="utilityCompany"
              label="Utility Company"
              type="select"
              value={formData.utilityCompany}
              onChange={(value) => updateFormData("utilityCompany", value)}
              error={step3Errors.utilityCompany}
              required
              options={[
                { value: "pge", label: "Pacific Gas & Electric (PG&E)" },
                { value: "sce", label: "Southern California Edison (SCE)" },
                { value: "sdge", label: "San Diego Gas & Electric (SDG&E)" },
                { value: "ladwp", label: "Los Angeles Department of Water & Power (LADWP)" },
                { value: "smud", label: "Sacramento Municipal Utility District (SMUD)" },
              ]}
            />

            <FormField
              id="utilityBill"
              label="Do you have a current PDF copy of a recent Utility Bill to upload?"
              type="select"
              value={formData.utilityBill}
              onChange={(value) => updateFormData("utilityBill", value)}
              error={step3Errors.utilityBill}
              required
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            <FormField
              id="greenButton"
              label="Do you have a current Green Button Data file to upload?"
              type="select"
              value={formData.greenButton}
              onChange={(value) => updateFormData("greenButton", value)}
              error={step3Errors.greenButton}
              required
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />
          </FormSection>

          <FormSection
            title="Income Verification"
            description="To qualify for SGIP, the Host Customer must verify that their household income is at or below 80% of the Area Median Income (AMI)."
          >
            <FormField
              id="householdSize"
              label="Household Size"
              type="select"
              value={formData.householdSize}
              onChange={(value) => updateFormData("householdSize", value)}
              error={step3Errors.householdSize}
              required
              options={[
                { value: "1", label: "1" },
                { value: "2", label: "2" },
                { value: "3", label: "3" },
                { value: "4", label: "4" },
                { value: "5", label: "5" },
                { value: "6", label: "6" },
                { value: "7", label: "7" },
                { value: "8", label: "8+" },
              ]}
            />

            <div>
              <Label className="text-base">
                Income Type (Choose all that apply) <span className="text-red-500">*</span>
              </Label>
              <div className="space-y-2 mt-2">
                {[
                  { id: "income-w2", label: "W2 Employment (Hourly or Salary)" },
                  {
                    id: "income-pension",
                    label:
                      "Pensions, Social Security (SSA, SSDI, RSDI), Disability Payments, Worker's Compensation, Unemployment Benefits, VA Benefits",
                  },
                  { id: "income-insurance", label: "Insurance and/or Legal Settlements" },
                  { id: "income-child", label: "Child and/or Spousal Support, Foster Care Payments" },
                  { id: "income-farm", label: "Farm Income" },
                  {
                    id: "income-interest",
                    label: "Interest and/or Dividends from: Savings, Stocks, Bonds, Mutual Funds",
                  },
                  { id: "income-401k", label: "401k, IRA Withdrawals or Annuities" },
                  { id: "income-capital", label: "Capital Gains" },
                  { id: "income-rental", label: "Rental and/or Royalty Income" },
                  { id: "income-self", label: "Profit from Self-Employment, Commissions" },
                  { id: "income-gambling", label: "Gambling/Lottery Winnings" },
                  { id: "income-cash", label: "Cash Income (when you have not filed federal or state taxes)" },
                  {
                    id: "income-none",
                    label:
                      "Monetary Gifts, Savings, none of the examples above apply or if you do not receive income",
                  },
                  { id: "income-other", label: "Other" },
                ].map((income) => (
                  <div key={income.id} className="flex items-start space-x-2">
                    <Checkbox
                      id={income.id}
                      checked={formData.incomeTypes.includes(income.id)}
                      onCheckedChange={(checked) => handleIncomeTypeChange(income.id, checked as boolean)}
                      required
                      aria-required="true"
                    />
                    <Label htmlFor={income.id} className="font-normal">
                      {income.label}
                    </Label>
                  </div>
                ))}
              </div>
              {step3Errors.incomeTypes && <div className="text-red-500 text-sm mt-1">{step3Errors.incomeTypes}</div>}
            </div>
          </FormSection>
        </>
      )}

      <FormNavigation
        currentStep={step}
        totalSteps={totalSteps}
        isSubmitting={isSubmitting}
        onNext={nextStep}
        onBack={prevStep}
        onSubmit={handleSubmit}
      />
    </ApplicationFormTemplate>
  )
}
