/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        md: "10px 5px 30px -15px rgba(0,0,0,0.66)",
        // box-shadow: 10px 14px 45px -21px rgba(0,0,0,0.66);
      },
    },
  },
  plugins: [],
};
