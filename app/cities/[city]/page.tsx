import Link from "next/link"
import { ArrowRight, Check, MapPin, Sun, Battery, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { notFound } from "next/navigation"

// City data with specific information for each location
const cityData = {
  "los-angeles": {
    name: "Los Angeles",
    title: "Free Solar Program in Los Angeles, CA",
    description: "Get free solar panels and battery storage in Los Angeles through California's SGIP program.",
    population: "3.9 million",
    averageSunlight: "284 sunny days per year",
    averageElectricBill: "$130 per month",
    utilityCompany: "Los Angeles Department of Water and Power (LADWP)",
    incentives: ["LADWP Solar Incentive Program", "Property Tax Exclusion", "Net Energy Metering"],
    neighborhoods: ["Downtown", "Hollywood", "Silver Lake", "Venice", "Echo Park", "Boyle Heights"],
    zipCodes: ["90001", "90026", "90046", "90210", "90291", "90012"],
  },
  "san-diego": {
    name: "San Diego",
    title: "Free Solar Program in San Diego, CA",
    description: "Get free solar panels and battery storage in San Diego through California's SGIP program.",
    population: "1.4 million",
    averageSunlight: "266 sunny days per year",
    averageElectricBill: "$125 per month",
    utilityCompany: "San Diego Gas & Electric (SDG&E)",
    incentives: ["SDG&E Net Energy Metering", "Property Tax Exclusion", "EV-TOU-5 Rate Plan"],
    neighborhoods: ["Downtown", "La Jolla", "North Park", "Pacific Beach", "Mission Valley", "Hillcrest"],
    zipCodes: ["92101", "92037", "92104", "92109", "92108", "92103"],
  },
  "san-francisco": {
    name: "San Francisco",
    title: "Free Solar Program in San Francisco, CA",
    description: "Get free solar panels and battery storage in San Francisco through California's SGIP program.",
    population: "874,000",
    averageSunlight: "259 sunny days per year",
    averageElectricBill: "$145 per month",
    utilityCompany: "Pacific Gas & Electric (PG&E)",
    incentives: ["GoSolarSF", "CleanPowerSF", "Property Tax Exclusion", "Net Energy Metering"],
    neighborhoods: ["Mission District", "SoMa", "Noe Valley", "Richmond District", "Sunset District", "North Beach"],
    zipCodes: ["94110", "94103", "94114", "94121", "94122", "94133"],
  },
  "san-jose": {
    name: "San Jose",
    title: "Free Solar Program in San Jose, CA",
    description: "Get free solar panels and battery storage in San Jose through California's SGIP program.",
    population: "1 million",
    averageSunlight: "257 sunny days per year",
    averageElectricBill: "$135 per month",
    utilityCompany: "Pacific Gas & Electric (PG&E)",
    incentives: ["San Jose Clean Energy", "Property Tax Exclusion", "Net Energy Metering"],
    neighborhoods: ["Downtown", "Willow Glen", "Almaden Valley", "Evergreen", "Berryessa", "Cambrian"],
    zipCodes: ["95110", "95125", "95120", "95135", "95132", "95124"],
  },
  sacramento: {
    name: "Sacramento",
    title: "Free Solar Program in Sacramento, CA",
    description: "Get free solar panels and battery storage in Sacramento through California's SGIP program.",
    population: "513,000",
    averageSunlight: "265 sunny days per year",
    averageElectricBill: "$120 per month",
    utilityCompany: "Sacramento Municipal Utility District (SMUD)",
    incentives: ["SMUD Solar Shares", "Property Tax Exclusion", "Net Energy Metering"],
    neighborhoods: ["Midtown", "East Sacramento", "Land Park", "Natomas", "Oak Park", "Pocket"],
    zipCodes: ["95814", "95819", "95818", "95834", "95817", "95831"],
  },
  fresno: {
    name: "Fresno",
    title: "Free Solar Program in Fresno, CA",
    description: "Get free solar panels and battery storage in Fresno through California's SGIP program.",
    population: "542,000",
    averageSunlight: "290 sunny days per year",
    averageElectricBill: "$125 per month",
    utilityCompany: "Pacific Gas & Electric (PG&E)",
    incentives: ["DAC-SASH Program", "Property Tax Exclusion", "Net Energy Metering"],
    neighborhoods: ["Downtown", "Tower District", "Woodward Park", "Sunnyside", "Bullard", "Fig Garden"],
    zipCodes: ["93721", "93728", "93720", "93727", "93704", "93711"],
  },
  "long-beach": {
    name: "Long Beach",
    title: "Free Solar Program in Long Beach, CA",
    description: "Get free solar panels and battery storage in Long Beach through California's SGIP program.",
    population: "466,000",
    averageSunlight: "287 sunny days per year",
    averageElectricBill: "$128 per month",
    utilityCompany: "Southern California Edison (SCE)",
    incentives: ["SCE Net Energy Metering", "Property Tax Exclusion", "TOU-D-PRIME Rate Plan"],
    neighborhoods: ["Downtown", "Belmont Shore", "Bixby Knolls", "Naples", "Alamitos Beach", "California Heights"],
    zipCodes: ["90802", "90803", "90807", "90803", "90802", "90807"],
  },
  oakland: {
    name: "Oakland",
    title: "Free Solar Program in Oakland, CA",
    description: "Get free solar panels and battery storage in Oakland through California's SGIP program.",
    population: "433,000",
    averageSunlight: "261 sunny days per year",
    averageElectricBill: "$140 per month",
    utilityCompany: "Pacific Gas & Electric (PG&E)",
    incentives: ["East Bay Community Energy", "Property Tax Exclusion", "Net Energy Metering"],
    neighborhoods: ["Downtown", "Rockridge", "Temescal", "Montclair", "Fruitvale", "Piedmont"],
    zipCodes: ["94612", "94618", "94609", "94611", "94601", "94611"],
  },
}

// Generate static params for all cities
export function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({
    city,
  }))
}

