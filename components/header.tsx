import Link from "next/link"
import { Button } from "@/components/ui/button"
import MobileMenu from "./mobile-menu"

export default function Header() {
  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <MobileMenu />
          <div className="ml-2 md:ml-0">
            <Link href="/" className="text-2xl font-bold text-[#3b7afc]">
              California Free Solar Program
            </Link>
            <div className="hidden md:block text-sm text-gray-600">Call: +1 916-917-2432</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-700 hover:text-[#3b7afc]">
            Home
          </Link>
          <Link href="/cities" className="text-gray-700 hover:text-[#3b7afc]">
            Cities
          </Link>

          <Link href="/#benefits" className="text-gray-700 hover:text-[#3b7afc]">
            Benefits
          </Link>
          <Link href="/#faq" className="text-gray-700 hover:text-[#3b7afc]">
            FAQ
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-[#3b7afc]">
            About SGIP
          </Link>
        </nav>
        <Button asChild className="bg-[#3b7afc] hover:bg-[#2a5fd3]">
          <Link href="/apply">Apply Now</Link>
        </Button>
      </div>
    </header>
  )
}
