/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      primary: " hsl(238, 40%, 52%)",
      secondary: "hsl(358, 79%, 66%)",
      black: "hsla(0, 2%, 18%, 1)",
      lightblack: "hsla(0, 4% , 41% , 1)",
      white: "#ffffff",
      transparent: "transparent",
      success: "hsl(160, 67%, 52% ,1)",
      warning: "hsla(34 ,100% ,50%, 1)",
      error: "#dc2626",
      gray: {
        100: "hsl(223, 19%, 93%)",
        200: "hsl(211, 10%, 45%)",
        300: "hsl(239, 57%, 85%)",
        400: "hsl(228, 33%, 97%)",
        500: "hsl(212, 24%, 26%)",
      },
    },
    extend: {
      backgroundColor: {
        fill: "var(--color-background)",
        input: "var(--color-input-background)",
      },
      textColor: {
        // base: "var(--color-text)",
      },
    },
  },
  plugins: [],
};
