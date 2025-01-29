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
        background: '#7D1128',
        foreground: '#EACDC2',
        pastmaroon: '#BE6B74', // foreground with 50% opacity
      },
    },
  },
  plugins: [],
};
export default config;
