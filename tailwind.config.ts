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
        ivory: "#F4EEE1",
        parchment: "#EAE1CC",
        navy: "#0C1B2A",
        "navy-light": "#17293B",
        stone: "#A99C87",
        "stone-light": "#D9CFB9",
        charcoal: "#26221C",
        brass: "#8C6A3D",
        "brass-light": "#AD8752",
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      fontSize: {
        "display-1": ["clamp(2.5rem, 4.6vw, 4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.005em" }],
        "display-2": ["clamp(2rem, 3.2vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.005em" }],
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
