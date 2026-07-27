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
        ivory: "#F7F5F0",
        parchment: "#E9E5DC",
        navy: "#0A1B2A",
        "navy-light": "#122B3F",
        stone: "#9C9488",
        "stone-light": "#D7D2C6",
        charcoal: "#25282A",
        brass: "#B79A5B",
        "brass-light": "#D2BF91",
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      fontSize: {
        "display-1": ["clamp(2.75rem, 5.8vw, 5.75rem)", { lineHeight: "0.98", letterSpacing: "-0.015em" }],
        "display-2": ["clamp(2.1rem, 3.6vw, 3.25rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "display-3": ["clamp(1.5rem, 2.2vw, 2.1rem)", { lineHeight: "1.25", letterSpacing: "0" }],
      },
      maxWidth: {
        container: "1360px",
        prose: "42rem",
      },
      letterSpacing: {
        widest2: "0.18em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