// Generate metadata for each city page
export function generateMetadata({ params }: { params: { city: string } }) {
  const city = params.city
  const data = cityData[city as keyof typeof cityData]

  if (!data) {
    return {
      title: "City Not Found",
      description: "The requested city page could not be found.",
    }
  }

  return {
    title: data.title,
    description: data.description,
    keywords: `free solar program, ${data.name} solar program, SGIP, California solar, free solar panels ${data.name}, solar energy ${data.name}, clean energy ${data.name}, renewable energy, energy independence, solar installation ${data.name}, California energy program, state-subsidized solar`,
  }
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = params.city
  const data = cityData[city as keyof typeof cityData]

  // If city doesn't exist in our data, show 404
  if (!data) {
    notFound()
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-[#f0f5ff] py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="flex items-center gap-2">
              <MapPin className="h-6 w-6 text-[#3b7afc]" />
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#3b7afc]">
                Free Solar Program in {data.name}
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl">
              Power your {data.name} home with clean energy at absolutely no cost to you. See if you qualify for
              California's SGIP-backed solar and battery installation program.
            </p>

            <Button
              asChild
              size="lg"
              className="mt-8 bg-[#3b7afc] hover:bg-[#2a5fd3] text-white rounded-full px-8 py-6 text-lg"
            >
              <Link href="/apply">
                See If You Qualify in {data.name} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="h-4 w-4" />
              <span>Or call us: </span>
              <a href="tel:+19169172432" className="text-[#3b7afc] font-semibold hover:underline">
                +1 916-917-2432
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* City-Specific Information */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b7afc] mb-4">
              Solar Energy in {data.name}, California
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {data.name} is an ideal location for solar energy with {data.averageSunlight}, making it perfect for the
              free solar program.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold text-[#3b7afc] mb-4">{data.name} Solar Facts</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>
                      <strong>Population:</strong> {data.population}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>
                      <strong>Average Sunlight:</strong> {data.averageSunlight}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>
                      <strong>Average Electric Bill:</strong> {data.averageElectricBill}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>
                      <strong>Utility Company:</strong> {data.utilityCompany}
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold text-[#3b7afc] mb-4">Local Solar Incentives</h3>
                <ul className="space-y-3">
                  {data.incentives.map((incentive, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                      <span>{incentive}</span>
                    </li>
                  ))}
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>
                      <strong>SGIP Program:</strong> 100% free solar and battery installation
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* City-Specific Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b7afc] mb-4">Benefits for {data.name} Residents</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {data.name} residents can enjoy specific advantages from the free solar program.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-[#e6efff] p-4">
                    <Sun className="h-8 w-8 text-[#3b7afc]" />
                  </div>
                  <h3 className="text-xl font-semibold">Abundant Sunshine</h3>
                  <p className="text-gray-700">
                    With {data.averageSunlight}, {data.name} is ideal for solar energy production, maximizing your
                    system's efficiency and energy generation.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-[#e6efff] p-4">
                    <Battery className="h-8 w-8 text-[#3b7afc]" />
                  </div>
                  <h3 className="text-xl font-semibold">Energy Resilience</h3>
                  <p className="text-gray-700">
                    Battery storage provides backup power during outages, which is especially valuable in {data.name}{" "}
                    during extreme weather events and public safety power shutoffs.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-[#e6efff] p-4">
                    <MapPin className="h-8 w-8 text-[#3b7afc]" />
                  </div>
                  <h3 className="text-xl font-semibold">Local Support</h3>
                  <p className="text-gray-700">
                    Our {data.name}-based installation teams understand local building codes, permit requirements, and
                    the specific needs of homes in your area.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b7afc] mb-4">{data.name} Neighborhoods We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our free solar program is available throughout {data.name}, including these neighborhoods:
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {data.neighborhoods.map((neighborhood, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="font-medium">{neighborhood}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700">
                We also serve these {data.name} ZIP codes: {data.zipCodes.join(", ")}
              </p>
              <p className="mt-2 text-gray-600">
                Don't see your neighborhood? Contact us at{" "}
                <a href="tel:+19169172432" className="text-[#3b7afc] font-semibold hover:underline">
                  +1 916-917-2432
                </a>{" "}
                to confirm service in your area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#3b7afc] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Go Solar in {data.name}?</h2>
            <p className="text-xl">
              Take the first step toward energy independence and lower electricity bills. Apply now to see if you
              qualify for California's free solar and battery program in {data.name}.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-[#3b7afc] hover:bg-gray-100 rounded-full px-8 py-6 text-lg"
            >
              <Link href="/apply">
                Start Your {data.name} Application <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-lg">
              Questions? Call us at{" "}
              <a href="tel:+19169172432" className="underline hover:no-underline font-semibold">
                +1 916-917-2432
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
