import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#0d1117",
        midnight: "#0b1224",
        accent: "#9fb45a",
        sand: "#e8e5dd"
      },
      fontFamily: {
        sans: ["Inter", "var(--font-inter)", "system-ui", "-apple-system", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.15)"
      }
    }
  },
  plugins: []
};

export default config;
