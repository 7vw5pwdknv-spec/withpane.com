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
        charcoal: "#ffffff",
        midnight: "#f3f4f6",
        accent: "#c85a1e",
        sand: "#1f2937"
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
