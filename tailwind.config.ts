import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F8F9FB",
        surface: "#FFFFFF",
        ink: "#14161C",
        muted: "rgba(20,22,28,0.62)",
        faint: "rgba(20,22,28,0.40)",
        line: "rgba(20,22,28,0.09)",
        lineHi: "rgba(20,22,28,0.16)",
        brand: "#3B5BFF",
        teal: "#0EA5A0",
        violet: "#B36BFF",
        mint: "#3DDCA4",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        brandGrad:
          "linear-gradient(120deg,#3B5BFF 0%,#2BA9C9 50%,#0EA5A0 100%)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        ping2: {
          "70%": { boxShadow: "0 0 0 9px rgba(14,165,160,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(14,165,160,0)" },
        },
        loaderSweep: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(250%)" },
        },
        loaderIn: {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        marquee: "marquee 34s linear infinite",
        ping2: "ping2 2.4s infinite",
        loaderSweep: "loaderSweep 1.1s cubic-bezier(0.4,0,0.2,1) infinite",
        loaderIn: "loaderIn 0.5s cubic-bezier(0.16,0.8,0.3,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
