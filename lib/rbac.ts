export type Role = "STUDENT" | "CREATOR" | "EXPERT" | "EDITOR" | "ADMIN";

export function canAccess(role: Role, area: string): boolean {
  const map: Record<Role, string[]> = {
    STUDENT: ["dashboard.student"],
    CREATOR: ["dashboard.creator", "dashboard.student"],
    EXPERT: ["dashboard.expert", "dashboard.student"],
    EDITOR: ["dashboard.editor"],
    ADMIN: ["admin", "dashboard.student", "dashboard.creator", "dashboard.expert", "dashboard.editor"]
  }
  return map[role]?.some(x => area.startsWith(x)) ?? false
}
