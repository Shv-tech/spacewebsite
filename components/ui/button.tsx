import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ")
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "outline" | "ghost"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const base = `
      inline-flex items-center justify-center whitespace-nowrap
      rounded-2xl px-4 py-2 text-sm font-medium
      transition-colors focus-visible:outline-none focus-visible:ring-2
      focus-visible:ring-[--accent-1]
      disabled:pointer-events-none disabled:opacity-50
    `
    const styles =
      variant === "default"
        ? "bg-[--accent-2] text-white hover:opacity-90"
        : variant === "outline"
        ? "border border-white/20 bg-transparent hover:bg-white/10"
        : "bg-transparent hover:bg-white/10"
    return <Comp className={cn(base, styles, className)} ref={ref} {...props} />
  }
)
Button.displayName = "Button"
