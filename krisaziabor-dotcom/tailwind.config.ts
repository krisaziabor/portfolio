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
        background: '#D23129',
        foreground: '#F8F6F3',
        pastgrey: 'rgba(248, 246, 243, 0.6)', // foreground with 50% opacity
      },
    },
  },
  plugins: [],
};
export default config;
