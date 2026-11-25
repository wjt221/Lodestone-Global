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
        ivory: "#FFFFFF",
        parchment: "#E8EFF5",
        navy: "#07192B",
        "navy-light": "#10243A",
        stone: "#526478",
        "stone-light": "#D5DDE5",
        charcoal: "#10243A",
        // brass reads well on navy (6.47:1) and fails badly on ivory and
        // parchment (2.47 and 2.14). brass-ink is the light-ground counterpart:
        // 6.11 and 5.30. Use brass on dark, brass-ink on light. Never the reverse.
        brass: "#A8BDCF",
        "brass-ink": "#42617A",
        "brass-light": "#C1CFDD",
      },
      fontFamily: {
        serif: ["var(--font-body)", "Helvetica Neue", "Arial", "sans-serif"],
        sans: ["var(--font-body)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      fontSize: {
        "display-1": ["clamp(2.75rem, 5.8vw, 5.75rem)", { lineHeight: "0.98", letterSpacing: "-0.055em" }],
        "display-2": ["clamp(2.1rem, 3.6vw, 3.25rem)", { lineHeight: "1.05", letterSpacing: "-0.045em" }],
        "display-3": ["clamp(1.5rem, 2.2vw, 2.1rem)", { lineHeight: "1.25", letterSpacing: "-0.025em" }],
      },
      maxWidth: {
        container: "1440px",
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
