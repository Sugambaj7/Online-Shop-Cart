/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        h1: "2.25rem",
        h2: "1.875rem",
        h3: "1.5rem",
        h4: "1.25rem",
        p: "1rem",
      },
      fontFamily: {
        nunito: ["Nunito"],
      },
      colors: {
        semi_black: "rgb(68,68,68)",
      },
    },
  },
  plugins: [],
};
