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
        primary: "#883B0A",
        "primary-light": "#F6EACC",
        "secondary-dark": "#C59E7F",
        "secondary-light": "#F5F0E6",
        "neutral-dark": "#32312F",
        "neutral-light": "#F5EEDC",
        "success" : "#3B9702",
        "error": "#BF3232"
      },
      fontFamily: {
        cardo: ["Cardo", "serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
