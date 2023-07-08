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
  daisyui: {
    themes: [
      {
        light: {
          primary: "#fdba74",
          secondary: "#475569",
          accent: "#ff9e38",
          neutral: "#dbeafe",
          "base-100": "#f3f4f6",
          info: "#74affd",
          success: "#78d455",
          warning: "#f2cb2e",
          error: "#ff5353",
        },
        dark: {
          primary: "#fdba74",
          secondary: "#f3f4f6",
          accent: "#ff9e38",
          neutral: "#dbeafe",
          "base-100": "#1f2937",
          info: "#74affd",
          success: "#78d455",
          warning: "#f2cb2e",
          error: "#ff5353",
        },
      },
    ],
  },
};
