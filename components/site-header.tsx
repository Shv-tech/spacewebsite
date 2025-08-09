"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../components/ui/button"

const nav = [
  { href: "/academy", label: "Academy" },
  { href: "/publications", label: "Publications" },
  { href: "/label", label: "Label" },
  { href: "/esports", label: "Esports" },
  { href: "/animation", label: "Animation" },
  { href: "/recruitment", label: "Recruitment" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
]

function SiteHeader() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold">🪐 Utopian Space</Link>
        <nav className="hidden md:flex items-center gap-4 text-sm">
          {nav.map(i => (
            <Link
              key={i.href}
              href={i.href}
              className={`hover:text-white ${pathname === i.href ? "text-white" : "text-white/70"}`}
            >
              {i.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/auth/signin"><Button variant="outline">Login</Button></Link>
          <Link href="/academy"><Button>Get Started</Button></Link>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
export { SiteHeader }
