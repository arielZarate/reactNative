/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", // Incluye el archivo App
    "./src/**/*.{js,jsx,ts,tsx}", // Busca en todos los archivos dentro de la carpeta src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
