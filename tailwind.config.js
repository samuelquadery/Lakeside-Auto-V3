/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Main brand blue - exact hex #1e5988
        brand: {
          DEFAULT: '#1e5988',
          light: '#2a6a9c',
          dark: '#174a73',
          darker: '#103a5c',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
