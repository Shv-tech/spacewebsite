import { prisma } from "../../.././lib/db"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const events = await prisma.event.findMany({ select: { slug: true } })
  return events.map(e => ({ slug: e.slug }))
}

export default async function EventPage({
  params
}: {
  params: { slug: string }
}) {
  const event = await prisma.event.findUnique({
    where: { slug: params.slug }
  })
  if (!event) return notFound()

  return (
    <article className="prose prose-invert max-w-none">
      <h1>{event.title}</h1>
      <p><strong>Starts:</strong> {new Date(event.startsAt).toLocaleString()}</p>
      <p>{event.summary}</p>
      <div>{event.content}</div>
    </article>
  )
}
