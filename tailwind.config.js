/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Bricolage Grotesque", 'sans-serif'], // Replace 'Roboto' with your chosen font
      },
      fontWeight: {
        thin: 100,   // Example of a lighter weight
        extraLight: 200,
        light: 300,   // Lighter font weight
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
        black: 900,
      },
    },

  },
  plugins: [],
}

