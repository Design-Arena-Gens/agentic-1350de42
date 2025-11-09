/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef7ff',
          100: '#d9ecff',
          200: '#badeff',
          300: '#90cbff',
          400: '#66b2ff',
          500: '#3b93ff',
          600: '#2574e6',
          700: '#1c5ac0',
          800: '#184b99',
          900: '#173f7d'
        }
      },
      boxShadow: {
        glow: '0 10px 30px rgba(59, 147, 255, 0.35)'
      }
    }
  },
  plugins: []
}
