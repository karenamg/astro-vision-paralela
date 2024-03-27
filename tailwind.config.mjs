/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        bjorn: ["Bjorn", "NexaBold", "NexaLight"],
      },
      colors: {
        blue: "#185A9D",
        blueLight: "#2E8CE2",
        green: "#2EE2AC",
        red: "#EA2662",
        dark: "#101C28",
        darker: "#0C141C",
        light: "#DBEEFF",

        primary: "#EB00D7",
        primaryDark: "#460040",
        primaryDarkOne: "#460040",
        primaryDarkTwo: "#33002F",
        primaryDarkThree: "#270025",
        secondary: "#00B8E7",
        secondaryDark: "#2192B0",
        tertiary: "#EBC500",
        tertiaryDark: "#463301",
        grayDark: "#424242",
        grayLight: "#767779",
        black: "#000000",
        blackOne: "#000000",
        blackTwo: "#0E0E0E",
        white: "#FFFFFF",
        text: "#28262C",
      },
    },
  },
  plugins: [],
};
