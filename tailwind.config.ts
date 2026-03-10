import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-ibm-plex-mono)", "monospace"],
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      colors: {
        brass: "#C4A882",
        dark: "#0A0A0A",
        light: "#E8E8E8",
      },
      animation: {
        "glow-pulse": "glowPulse 4s ease-in-out infinite",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { filter: "drop-shadow(0 0 20px rgba(196,168,130,0.3))" },
          "50%": { filter: "drop-shadow(0 0 40px rgba(196,168,130,0.5))" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
