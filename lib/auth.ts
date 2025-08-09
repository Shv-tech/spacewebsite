import NextAuth, { NextAuthOptions } from "next-auth"
import Google from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "../lib/db"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "database" },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: "no-reply@utopianspace.org"
    })
  ],
  pages: { signIn: "/auth/signin" }
}

export default NextAuth(authOptions)
