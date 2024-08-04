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
        custom_black: "rgb(187, 187, 187)",
      },
      gridTemplateColumns: {
        custom_cart_items_layout: "3fr 1fr 1fr 1fr",
      },
    },
  },
  plugins: [],
};
