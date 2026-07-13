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
        ivory: "#F5F1E8",
        parchment: "#EDE7D8",
        navy: "#101E2E",
        "navy-light": "#1B2C40",
        stone: "#AEA694",
        "stone-light": "#D7D0BE",
        charcoal: "#242320",
        brass: "#9C7A42",
        "brass-light": "#B99A62",
        moss: "#4B5D45",
        "moss-light": "#6E8267",
        plum: "#5B4A5C",
        "plum-light": "#7C6980",
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
