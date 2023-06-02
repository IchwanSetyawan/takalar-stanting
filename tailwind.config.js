/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#168EEA",
        secondary: "#9FBED3",
        third: "#F4F4F4",
        dark: "#3A4039",
        darkHard: "#505258",
        darkSmooth: "#B4B5B7",
        light: "#F7F7F6",
        blueDark: "#756ED9",
        greenSmooth: "#4DA4B1",
        purple: "#8662B2",
        shadow: "#E5EDEF",
        textGray: "#7F838C",
        textError: "#F04438",
        orangeDark: "#FBAE47",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
