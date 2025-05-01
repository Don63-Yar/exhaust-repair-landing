
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000",
        "primary-foreground": "#FFFFFF",
        background: "#FFFFFF",
        foreground: "#000000",
        muted: "#777777",
        "muted-foreground": "#999999",
        border: "#e2e2e2",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
