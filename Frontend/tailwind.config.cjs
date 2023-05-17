/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myPink: "#ff597a",
        myGray: "#d4d0dd",
        myYellow: "#fef7ed",
        myBlue: "#f2f5ff",
      },
      borderWidth: {
        3: "3px",
      },
      backgroundImage: {
        "hero-pattern": "url('./src/assets/Lastminute-spontan-buchen.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
