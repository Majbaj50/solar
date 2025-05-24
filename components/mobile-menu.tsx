"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden p-2">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <Link href="/" onClick={() => setOpen(false)} className="text-xl font-bold text-[#3b7afc]">
                California Free Solar Program
              </Link>
              <p className="text-sm text-gray-600 mt-1">Call: +1 916-917-2432</p>
            </div>
            <SheetClose asChild>
              <Button variant="ghost" className="p-2">
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </SheetClose>
          </div>

          <nav className="flex flex-col gap-4 py-8">
            <Link href="/" onClick={() => setOpen(false)} className="text-lg px-2 py-2 hover:bg-gray-100 rounded-md">
              Home
            </Link>
            <Link
              href="/cities"
              onClick={() => setOpen(false)}
              className="text-lg px-2 py-2 hover:bg-gray-100 rounded-md"
            >
              Cities
            </Link>
            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className="text-lg px-2 py-2 hover:bg-gray-100 rounded-md"
            >
              Blog
            </Link>
            <Link
              href="/#benefits"
              onClick={() => setOpen(false)}
              className="text-lg px-2 py-2 hover:bg-gray-100 rounded-md"
            >
              Benefits
            </Link>
            <Link
              href="/#faq"
              onClick={() => setOpen(false)}
              className="text-lg px-2 py-2 hover:bg-gray-100 rounded-md"
            >
              FAQ
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="text-lg px-2 py-2 hover:bg-gray-100 rounded-md"
            >
              About SGIP
            </Link>
          </nav>

          <div className="mt-auto border-t pt-4">
            <Button asChild className="w-full bg-[#3b7afc] hover:bg-[#2a5fd3]">
              <Link href="/apply" onClick={() => setOpen(false)}>
                Apply Now
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
