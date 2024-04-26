import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff2525",
        primaryDark: "#C62828",
        secondary: "#FCF0CB",
        secondaryDark: "#f7e19d",
        accent: "#383838",
        text: "#212121",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
export default config;
