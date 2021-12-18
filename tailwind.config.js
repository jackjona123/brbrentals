module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          '450' : '#A3A3A3',
          '850' : '#222222',
        },
        blue: {
          '450' : '#38c7ff',
        }
      },
      fontSize: {
        'tiny' : '.875rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
}
