import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Sun, Battery, Home, DollarSign, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-[#f0f5ff] py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#3b7afc]">
              Free Solar & Battery Program
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl">
              Power your home with clean energy at absolutely no cost to you. See if you qualify for California's
              SGIP-backed solar and battery installation program.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mt-12">
              <div className="flex flex-col items-center gap-2">
                <div className="rounded-full bg-white p-2 w-10 h-10 flex items-center justify-center">
                  <Check className="h-6 w-6 text-green-500" />
                </div>
                <p className="text-gray-700 font-medium text-center">Reduce Your Energy Bills</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="rounded-full bg-white p-2 w-10 h-10 flex items-center justify-center">
                  <Check className="h-6 w-6 text-green-500" />
                </div>
                <p className="text-gray-700 font-medium text-center">Increase Home Value</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="rounded-full bg-white p-2 w-10 h-10 flex items-center justify-center">
                  <Check className="h-6 w-6 text-green-500" />
                </div>
                <p className="text-gray-700 font-medium text-center">Gain Energy Independence</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="rounded-full bg-white p-2 w-10 h-10 flex items-center justify-center">
                  <Check className="h-6 w-6 text-green-500" />
                </div>
                <p className="text-gray-700 font-medium text-center">Support Clean Energy</p>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="mt-8 bg-[#3b7afc] hover:bg-[#2a5fd3] text-white rounded-full px-8 py-6 text-lg"
            >
              <Link href="/apply">
                See If You Qualify <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-gray-600 mt-4">
              Or call us directly:{" "}
              <a href="tel:+19169172432" className="text-[#3b7afc] font-semibold hover:underline">
                +1 916-917-2432
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Program Details Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b7afc] mb-4">
              California's Free Solar & Battery Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Self-Generation Incentive Program (SGIP) provides eligible California residents with 100% free solar
              panels and battery storage systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#3b7afc]">What is SGIP?</h3>
              <p className="text-gray-700">
                The Self-Generation Incentive Program (SGIP) is a California initiative that provides incentives to
                support distributed energy resources. The program is funded by California utility customers and
                administered by the state's major utilities.
              </p>
              <p className="text-gray-700">
                The SGIP Equity Resiliency Budget specifically provides incentives that can cover 100% of the costs for
                qualifying households to install solar panels and battery storage systems, making it completely free for
                eligible residents.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#3b7afc]">Who Qualifies?</h3>
              <p className="text-gray-700">To qualify for the free solar and battery program, you must:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Be a California resident</li>
                <li>Have household income at or below 80% of the Area Median Income (AMI)</li>
                <li>Be a customer of a participating utility company (PG&E, SCE, SDG&E, etc.)</li>
                <li>Own a property suitable for solar installation</li>
                <li>Provide proof of income or enrollment in qualifying assistance programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b7afc] mb-4">Benefits of Solar & Battery Systems</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Installing a solar and battery system offers numerous advantages for your home, finances, and the
              environment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-[#e6efff] p-4">
                    <DollarSign className="h-8 w-8 text-[#3b7afc]" />
                  </div>
                  <h3 className="text-xl font-semibold">Financial Benefits</h3>
                  <ul className="text-gray-700 space-y-2 text-left">
                    <li>• Eliminate or reduce monthly electricity bills</li>
                    <li>• Protection from utility rate increases</li>
                    <li>• Increase property value by 4-6% on average</li>
                    <li>• Zero upfront costs with SGIP program</li>
                    <li>• No maintenance or operational costs</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-[#e6efff] p-4">
                    <Battery className="h-8 w-8 text-[#3b7afc]" />
                  </div>
                  <h3 className="text-xl font-semibold">Energy Independence</h3>
                  <ul className="text-gray-700 space-y-2 text-left">
                    <li>• Power during grid outages and emergencies</li>
                    <li>• Reduced dependence on utility companies</li>
                    <li>• Protection from power shutoffs during fire seasons</li>
                    <li>• Energy security during natural disasters</li>
                    <li>• Store excess energy for use when needed</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-[#e6efff] p-4">
                    <Sun className="h-8 w-8 text-[#3b7afc]" />
                  </div>
                  <h3 className="text-xl font-semibold">Environmental Impact</h3>
                  <ul className="text-gray-700 space-y-2 text-left">
                    <li>• Reduce your carbon footprint significantly</li>
                    <li>• Use clean, renewable energy from the sun</li>
                    <li>• Decrease reliance on fossil fuels</li>
                    <li>• Help California meet clean energy goals</li>
                    <li>• Combat climate change with sustainable power</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b7afc] mb-4">How The Program Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting your free solar and battery system is a simple process. Here's how it works:
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-[#3b7afc] text-white w-12 h-12 flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold">Apply</h3>
              <p className="text-gray-700">
                Complete our simple application form to check your eligibility for the program.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-[#3b7afc] text-white w-12 h-12 flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold">Verify</h3>
              <p className="text-gray-700">Our team verifies your eligibility and conducts a property assessment.</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-[#3b7afc] text-white w-12 h-12 flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold">Install</h3>
              <p className="text-gray-700">
                Professional contractors install your solar panels and battery system at no cost.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-[#3b7afc] text-white w-12 h-12 flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold">Enjoy</h3>
              <p className="text-gray-700">
                Start enjoying free, clean energy and reduced electricity bills immediately.
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
                Start Your Application <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b7afc] mb-4">Free Solar Program in Your City</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find specific information about the free solar and battery program in major California cities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <Link href="/cities/los-angeles" className="no-underline">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="font-medium text-[#3b7afc]">Los Angeles</p>
              </div>
            </Link>
            <Link href="/cities/san-diego" className="no-underline">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="font-medium text-[#3b7afc]">San Diego</p>
              </div>
            </Link>
            <Link href="/cities/san-francisco" className="no-underline">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="font-medium text-[#3b7afc]">San Francisco</p>
              </div>
            </Link>
            <Link href="/cities/san-jose" className="no-underline">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="font-medium text-[#3b7afc]">San Jose</p>
              </div>
            </Link>
            <Link href="/cities/sacramento" className="no-underline">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="font-medium text-[#3b7afc]">Sacramento</p>
              </div>
            </Link>
            <Link href="/cities/fresno" className="no-underline">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="font-medium text-[#3b7afc]">Fresno</p>
              </div>
            </Link>
            <Link href="/cities/long-beach" className="no-underline">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="font-medium text-[#3b7afc]">Long Beach</p>
              </div>
            </Link>
            <Link href="/cities/oakland" className="no-underline">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="font-medium text-[#3b7afc]">Oakland</p>
              </div>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              className="border-[#3b7afc] text-[#3b7afc] hover:bg-[#e6efff] hover:text-[#3b7afc]"
            >
              <Link href="/cities">
                View All Cities <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50" id="faq">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="rounded-full bg-[#e6efff] p-4 mb-4">
              <Image
                src="/question-mark-icon.png"
                alt="Question mark icon"
                width={40}
                height={40}
                className="h-10 w-10"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b7afc] mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Got questions? We've got answers. Find out more about our free solar and battery program.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <Card>
                <AccordionItem value="item-1" className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center text-left">
                      <div className="mr-4">
                        <div className="rounded-full bg-[#e6efff] p-2 w-8 h-8 flex items-center justify-center">
                          <Image src="/gift-icon.png" alt="Gift icon" width={20} height={20} />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-[#3b7afc]">Is this program really free?</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-gray-700">
                    <p>
                      <span className="font-semibold">Yes—truly free</span>. Unlike past offers you've seen like "free
                      panels" or "no upfront cost" that end up being financed loans or power purchase agreements, this
                      program is <span className="font-semibold">100% state-subsidized</span>. That means there's no
                      loan, no lien, and no hidden catch. The state pays the contractor{" "}
                      <span className="font-semibold">directly</span>, covering all installation costs—so you{" "}
                      <span className="font-semibold">pay nothing out of pocket</span>. It's not too good to be
                      true—it's just finally being done right.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Card>

              <Card>
                <AccordionItem value="item-2" className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center text-left">
                      <div className="mr-4">
                        <div className="rounded-full bg-[#e6efff] p-2 w-8 h-8 flex items-center justify-center">
                          <Image src="/shield-icon.png" alt="Shield icon" width={20} height={20} />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-[#3b7afc]">How do I qualify?</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-gray-700">
                    <p>To qualify for the free solar and battery program, you need to meet the following criteria:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>You must be a California resident</li>
                      <li>Your household income must be at or below 80% of the Area Median Income (AMI)</li>
                      <li>
                        You must be a customer of one of the participating utility companies (PG&E, SCE, SDG&E, etc.)
                      </li>
                      <li>Your property must be suitable for solar installation</li>
                      <li>
                        You may need to provide proof of income or enrollment in qualifying assistance programs such as
                        CARE, FERA, ESA, SASH, DAC-SASH, MASH, or SOMAH
                      </li>
                    </ul>
                    <p className="mt-2">
                      The easiest way to find out if you qualify is to complete our application form.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Card>

              <Card>
                <AccordionItem value="item-3" className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center text-left">
                      <div className="mr-4">
                        <div className="rounded-full bg-[#e6efff] p-2 w-8 h-8 flex items-center justify-center">
                          <Image src="/chart-icon.png" alt="Chart icon" width={20} height={20} />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-[#3b7afc]">
                        What are the benefits of a solar and battery system?
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-gray-700">
                    <p>A solar and battery system offers numerous benefits:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>
                        <strong>Reduced Energy Bills:</strong> Generate your own electricity and reduce your monthly
                        utility costs by up to 100%
                      </li>
                      <li>
                        <strong>Energy Independence:</strong> Rely less on the grid and maintain power during outages,
                        especially important during California's fire season and public safety power shutoffs
                      </li>
                      <li>
                        <strong>Increased Home Value:</strong> Homes with solar systems typically sell for 4-6% more
                        than those without
                      </li>
                      <li>
                        <strong>Environmental Impact:</strong> Reduce your carbon footprint by using clean, renewable
                        energy - the average residential solar system offsets about 100,000 pounds of carbon dioxide
                        over 20 years
                      </li>
                      <li>
                        <strong>Protection from Rate Increases:</strong> Shield yourself from rising utility costs,
                        which have increased by an average of 3% annually in California
                      </li>
                      <li>
                        <strong>Backup Power:</strong> Keep essential appliances running during power outages, including
                        refrigerators, medical equipment, and communication devices
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Card>

              <Card>
                <AccordionItem value="item-4" className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center text-left">
                      <div className="mr-4">
                        <div className="rounded-full bg-[#e6efff] p-2 w-8 h-8 flex items-center justify-center">
                          <Image src="/info-icon.png" alt="Info icon" width={20} height={20} />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-[#3b7afc]">
                        What is the Self-Generation Incentive Program (SGIP)?
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-gray-700">
                    <p>
                      The Self-Generation Incentive Program (SGIP) is a California program established in 2001 that
                      provides incentives to support existing, new, and emerging distributed energy resources. SGIP
                      provides rebates for qualifying distributed energy systems installed on the customer's side of the
                      utility meter.
                    </p>
                    <p className="mt-2">
                      The program is funded by California utility customers and administered by California's major
                      utilities including Pacific Gas & Electric (PG&E), Southern California Edison (SCE), Southern
                      California Gas Company (SoCalGas), and San Diego Gas & Electric (SDG&E).
                    </p>
                    <p className="mt-2">
                      The SGIP Equity Resiliency Budget specifically provides incentives that can cover 100% of the
                      costs for vulnerable households and critical facilities in high fire-threat areas or those that
                      have experienced Public Safety Power Shutoffs (PSPS) to install battery storage systems. This is
                      the funding that makes our free solar and battery program possible.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Card>

              <Card>
                <AccordionItem value="item-5" className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center text-left">
                      <div className="mr-4">
                        <div className="rounded-full bg-[#e6efff] p-2 w-8 h-8 flex items-center justify-center">
                          <Image src="/clock-icon.png" alt="Clock icon" width={20} height={20} />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-[#3b7afc]">
                        How long does the installation process take?
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-gray-700">
                    <p>The installation process typically follows these steps:</p>
                    <ol className="list-decimal pl-6 mt-2 space-y-1">
                      <li>
                        <strong>Application and Approval:</strong> 2-4 weeks for eligibility verification and program
                        approval
                      </li>
                      <li>
                        <strong>Site Assessment and System Design:</strong> 1-2 weeks for property evaluation and custom
                        system design
                      </li>
                      <li>
                        <strong>Permitting:</strong> 2-6 weeks, depending on your local jurisdiction's requirements
                      </li>
                      <li>
                        <strong>Installation:</strong> 1-3 days for most residential systems (5-10kW systems with
                        battery storage)
                      </li>
                      <li>
                        <strong>Inspection and Utility Connection:</strong> 1-4 weeks for final inspection and
                        permission to operate from your utility company
                      </li>
                    </ol>
                    <p className="mt-2">
                      From start to finish, the entire process typically takes 2-4 months, though this can vary based on
                      local permitting requirements, utility approval timelines, and contractor availability. Our team
                      works diligently to ensure the process moves as quickly as possible.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Card>

              <Card>
                <AccordionItem value="item-6" className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center text-left">
                      <div className="mr-4">
                        <div className="rounded-full bg-[#e6efff] p-2 w-8 h-8 flex items-center justify-center">
                          <Home className="h-5 w-5 text-[#3b7afc]" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-[#3b7afc]">What types of properties qualify?</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-gray-700">
                    <p>The following property types may qualify for the free solar and battery program:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Single-family homes</li>
                      <li>Multi-family homes</li>
                      <li>Condominiums (with HOA approval)</li>
                      <li>Townhouses</li>
                      <li>Mobile homes (with proper roof structure)</li>
                    </ul>
                    <p className="mt-2">
                      The property must have adequate roof space with good sun exposure, typically south, east, or
                      west-facing roof sections with minimal shading. Our team will conduct a thorough assessment to
                      determine if your property is suitable for solar installation.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Card>

              <Card>
                <AccordionItem value="item-7" className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center text-left">
                      <div className="mr-4">
                        <div className="rounded-full bg-[#e6efff] p-2 w-8 h-8 flex items-center justify-center">
                          <Shield className="h-5 w-5 text-[#3b7afc]" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-[#3b7afc]">What maintenance is required?</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-gray-700">
                    <p>Solar panels and battery systems require minimal maintenance. Here's what you can expect:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>
                        <strong>Solar Panels:</strong> Occasional cleaning to remove dust and debris, typically 1-2
                        times per year. In many areas, natural rainfall is sufficient to keep panels clean.
                      </li>
                      <li>
                        <strong>Battery System:</strong> Modern lithium-ion batteries are maintenance-free and designed
                        to last 10+ years.
                      </li>
                      <li>
                        <strong>System Monitoring:</strong> Your system comes with monitoring software that
                        automatically alerts our team if any issues arise.
                      </li>
                      <li>
                        <strong>Warranty Coverage:</strong> All systems include comprehensive warranties - typically 25
                        years for solar panels, 10 years for batteries, and 10-25 years for inverters.
                      </li>
                    </ul>
                    <p className="mt-2">
                      Our program includes complete system maintenance and support at no cost to you for the life of the
                      system.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Card>
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-[#3b7afc] text-[#3b7afc] hover:bg-[#e6efff] hover:text-[#3b7afc]"
            >
              <Link href="/faq">
                View All FAQs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b7afc] mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from California residents who have benefited from our free solar and battery program.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-1">
                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700 italic">
                    "During the last power outage, our neighbors were in the dark but our essential appliances kept
                    running thanks to our battery system. Best decision we ever made."
                  </p>
                  <div>
                    <p className="font-semibold">Maria Rodriguez</p>
                    <p className="text-sm text-gray-500">San Diego, CA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-1">
                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700 italic">
                    "I was skeptical at first, but the program is truly free. The installation was professional and now
                    I'm saving over $200 a month on electricity."
                  </p>
                  <div>
                    <p className="font-semibold">James Wilson</p>
                    <p className="text-sm text-gray-500">Sacramento, CA</p>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Go Solar for Free?</h2>
            <p className="text-xl">
              Take the first step toward energy independence and lower electricity bills. Apply now to see if you
              qualify for California's free solar and battery program.
            </p>
            <p className="text-lg mt-2">
              Questions? Call us at{" "}
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
                Start Your Application <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
