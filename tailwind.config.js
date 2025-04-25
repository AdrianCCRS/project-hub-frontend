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
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      fontFamily: {
        baloo: ['"Baloo Thambi 2"', 'cursive'],
        mukta: ['Mukta', 'sans-serif'],
      },
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