import Link from "next/link"

export default function EventsIndex() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Events</h1>
      <p className="text-white/80">
        Upcoming events load from the database.
      </p>
      <Link className="btn-primary" href="/">← Back home</Link>
    </div>
  )
}
