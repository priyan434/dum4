/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: '599.98px' },
        sm: { min: '600px' },
        md: { min: '960px' },
        lg: { min: '1280px' },
        xl: { min: '1920px' },
      },
    },
  },
  plugins: [],
}

