import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-space": "#00172e",
        "space-dark": "#140029",
        "neon-purple": "#bd00ff",
        "neon-green": "#00ff9d",
        "neon-blue": "#00c7ff",
        "highlight-blue": "#00f0ff",
        "text-light": "#f0f7ff",
        "text-gray": "#a0b1c5",
        success: "#0dffb2",
        danger: "#ff2e6d",
        warning: "#ffc107",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
      },
      keyframes: {
        loading: {
          "0%": { width: "0%" },
          "50%": { width: "70%" },
          "100%": { width: "100%" },
        },
        pulse: {
          "0%": { boxShadow: "0 0 0 0 rgba(189, 0, 255, 0.5)" },
          "70%": { boxShadow: "0 0 0 20px rgba(189, 0, 255, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(189, 0, 255, 0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        pulse: "pulse 2s infinite",
        blink: "blink 1.5s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
