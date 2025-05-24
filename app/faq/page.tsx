import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Gift, Shield, TrendingUp, HelpCircle, Clock } from "lucide-react"
import Image from "next/image"

export default function FAQPage() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="rounded-full bg-[#e6efff] p-4 mb-4">
          <Image src="/question-mark-icon.png" alt="Question mark icon" width={40} height={40} className="h-10 w-10" />
        </div>
        <h1 className="text-4xl font-bold text-[#3b7afc] mb-4">Frequently Asked Questions</h1>
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
                  <Gift className="h-6 w-6 text-[#3b7afc] mr-4" />
                  <h3 className="text-xl font-semibold text-[#3b7afc]">Is this program really free?</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-gray-700">
                <p>
                  <span className="font-semibold">Yes—truly free</span>. Unlike past offers you've seen like "free
                  panels" or "no upfront cost" that end up being financed loans or power purchase agreements, this
                  program is <span className="font-semibold">100% state-subsidized</span>. That means there's no loan,
                  no lien, and no hidden catch. The state pays the contractor{" "}
                  <span className="font-semibold">directly</span>, covering all installation costs—so you{" "}
                  <span className="font-semibold">pay nothing out of pocket</span>. It's not too good to be true—it's
                  just finally being done right.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Card>

          <Card>
            <AccordionItem value="item-2" className="border-none">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center text-left">
                  <Shield className="h-6 w-6 text-[#3b7afc] mr-4" />
                  <h3 className="text-xl font-semibold text-[#3b7afc]">How do I qualify?</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-gray-700">
                <p>To qualify for the free solar and battery program, you need to meet the following criteria:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You must be a California resident</li>
                  <li>Your household income must be at or below 80% of the Area Median Income (AMI)</li>
                  <li>You must be a customer of one of the participating utility companies</li>
                  <li>Your property must be suitable for solar installation</li>
                  <li>You may need to provide proof of income or enrollment in qualifying assistance programs</li>
                </ul>
                <p className="mt-2">The easiest way to find out if you qualify is to complete our application form.</p>
              </AccordionContent>
            </AccordionItem>
          </Card>

          <Card>
            <AccordionItem value="item-3" className="border-none">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center text-left">
                  <TrendingUp className="h-6 w-6 text-[#3b7afc] mr-4" />
                  <h3 className="text-xl font-semibold text-[#3b7afc]">
                    What are the benefits of a solar and battery system?
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-gray-700">
                <p>A solar and battery system offers numerous benefits:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    <strong>Reduced Energy Bills:</strong> Generate your own electricity and reduce your monthly utility
                    costs
                  </li>
                  <li>
                    <strong>Energy Independence:</strong> Rely less on the grid and maintain power during outages
                  </li>
                  <li>
                    <strong>Increased Home Value:</strong> Homes with solar systems typically sell for more than those
                    without
                  </li>
                  <li>
                    <strong>Environmental Impact:</strong> Reduce your carbon footprint by using clean, renewable energy
                  </li>
                  <li>
                    <strong>Protection from Rate Increases:</strong> Shield yourself from rising utility costs
                  </li>
                  <li>
                    <strong>Backup Power:</strong> Keep essential appliances running during power outages
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Card>

          <Card>
            <AccordionItem value="item-4" className="border-none">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center text-left">
                  <HelpCircle className="h-6 w-6 text-[#3b7afc] mr-4" />
                  <h3 className="text-xl font-semibold text-[#3b7afc]">
                    What is the Self-Generation Incentive Program (SGIP)?
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-gray-700">
                <p>
                  The Self-Generation Incentive Program (SGIP) is a California program that provides incentives to
                  support existing, new, and emerging distributed energy resources. SGIP provides rebates for qualifying
                  distributed energy systems installed on the customer's side of the utility meter.
                </p>
                <p className="mt-2">
                  The program is funded by California utility customers and administered by California's major
                  utilities. The SGIP Equity Resiliency Budget specifically provides incentives that can cover 100% of
                  the costs for vulnerable households and critical facilities in high fire-threat areas to install
                  battery storage systems.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Card>

          <Card>
            <AccordionItem value="item-5" className="border-none">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center text-left">
                  <Clock className="h-6 w-6 text-[#3b7afc] mr-4" />
                  <h3 className="text-xl font-semibold text-[#3b7afc]">How long does the installation process take?</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-gray-700">
                <p>The installation process typically follows these steps:</p>
                <ol className="list-decimal pl-6 mt-2 space-y-1">
                  <li>
                    <strong>Application and Approval:</strong> 2-4 weeks
                  </li>
                  <li>
                    <strong>Site Assessment and System Design:</strong> 1-2 weeks
                  </li>
                  <li>
                    <strong>Permitting:</strong> 2-6 weeks (varies by jurisdiction)
                  </li>
                  <li>
                    <strong>Installation:</strong> 1-3 days for most residential systems
                  </li>
                  <li>
                    <strong>Inspection and Utility Connection:</strong> 1-4 weeks
                  </li>
                </ol>
                <p className="mt-2">
                  From start to finish, the entire process typically takes 2-4 months, though this can vary based on
                  local permitting requirements, utility approval timelines, and contractor availability.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Card>
        </Accordion>
      </div>

      <div className="text-center mt-12 p-6 bg-[#f0f5ff] rounded-lg">
        <h3 className="text-xl font-semibold text-[#3b7afc] mb-2">Still Have Questions?</h3>
        <p className="text-gray-700 mb-4">
          Our solar experts are here to help you understand the program and your eligibility.
        </p>
        <p className="text-lg">
          Call us at{" "}
          <a href="tel:+19169172432" className="text-[#3b7afc] font-semibold hover:underline">
            +1 916-917-2432
          </a>
        </p>
      </div>
    </div>
  )
}
