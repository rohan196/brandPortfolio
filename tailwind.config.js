/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#19202A',
        box: '#494150',
        brownBtn: '#865642',
        mainPink: '#A97A82',
        offWhite: '#E6DCDD',
      },
    },
  },
  plugins: [],
}

