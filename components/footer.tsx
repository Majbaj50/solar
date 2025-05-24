import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">California Solar Program</h3>
            <p className="text-gray-600">
              Helping California residents access free solar and battery systems through the Self-Generation Incentive
              Program (SGIP).
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Call us:</strong> +1 916-917-2432
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#3b7afc]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-gray-600 hover:text-[#3b7afc]">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-[#3b7afc]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#3b7afc]">
                  About SGIP
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: info@californiasolarprogram.org</li>
              <li>Phone: +1 916-917-2432</li>
              <li>Hours: Mon-Fri 8am-6pm PT</li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} California Solar Program. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-[#3b7afc]">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/terms" className="hover:text-[#3b7afc]">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
