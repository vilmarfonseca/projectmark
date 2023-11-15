import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-lead",
    "bg-lead-medium",
    "bg-lead-dark",
    "bg-in-progress",
    "bg-in-progress-medium",
    "bg-in-progress-dark",
    "bg-submitted",
    "bg-submitted-medium",
    "bg-submitted-dark",
    "bg-won",
    "bg-won-medium",
    "bg-won-dark",
    "bg-lost",
    "bg-lost-medium",
    "bg-lost-dark", 
    "bg-closed",
    "bg-closed-medium",
    "bg-closed-dark",
  ],
  theme: {
    extend: {
      colors: {
        background: "#eef2f7",
        primary: "#2f3747",
        "light-gray": "#c2cede",
        cta: "#3561ca",
        lead: "#f6f1fe",
        "lead-medium": "#e6dafc",
        "lead-dark": "#d6c0fb",
        "in-progress": "#fdf6f0",
        "in-progress-medium": "#fbe5cf",
        "in-progress-dark": "#f8d8b8",
        "submitted": "#e9f4fe",
        "submitted-medium": "#c6e2fc",
        "submitted-dark": "#a5d0fb",
        "won": "#e2f4f7",
        "won-medium": "#b8eaf1",
        "won-dark": "#97dbe3",
        "lost": "#fdf3f6",
        "lost-medium": "#f9dae4",
        "lost-dark": "#f5c2d2",
        "closed": "#f3f7fa",
        "closed-medium": "#e3e8ef",
        "closed-dark": "#cdd5df",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
