import Link from "next/link"
import { Card } from "../components/ui/card"

export function DivisionCard({
  href,
  title,
  desc
}: {
  href: string
  title: string
  desc: string
}) {
  return (
    <Link
      href={href}
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[--accent-1] rounded-2xl"
    >
      <Card className="h-full hover:translate-y-[-2px] transition-transform">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-white/70">{desc}</p>
      </Card>
    </Link>
  )
}
