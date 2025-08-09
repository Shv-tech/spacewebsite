"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "../components/ui/button"

export function HeroGradient() {
  return (
    <div className="relative overflow-hidden rounded-2xl glass p-10">
      <motion.div
        className="absolute -inset-20 rounded-full bg-brand-gradient blur-3xl opacity-30"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <div className="relative z-10 space-y-4">
        <p className="uppercase tracking-widest text-white/60 text-xs">
          Utopian Space
        </p>
        <h1 className="text-4xl md:text-6xl font-bold">Build the Legend.</h1>
        <p className="max-w-2xl text-white/80">
          From raw voice to roaring stage: learn skills, craft work, and launch with us.
        </p>
        <div className="flex gap-3 pt-2">
          <Link href="/academy"><Button>Explore Academy</Button></Link>
          <Link href="/publications"><Button variant="outline">Read Publications</Button></Link>
        </div>
      </div>
    </div>
  )
}
