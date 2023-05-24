/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2EA9DD",
        secondary: "#82AACA",
        dark: "#252A35",
        darkSmooth: "#3A4039",
        light: "#F7F7F6",
      },
    },
  },
  plugins: [],
};
