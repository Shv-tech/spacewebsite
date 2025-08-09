import "./globals.css"
import type { Metadata } from "next"
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import PlausibleProvider from "next-plausible"
import { site } from "../lib/seo"
import { SiteHeader } from "../components/site-header"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" })
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  metadataBase: new URL(process.env.NEXTAUTH_URL || "http://localhost:3000"),
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
    url: site.url
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <PlausibleProvider domain={process.env.PLAUSIBLE_DOMAIN || "localhost"} />
      </head>
      <body className={`${inter.variable} ${grotesk.variable} ${jetbrains.variable} bg-bg text-fg`}>
        <div className="min-h-screen bg-brand-gradient/20">
          <SiteHeader />
          <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
