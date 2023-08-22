/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5A57FF',
      },
      fontFamily: {
        poppins: ['Poppins'],
        roboto: ['Roboto'],
      },
      backgroundImage: {
        'background': "url('/src/cargo-images/background-cargo.jpg')"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

