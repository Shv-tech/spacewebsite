import Link from "next/link"
export const metadata = { title: "About Utopian Space" }
export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">About Utopian Space</h1>
      <p className="text-white/80">
        This section is under active development. Content loads from the database.
      </p>
    </div>
  )
}
