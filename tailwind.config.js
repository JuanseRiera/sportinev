/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#393E46",
        spyellow: "#FFE6C7",
        sporange: "#ffbe87",
      },
    },
  },
  plugins: [require("daisyui")],
};
