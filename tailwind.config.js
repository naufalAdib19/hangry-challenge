/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-font-inactive': '#303030',
        'nav-font-active': '#A30926',
      },
    },
    listStyleType: {
      checkStyle: "\u2714",
    },
  },
  plugins: [],
}

