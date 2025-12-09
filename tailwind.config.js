/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        oatly: {
          beige: "#f8f4e3",
          cream: "#fffef7",
          accent: "#f15b3d",
        },
        carbon: {
          DEFAULT: "#000000",
          light: "#4a4a4a",
        },
        water: {
          DEFAULT: "#000000",
          light: "#4a4a4a",
        },
        land: {
          DEFAULT: "#000000",
          light: "#4a4a4a",
        },
      },
      fontFamily: {
        sans: ['"Courier New"', 'Courier', 'monospace'],
        mono: ['"Courier New"', 'Courier', 'monospace'],
        display: ['"Courier New"', 'Courier', 'monospace'],
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
        '6': '6px',
      },
      boxShadow: {
        'brutal': '6px 6px 0px rgba(0, 0, 0, 1)',
        'brutal-lg': '10px 10px 0px rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [],
}
