import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        ivory: "#F6F2EA",
        parchment: "#EFE9DD",
        navy: "#0E1B2C",
        "navy-light": "#16273D",
        stone: "#B7AF9E",
        "stone-light": "#DAD3C3",
        charcoal: "#232220",
        brass: "#A9834F",
        "brass-light": "#C4A574",
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      fontSize: {
        "display-1": ["clamp(2.75rem, 5.5vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "display-2": ["clamp(2.25rem, 4vw, 3.75rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-3": ["clamp(1.75rem, 2.6vw, 2.5rem)", { lineHeight: "1.2", letterSpacing: "-0.005em" }],
      },
      maxWidth: {
        container: "1440px",
        prose: "42rem",
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
