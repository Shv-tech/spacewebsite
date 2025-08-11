import { prisma } from "../../../lib/db"

type UserRow = {
  id: string
  email: string | null
  role: string
  createdAt: Date
}


export default async function AdminPage() {
  const users: UserRow[] = await prisma.user.findMany({
    select: { id: true, email: true, role: true, createdAt: true },
    take: 20,
    orderBy: { createdAt: "desc" },
  })

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Admin — Users</h1>
      <div className="glass rounded-2xl p-4 overflow-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-white/60 border-b border-white/10">
              <th className="py-2">Email</th>
              <th>Role</th>
              <th>Joined</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u: UserRow) => (
              <tr key={u.id} className="border-b border-white/5">
                <td className="py-2">{u.email}</td>
                <td>{u.role}</td>
                <td>{new Date(u.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
