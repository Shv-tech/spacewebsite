import type { Config } from "tailwindcss"
import animate from "tailwindcss-animate"
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{mdx,md}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0B12",
        fg: "#F4F4F7",
        "accent-1": "#FF4ECD",
        "accent-2": "#A855F7",
        "accent-3": "#7C3AED",
      },
      backgroundImage: {
        "brand-gradient": "radial-gradient(80% 80% at 50% 0%, #FF4ECD 0%, #A855F7 40%, #7C3AED 100%)",
      },
      borderRadius: { "2xl": "1rem" }
    }
  },
  plugins: [animate],
}
export default config
