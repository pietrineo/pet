/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#FF7A00",
        bgGradient1: "#C6C2C260",
        bgGradient2: "white",
        bgGray: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
