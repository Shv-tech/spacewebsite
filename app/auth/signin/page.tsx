"use client"
import { signIn } from "next-auth/react"
import { Button } from "../../../components/ui/button"

export default function SignInPage() {
  return (
    <div className="max-w-md mx-auto glass rounded-2xl p-6 space-y-4">
      <h1 className="text-2xl font-bold">Welcome back</h1>
      <p className="text-white/70">Login to continue your journey.</p>
      <div className="space-y-2">
        <Button onClick={() => signIn("google")}>Continue with Google</Button>
      </div>
    </div>
  )
}
