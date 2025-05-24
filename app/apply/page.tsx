"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, ArrowRight, FileText } from "lucide-react"
import Link from "next/link"

export default function ApplicationForm() {
  const [step, setStep] = useState(1)
  const totalSteps = 3

  const nextStep = () => {
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

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        {step === 1 && (
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
            <CardTitle>SGIP Application {step > 1 && `- Step ${step} of ${totalSteps}`}</CardTitle>
            {step === 1 && (
              <CardDescription>
                Enter the details of the property where the energy storage system will be installed. This helps confirm
                program eligibility, utility jurisdiction, and project feasibility. Please double-check for accuracy.
              </CardDescription>
            )}
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              {step === 1 && (
                <>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="propertyType" className="text-base">
                        Property Type <span className="text-red-500">*</span>
                      </Label>
                      <Select required>
                        <SelectTrigger id="propertyType">
                          <SelectValue placeholder="Choose One" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single-family">Single Family Home</SelectItem>
                          <SelectItem value="multi-family">Multi-Family Home</SelectItem>
                          <SelectItem value="condo">Condominium</SelectItem>
                          <SelectItem value="townhouse">Townhouse</SelectItem>
                          <SelectItem value="mobile">Mobile Home</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="occupancyType" className="text-base">
                        Occupancy Type <span className="text-red-500">*</span>
                      </Label>
                      <Select required>
                        <SelectTrigger id="occupancyType">
                          <SelectValue placeholder="Choose One" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="owner">Owner Occupied</SelectItem>
                          <SelectItem value="tenant">Tenant Occupied</SelectItem>
                          <SelectItem value="vacant">Vacant</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="hoa" className="text-base">
                        Is this Property Part of an HOA <span className="text-red-500">*</span>
                      </Label>
                      <Select required>
                        <SelectTrigger id="hoa">
                          <SelectValue placeholder="Choose One" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="existingSolar" className="text-base">
                        Is there Existing Solar at this Address? <span className="text-red-500">*</span>
                      </Label>
                      <Select required>
                        <SelectTrigger id="existingSolar">
                          <SelectValue placeholder="Choose One" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="existingBattery" className="text-base">
                        Is there an Existing Battery System? <span className="text-red-500">*</span>
                      </Label>
                      <Select required>
                        <SelectTrigger id="existingBattery">
                          <SelectValue placeholder="Choose One" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="streetAddress" className="text-base">
                        Address <span className="text-red-500">*</span>
                      </Label>
                      <Input id="streetAddress" placeholder="Street Address" required />
                      <Input id="addressLine2" placeholder="Address Line 2" />
                      <div className="grid grid-cols-2 gap-4">
                        <Input id="city" placeholder="City" required />
                        <Input id="state" placeholder="CA" defaultValue="CA" disabled />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <Input id="zipCode" placeholder="Postal / Zip Code" required />
                        <Select defaultValue="US" required>
                          <SelectTrigger id="country">
                            <SelectValue placeholder="Country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="US">United States</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="county" className="text-base">
                        County <span className="text-red-500">*</span>
                      </Label>
                      <Select required>
                        <SelectTrigger id="county">
                          <SelectValue placeholder="Choose One" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="alameda">Alameda</SelectItem>
                          <SelectItem value="losangeles">Los Angeles</SelectItem>
                          <SelectItem value="orange">Orange</SelectItem>
                          <SelectItem value="sandiego">San Diego</SelectItem>
                          <SelectItem value="sanfrancisco">San Francisco</SelectItem>
                          <SelectItem value="santaclara">Santa Clara</SelectItem>
                          {/* Add more counties as needed */}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Host Customer Information</h3>
                      <p className="text-sm text-gray-500 mb-4">
                        Please provide the information for the Host Customer, which refers to the person listed on the
                        utility account at the installation address. In rental situations, this will typically be the
                        tenant, not the property owner. This individual will be the one required to complete income
                        verification for SGIP eligibility.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-base">
                          Host Customer Full Legal Name <span className="text-red-500">*</span>
                        </Label>
                        <Input id="firstName" placeholder="First" required />
                      </div>
                      <div className="pt-6">
                        <Input id="lastName" placeholder="Last" required />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="dob" className="text-base">
                        Host Customer's Date of Birth <span className="text-red-500">*</span>
                      </Label>
                      <div className="grid grid-cols-3 gap-2">
                        <Input id="month" placeholder="MM" maxLength={2} required />
                        <Input id="day" placeholder="DD" maxLength={2} required />
                        <Input id="year" placeholder="YYYY" maxLength={4} required />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-base">
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <div className="grid grid-cols-3 gap-2">
                        <Input id="areaCode" placeholder="###" maxLength={3} required />
                        <Input id="prefix" placeholder="###" maxLength={3} required />
                        <Input id="lineNumber" placeholder="####" maxLength={4} required />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-base">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input id="email" type="email" placeholder="Email" required />
                    </div>

                    <div>
                      <Label htmlFor="language" className="text-base">
                        Primary Language Spoken at Home <span className="text-red-500">*</span>
                      </Label>
                      <Select required>
                        <SelectTrigger id="language">
                          <SelectValue placeholder="Choose One" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="spanish">Spanish</SelectItem>
                          <SelectItem value="chinese">Chinese</SelectItem>
                          <SelectItem value="tagalog">Tagalog</SelectItem>
                          <SelectItem value="vietnamese">Vietnamese</SelectItem>
                          <SelectItem value="korean">Korean</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Electrical Utility Information</h3>
                      <p className="text-sm text-gray-500 mb-4">
                        Please provide details about the utility service at the property where the solar and/or battery
                        system will be installed. This information is required to verify eligibility for SGIP funding
                        and ensure your application is submitted correctly.
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="utilityCompany" className="text-base">
                        Utility Company <span className="text-red-500">*</span>
                      </Label>
                      <Select required>
                        <SelectTrigger id="utilityCompany">
                          <SelectValue placeholder="Choose One" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pge">Pacific Gas & Electric (PG&E)</SelectItem>
                          <SelectItem value="sce">Southern California Edison (SCE)</SelectItem>
                          <SelectItem value="sdge">San Diego Gas & Electric (SDG&E)</SelectItem>
                          <SelectItem value="ladwp">Los Angeles Department of Water & Power (LADWP)</SelectItem>
                          <SelectItem value="smud">Sacramento Municipal Utility District (SMUD)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="utilityBill" className="text-base">
                        Do you have a current PDF copy of a recent Utility Bill to upload?{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Select required>
                        <SelectTrigger id="utilityBill">
                          <SelectValue placeholder="Choose One" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="greenButton" className="text-base">
                        Do you have a current Green Button Data file to upload? <span className="text-red-500">*</span>
                      </Label>
                      <Select required>
                        <SelectTrigger id="greenButton">
                          <SelectValue placeholder="Choose One" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Income Verification</h3>
                      <p className="text-sm text-gray-500 mb-4">
                        To qualify for SGIP, the Host Customer must verify that their household income is at or below
                        80% of the Area Median Income (AMI). Acceptable documentation includes a recent tax return or
                        proof of enrollment in a qualifying utility company program such as CARE, FERA, ESA, SASH,
                        DAC-SASH, MASH, or SOMAH. If no tax return is available, alternative documentation may be
                        accepted on a case-by-case basis.
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="householdSize" className="text-base">
                        Household Size <span className="text-red-500">*</span>
                      </Label>
                      <Select required>
                        <SelectTrigger id="householdSize">
                          <SelectValue placeholder="Choose One" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="5">5</SelectItem>
                          <SelectItem value="6">6</SelectItem>
                          <SelectItem value="7">7</SelectItem>
                          <SelectItem value="8">8+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-base">
                        Income Type (Choose all that apply) <span className="text-red-500">*</span>
                      </Label>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-start space-x-2">
                          <Checkbox id="income-w2" />
                          <Label htmlFor="income-w2" className="font-normal">
                            W2 Employment (Hourly or Salary)
                          </Label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Checkbox id="income-pension" />
                          <Label htmlFor="income-pension" className="font-normal">
                            Pensions, Social Security (SSA, SSDI, RSDI), Disability Payments, Worker's Compensation,
                            Unemployment Benefits, VA Benefits
                          </Label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Checkbox id="income-insurance" />
                          <Label htmlFor="income-insurance" className="font-normal">
                            Insurance and/or Legal Settlements
                          </Label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Checkbox id="income-child" />
                          <Label htmlFor="income-child" className="font-normal">
                            Child and/or Spousal Support, Foster Care Payments
                          </Label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Checkbox id="income-farm" />
                          <Label htmlFor="income-farm" className="font-normal">
                            Farm Income
                          </Label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Checkbox id="income-interest" />
                          <Label htmlFor="income-interest" className="font-normal">
                            Interest and/or Dividends from: Savings, Stocks, Bonds, Mutual Funds
                          </Label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Checkbox id="income-401k" />
                          <Label htmlFor="income-401k" className="font-normal">
                            401k, IRA Withdrawals or Annuities
                          </Label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Checkbox id="income-capital" />
                          <Label htmlFor="income-capital" className="font-normal">
                            Capital Gains
                          </Label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Checkbox id="income-rental" />
                          <Label htmlFor="income-rental" className="font-normal">
                            Rental and/or Royalty Income
                          </Label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Checkbox id="income-self" />
                          <Label htmlFor="income-self" className="font-normal">
                            Profit from Self-Employment, Commissions
                          </Label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Checkbox id="income-gambling" />
                          <Label htmlFor="income-gambling" className="font-normal">
                            Gambling/Lottery Winnings
                          </Label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Checkbox id="income-cash" />
                          <Label htmlFor="income-cash" className="font-normal">
                            Cash Income (when you have not filed federal or state taxes)
                          </Label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Checkbox id="income-none" />
                          <Label htmlFor="income-none" className="font-normal">
                            Monetary Gifts, Savings, none of the examples above apply or if you do not receive income.
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="flex justify-between mt-8">
                {step > 1 ? (
                  <Button type="button" variant="outline" onClick={prevStep}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                ) : (
                  <Link href="/">
                    <Button variant="outline">
                      <ArrowLeft className="mr-2 h-4 w-4" /> Home
                    </Button>
                  </Link>
                )}

                {step < totalSteps ? (
                  <Button type="button" onClick={nextStep}>
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button type="submit">Submit Application</Button>
                )}
              </div>
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
