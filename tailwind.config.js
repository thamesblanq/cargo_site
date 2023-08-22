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
      },

      keyframes: {
        'open-menu': {
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(1.2)'},
          '100%': {transform: 'scaleY(1)'}
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }

    },
  },

  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}