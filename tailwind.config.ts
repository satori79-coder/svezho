import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F0FDF4", 100: "#DCFCE7", 200: "#BBF7D0", 300: "#86EFAC",
          400: "#4ADE80", 500: "#22C55E", 600: "#16A34A", 700: "#15803D",
          800: "#166534", 900: "#14532D",
        },
        cream: "#FAFAF9",
        "amber-accent": "#F59E0B",
      },
      fontFamily: { sans: ['"Inter"', "system-ui", "sans-serif"] },
      boxShadow: { soft: "0 4px 20px -2px rgba(20,83,45,0.08)" },
    },
  },
  plugins: [],
};
export default config;
