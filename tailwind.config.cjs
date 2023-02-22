/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        VeryDarkBlue: "hsl(223 30% 9%)",
        darkBlue: "hsl(223 36% 14%)",
        lightBlue: "hsl(223 23% 46%)",
        lightRed: "#fc4545",
      },
    },
  },
  plugins: [],
};
