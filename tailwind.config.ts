import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Brand colors from Moreno Landscaping
        brand: {
          "green-dark": "#1B4D1B",    // green-900 - dark sections, hero backgrounds
          "green-primary": "#2E7D32", // green-700 - primary brand color
          "red": "#C41E3A",           // red-600 - CTAs, phone number
          "gold": "#FFD700",          // gold-400 - FREE Estimate badges
        },
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      spacing: {
        touch: "48px", // 48px touch targets for mobile
      },
      minHeight: {
        touch: "48px",
      },
      minWidth: {
        touch: "48px",
      },
    },
  },
  plugins: [],
};
export default config;
