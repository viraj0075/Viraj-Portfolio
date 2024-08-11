/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    keyframes: {
      gradient: {
        '0%, 100%': {
          'background-size': '200% 200%',
          'background-position': 'left center',
        },
        '70%': {
          'background-size': '200% 200%',
          'background-position': 'right center',
        },
      },
    },
    animation: {
      gradient: 'gradient 4s ease infinite',
    },
  },
  plugins: [],
}