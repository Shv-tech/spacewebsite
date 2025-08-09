export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid md:grid-cols-[240px_1fr] gap-6">
      <aside className="glass rounded-2xl p-4 h-fit sticky top-24">
        <nav className="space-y-2 text-sm">
          <a href="/dashboard" className="block hover:underline">Overview</a>
          <a href="/dashboard/courses" className="block hover:underline">My Courses</a>
          <a href="/dashboard/admin" className="block hover:underline">Admin</a>
        </nav>
      </aside>
      <section>{children}</section>
    </div>
  )
}
