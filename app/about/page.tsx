import Link from "next/link"
import { ArrowRight, Check, FileText, Shield, Sun, Battery, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "About SGIP - Self-Generation Incentive Program | California Free Solar Program",
  description:
    "Learn about California's Self-Generation Incentive Program (SGIP) that provides free solar panels and battery storage systems to eligible residents.",
  keywords:
    "SGIP, Self-Generation Incentive Program, California energy program, free solar panels, battery storage, clean energy incentives, renewable energy funding, energy equity, CPUC program",
}

export default function AboutSGIPPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-[#f0f5ff] py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="rounded-full bg-[#3b7afc] p-4 mb-4">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#3b7afc]">
              Self-Generation Incentive Program (SGIP)
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl">
              Understanding California's groundbreaking program that provides free solar panels and battery storage
              systems to eligible residents.
            </p>
          </div>
        </div>
      </section>

      {/* SGIP Overview Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-[#3b7afc] mb-6">What is SGIP?</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  The Self-Generation Incentive Program (SGIP) is a California Public Utilities Commission (CPUC)
                  program that provides incentives to support existing, new, and emerging distributed energy resources.
                  SGIP provides rebates for qualifying distributed energy systems installed on the customer's side of
                  the utility meter.
                </p>
                <p>
                  Established in 2001 in response to the California energy crisis, SGIP was initially designed to reduce
                  peak load and address electric system reliability needs. Over time, the program has evolved to focus
                  on reducing greenhouse gas emissions, demand for the grid, and providing grid support during peak
                  hours.
                </p>
                <p>
                  Today, SGIP is one of the longest-running and most successful distributed generation incentive
                  programs in the country, with a particular focus on energy storage technologies.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Card className="w-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#3b7afc] mb-4">SGIP Key Facts</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                      <span>
                        <strong>Established:</strong> 2001
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                      <span>
                        <strong>Administered by:</strong> PG&E, SCE, SoCalGas, and CSE (for SDG&E)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                      <span>
                        <strong>Total Budget:</strong> Over $1 billion since inception
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                      <span>
                        <strong>Primary Focus:</strong> Energy storage systems and renewable generation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                      <span>
                        <strong>Equity Resiliency Budget:</strong> Covers 100% of costs for eligible households
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SGIP Budget Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b7afc] mb-4">SGIP Budget Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SGIP allocates funding across several categories to ensure equitable distribution of resources and target
              those most in need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-[#e6efff] p-4">
                    <Shield className="h-8 w-8 text-[#3b7afc]" />
                  </div>
                  <h3 className="text-xl font-semibold">Equity Resiliency Budget</h3>
                  <p className="text-gray-700">
                    Provides 100% incentive coverage for vulnerable households and critical facilities in high
                    fire-threat areas or those that have experienced Public Safety Power Shutoffs (PSPS).
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-[#e6efff] p-4">
                    <Home className="h-8 w-8 text-[#3b7afc]" />
                  </div>
                  <h3 className="text-xl font-semibold">Equity Budget</h3>
                  <p className="text-gray-700">
                    Targets low-income and disadvantaged communities to ensure they have access to clean energy
                    technologies and their benefits.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-[#e6efff] p-4">
                    <Sun className="h-8 w-8 text-[#3b7afc]" />
                  </div>
                  <h3 className="text-xl font-semibold">Renewable Generation</h3>
                  <p className="text-gray-700">
                    Supports the installation of renewable energy generation systems like wind turbines, waste heat to
                    power, and pressure reduction turbines.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-[#e6efff] p-4">
                    <Battery className="h-8 w-8 text-[#3b7afc]" />
                  </div>
                  <h3 className="text-xl font-semibold">Large-Scale Storage</h3>
                  <p className="text-gray-700">
                    Funds larger energy storage projects that can provide significant grid support and reduce greenhouse
                    gas emissions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b7afc] mb-4">SGIP Eligibility Requirements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To qualify for the SGIP Equity Resiliency Budget that provides 100% free solar and battery systems, you
              must meet specific criteria.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-[#3b7afc] mb-4">Location Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>You must be a customer of PG&E, SCE, SDG&E, or SoCalGas</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>Your property must be located in California</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>
                      You must live in a Tier 2 or Tier 3 high fire-threat district (HFTD) or have experienced two or
                      more Public Safety Power Shutoffs (PSPS)
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-[#3b7afc] mb-4">Income & Program Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>Your household income must be at or below 80% of the Area Median Income (AMI)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>
                      OR you must be enrolled in one of these programs: CARE, FERA, ESA, SASH, DAC-SASH, MASH, or SOMAH
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>OR you rely on electric-powered medical devices</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-[#3b7afc] mb-4">Property Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>
                      Your property must be suitable for solar installation (adequate roof space, proper orientation,
                      minimal shading)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>You must own the property or have permission from the property owner</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>The property must be a primary residence (not a vacation or rental property)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-[#3b7afc] mb-4">Documentation Required</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>Proof of income (tax returns, pay stubs) or enrollment in qualifying programs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>Utility bills showing your service address and account number</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>Proof of property ownership or landlord authorization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>Medical documentation (if applicable for medical baseline eligibility)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SGIP History Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b7afc] mb-4">SGIP Program Evolution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Self-Generation Incentive Program has evolved significantly since its inception to address changing
              energy needs and priorities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#3b7afc] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute sm:left-0 sm:ml-2 sm:text-center sm:min-w-[5rem] sm:px-4 sm:py-1 sm:bg-[#e6efff] sm:text-[#3b7afc] sm:font-semibold sm:rounded-full">
                    2001
                  </time>
                  <div className="sm:pl-8">
                    <h3 className="text-xl font-bold text-[#3b7afc]">Program Establishment</h3>
                    <p className="text-gray-700">
                      SGIP was established in response to the California energy crisis to reduce peak electricity demand
                      through distributed generation technologies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#3b7afc] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute sm:left-0 sm:ml-2 sm:text-center sm:min-w-[5rem] sm:px-4 sm:py-1 sm:bg-[#e6efff] sm:text-[#3b7afc] sm:font-semibold sm:rounded-full">
                    2006
                  </time>
                  <div className="sm:pl-8">
                    <h3 className="text-xl font-bold text-[#3b7afc]">Renewable Focus</h3>
                    <p className="text-gray-700">
                      The program shifted to emphasize renewable and clean energy technologies, with 50% of the budget
                      allocated to renewable generation projects.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#3b7afc] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute sm:left-0 sm:ml-2 sm:text-center sm:min-w-[5rem] sm:px-4 sm:py-1 sm:bg-[#e6efff] sm:text-[#3b7afc] sm:font-semibold sm:rounded-full">
                    2011
                  </time>
                  <div className="sm:pl-8">
                    <h3 className="text-xl font-bold text-[#3b7afc]">Energy Storage Addition</h3>
                    <p className="text-gray-700">
                      Energy storage technologies were added as eligible technologies, marking a significant expansion
                      of the program's scope.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#3b7afc] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute sm:left-0 sm:ml-2 sm:text-center sm:min-w-[5rem] sm:px-4 sm:py-1 sm:bg-[#e6efff] sm:text-[#3b7afc] sm:font-semibold sm:rounded-full">
                    2017
                  </time>
                  <div className="sm:pl-8">
                    <h3 className="text-xl font-bold text-[#3b7afc]">GHG Reduction Focus</h3>
                    <p className="text-gray-700">
                      The program was restructured to prioritize greenhouse gas (GHG) emissions reductions, with new
                      incentive structures based on GHG performance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#3b7afc] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute sm:left-0 sm:ml-2 sm:text-center sm:min-w-[5rem] sm:px-4 sm:py-1 sm:bg-[#e6efff] sm:text-[#3b7afc] sm:font-semibold sm:rounded-full">
                    2019
                  </time>
                  <div className="sm:pl-8">
                    <h3 className="text-xl font-bold text-[#3b7afc]">Equity Resiliency Budget</h3>
                    <p className="text-gray-700">
                      The Equity Resiliency Budget was established to provide 100% incentive coverage for vulnerable
                      households and critical facilities in high fire-threat areas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#3b7afc] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute sm:left-0 sm:ml-2 sm:text-center sm:min-w-[5rem] sm:px-4 sm:py-1 sm:bg-[#e6efff] sm:text-[#3b7afc] sm:font-semibold sm:rounded-full">
                    2020-Present
                  </time>
                  <div className="sm:pl-8">
                    <h3 className="text-xl font-bold text-[#3b7afc]">Expanded Equity Focus</h3>
                    <p className="text-gray-700">
                      The program continues to expand its equity focus, with increased funding for disadvantaged
                      communities and those affected by power shutoffs, making solar and battery systems accessible to
                      more Californians.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b7afc] mb-4">SGIP Application Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The process of applying for and receiving SGIP funding involves several steps. We handle most of these
              steps for you.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-[#3b7afc] text-white w-12 h-12 flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold">Initial Application</h3>
              <p className="text-gray-700">Complete our simple pre-qualification form to determine your eligibility.</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-[#3b7afc] text-white w-12 h-12 flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold">Documentation</h3>
              <p className="text-gray-700">
                Provide required documentation to verify your eligibility for the program.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-[#3b7afc] text-white w-12 h-12 flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold">Site Assessment</h3>
              <p className="text-gray-700">
                Our team conducts a property assessment to design your solar and battery system.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-[#3b7afc] text-white w-12 h-12 flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold">SGIP Reservation</h3>
              <p className="text-gray-700">We submit your application to reserve SGIP funding for your project.</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-[#3b7afc] text-white w-12 h-12 flex items-center justify-center text-xl font-bold">
                5
              </div>
              <h3 className="text-xl font-semibold">Installation</h3>
              <p className="text-gray-700">
                Once approved, we install your solar and battery system at no cost to you.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-[#3b7afc] hover:bg-[#2a5fd3] text-white rounded-full px-8 py-6 text-lg"
            >
              <Link href="/apply">
                Start Your SGIP Application <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SGIP Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b7afc] mb-4">SGIP Impact in California</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Self-Generation Incentive Program has made a significant impact on California's energy landscape and
              communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="text-4xl font-bold text-[#3b7afc]">9,000+</div>
                  <h3 className="text-xl font-semibold">Projects Funded</h3>
                  <p className="text-gray-700">
                    SGIP has funded over 9,000 distributed energy projects across California, providing clean energy
                    solutions to homes and businesses.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="text-4xl font-bold text-[#3b7afc]">1 GW+</div>
                  <h3 className="text-xl font-semibold">Capacity Added</h3>
                  <p className="text-gray-700">
                    The program has added more than 1 gigawatt of distributed energy capacity to California's grid,
                    enhancing reliability and resilience.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="text-4xl font-bold text-[#3b7afc]">$1B+</div>
                  <h3 className="text-xl font-semibold">Incentives Provided</h3>
                  <p className="text-gray-700">
                    Over $1 billion in incentives have been provided to support clean energy adoption, with a
                    significant portion going to disadvantaged communities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#3b7afc] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Benefit from SGIP?</h2>
            <p className="text-xl">
              Take advantage of California's Self-Generation Incentive Program to get a free solar and battery system
              for your home. Apply now to see if you qualify.
            </p>
            <p className="text-lg mt-2">
              Have questions? Call us at{" "}
              <a href="tel:+19169172432" className="underline hover:no-underline">
                +1 916-917-2432
              </a>
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-[#3b7afc] hover:bg-gray-100 rounded-full px-8 py-6 text-lg"
            >
              <Link href="/apply">
                Check Your Eligibility <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
