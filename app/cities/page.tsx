import Link from "next/link"
import { MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// City data with specific information for each location
const cities = [
  {
    slug: "los-angeles",
    name: "Los Angeles",
    description: "Get free solar panels and battery storage in Los Angeles through California's SGIP program.",
    population: "3.9 million",
    averageSunlight: "284 sunny days per year",
  },
  {
    slug: "san-diego",
    name: "San Diego",
    description: "Get free solar panels and battery storage in San Diego through California's SGIP program.",
    population: "1.4 million",
    averageSunlight: "266 sunny days per year",
  },
  {
    slug: "san-francisco",
    name: "San Francisco",
    description: "Get free solar panels and battery storage in San Francisco through California's SGIP program.",
    population: "874,000",
    averageSunlight: "259 sunny days per year",
  },
  {
    slug: "san-jose",
    name: "San Jose",
    description: "Get free solar panels and battery storage in San Jose through California's SGIP program.",
    population: "1 million",
    averageSunlight: "257 sunny days per year",
  },
  {
    slug: "sacramento",
    name: "Sacramento",
    description: "Get free solar panels and battery storage in Sacramento through California's SGIP program.",
    population: "513,000",
    averageSunlight: "265 sunny days per year",
  },
  {
    slug: "fresno",
    name: "Fresno",
    description: "Get free solar panels and battery storage in Fresno through California's SGIP program.",
    population: "542,000",
    averageSunlight: "290 sunny days per year",
  },
  {
    slug: "long-beach",
    name: "Long Beach",
    description: "Get free solar panels and battery storage in Long Beach through California's SGIP program.",
    population: "466,000",
    averageSunlight: "287 sunny days per year",
  },
  {
    slug: "oakland",
    name: "Oakland",
    description: "Get free solar panels and battery storage in Oakland through California's SGIP program.",
    population: "433,000",
    averageSunlight: "261 sunny days per year",
  },
]

export const metadata = {
  title: "Free Solar Program in California Cities | SGIP",
  description:
    "Find information about the free solar and battery program in major California cities through the Self-Generation Incentive Program (SGIP).",
  keywords:
    "free solar program, California cities, SGIP, Los Angeles solar, San Diego solar, San Francisco solar, California solar program, free solar panels, solar energy, clean energy, renewable energy",
}

export default function CitiesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-[#f0f5ff] py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#3b7afc]">
              Free Solar Program in California Cities
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl">
              Find information about the free solar and battery program in your California city. See if you qualify for
              the SGIP-backed solar installation program.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b7afc] mb-4">Select Your City</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your city to learn about specific solar benefits and incentives in your area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {cities.map((city) => (
              <Link key={city.slug} href={`/cities/${city.slug}`} className="no-underline">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center mb-3">
                        <MapPin className="h-5 w-5 text-[#3b7afc] mr-2" />
                        <h3 className="text-xl font-semibold text-[#3b7afc]">{city.name}</h3>
                      </div>
                      <p className="text-gray-700 mb-4">{city.description}</p>
                      <div className="mt-auto">
                        <div className="text-sm text-gray-600">
                          <p>
                            <strong>Population:</strong> {city.population}
                          </p>
                          <p>
                            <strong>Sunlight:</strong> {city.averageSunlight}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#3b7afc] mb-6">Don't See Your City?</h2>
            <p className="text-lg text-gray-700 mb-8">
              The free solar program is available throughout California. Even if your city isn't listed, you may still
              qualify for the program. Apply today to find out if you're eligible.
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center justify-center rounded-md bg-[#3b7afc] px-6 py-3 text-lg font-medium text-white hover:bg-[#2a5fd3] focus:outline-none focus:ring-2 focus:ring-[#3b7afc] focus:ring-offset-2"
            >
              Check Your Eligibility
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
