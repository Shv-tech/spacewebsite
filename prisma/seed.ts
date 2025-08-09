import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: "contact@theutopianspace.com" },
    update: {},
    create: { email: "contact@theutopianspace.com", name: "Admin", role: "ADMIN" }
  })
  const editor = await prisma.user.upsert({
    where: { email: "contact@theutopianspace.com" },
    update: {},
    create: { email: "contact@theutopianspace.com", name: "Editor", role: "EDITOR" }
  })
  const expert = await prisma.user.upsert({
    where: { email: "contact@theutopianspace.com" },
    update: {},
    create: { email: "contact@theutopianspace.com", name: "Expert", role: "EXPERT" }
  })
  const student = await prisma.user.upsert({
    where: { email: "contact@theutopianspace.com" },
    update: {},
    create: { email: "contact@theutopianspace.com", name: "Student", role: "STUDENT" }
  })

  await prisma.course.createMany({
    data: [
      {
        title: "Poetry that Breathes",
        slug: "poetry-that-breathes",
        summary: "Write poems with pulse and purpose.",
        description: "A studio course on modern poetry.",
        priceINR: 100,
        level: "Beginner",
        language: "en",
        isLive: true,
        trailerUrl: "https://player.vimeo.com/video/123456",
        coverUrl: "/covers/poetry.jpg",
        syllabus: { weeks: 4 },
        instructorId: expert.id,
        published: true
      },
      {
        title: "Foundations of Coding for Creators",
        slug: "coding-for-creators",
        summary: "Build tools for your art.",
        description: "Gentle intro to programming.",
        priceINR: 499,
        level: "Beginner",
        language: "en",
        isLive: false,
        coverUrl: "/covers/coding.jpg",
        syllabus: { modules: 6 },
        instructorId: expert.id,
        published: true
      },
      {
        title: "Filmmaking: Shots to Stories",
        slug: "filmmaking-shots-to-stories",
        summary: "From frames to films.",
        description: "Craft cinematic narratives.",
        priceINR: 999,
        level: "Intermediate",
        language: "en",
        isLive: true,
        coverUrl: "/covers/film.jpg",
        syllabus: { weeks: 6 },
        instructorId: expert.id,
        published: true
      },
      {
        title: "Esports: Competitive Mindset",
        slug: "esports-competitive-mindset",
        summary: "Train like a pro.",
        description: "Habits, drills, and team play.",
        priceINR: 299,
        level: "All",
        language: "en",
        isLive: true,
        coverUrl: "/covers/esports.jpg",
        syllabus: { weeks: 3 },
        instructorId: expert.id,
        published: true
      }
    ]
  })

  await prisma.book.create({
    data: {
      title: "Ink & Ashes",
      slug: "ink-and-ashes",
      blurb: "A hundred voices, one fire.",
      coverUrl: "/covers/ink-and-ashes.jpg",
      sampleUrl: "/samples/ink-and-ashes-sample.pdf",
      priceINR: 199,
      published: true,
      contributors: {
        create: [
          { name: "Contributor One", role: "Poet" },
          { name: "Contributor Two", role: "Editor" }
        ]
      }
    }
  })

  await prisma.event.createMany({
    data: [
      {
        title: "Utopian Space — Global Launch",
        slug: "global-launch",
        startsAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        summary: "Announcing divisions, programs, and our first anthology.",
        content: "Join us online for keynotes and performances.",
        virtual: true,
        priceINR: 0
      },
      {
        title: "Live Class: Poetry that Breathes (Kickoff)",
        slug: "poetry-kickoff",
        startsAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10),
        summary: "First live session and Q&A.",
        content: "Zoom link will be emailed to enrolled students.",
        virtual: true,
        priceINR: 100
      },
      {
        title: "Esports Community Scrim Night",
        slug: "esports-scrim-night",
        startsAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 14),
        summary: "Teams scrim, open signup.",
        content: "Bring your squad and compete.",
        virtual: true,
        priceINR: 0
      }
    ]
  })

  await prisma.talentProfile.createMany({
    data: [
      {
        userId: student.id,
        headline: "Poet & Voice Artist",
        skills: ["poetry", "voiceover"],
        bio: "Words with weight.",
        visibility: true
      },
      {
        userId: expert.id,
        headline: "Filmmaker",
        skills: ["editing", "direction"],
        bio: "Frames to films.",
        visibility: true
      }
    ]
  })

  console.log("Seed complete")
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
