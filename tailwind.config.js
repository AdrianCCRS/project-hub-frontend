const {heroui} = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1BAA7D',       // Verde claro
        secondary: '#1bc632',     // Verde chinchoso para hover
        accent: '#10B981',        // Verde
        danger: '#EF4444',        // Rojo
        muted: '#6B7280',         // Gris
        fondo: '#F9FAFB',         // Fondo claro
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      prefix: "heroui", 
      addCommonColors: false, 
      defaultTheme: "dark", 
      defaultExtendTheme: "dark",
    }),
  ],
};