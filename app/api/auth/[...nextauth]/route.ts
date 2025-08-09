// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth"
import { authOptions } from "../../../../lib/auth"

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST };

type User = {
  id: string;
  email: string;
  role: string;
};
// ...existing code...
const users: User[] = []; // TODO: Replace with actual user data

// Table rendering code removed; this belongs in a React component, not an API route.

// ...existing code...