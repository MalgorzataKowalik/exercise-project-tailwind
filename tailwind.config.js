/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'violet': '#AC32E4',
        'purple': '#7918F2',
        'cobalt': '#4801FF'
      },
    },
  },
  plugins: [],
}

