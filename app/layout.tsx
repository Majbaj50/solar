import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SchemaMarkup from "./schema-generator"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  metadataBase: new URL("https://californiasolarprogram.org"),
  title: "California Free Solar Program - SGIP | 100% State-Subsidized Solar Installation",
  description:
    "Apply for California's free solar and battery program through the Self-Generation Incentive Program (SGIP). Qualify for 100% state-subsidized solar panels and battery storage systems with no cost to you.",
  keywords:
    "free solar program, California solar program, SGIP, Self-Generation Incentive Program, free solar panels, free battery storage, solar energy, clean energy, renewable energy, energy independence, solar installation, California energy program, state-subsidized solar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://californiasolarprogram.org",
    siteName: "California Free Solar Program",
    title: "California Free Solar Program - 100% Free Solar Installation through SGIP",
    description:
      "Apply for California's free solar and battery program through the Self-Generation Incentive Program (SGIP). Qualify for 100% state-subsidized solar panels and battery storage systems with no cost to you.",
    images: [
      {
        url: "https://californiasolarprogram.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "California Free Solar Program",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "California Free Solar Program - 100% Free Solar Installation",
    description:
      "Apply for California's free solar and battery program through the Self-Generation Incentive Program (SGIP).",
    images: ["https://californiasolarprogram.org/twitter-image.jpg"],
    creator: "@casolarprogram",
  },
  alternates: {
    canonical: "https://californiasolarprogram.org",
    languages: {
      "en-US": "https://californiasolarprogram.org",
      es: "https://californiasolarprogram.org/es",
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#3b7afc" />
        <meta name="theme-color" content="#3b7afc" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SchemaMarkup />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
