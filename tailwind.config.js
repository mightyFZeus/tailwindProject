module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Montserrat', 'sans-serif']
      },
      backgroundImage : theme =>({
        'near-footer' : "url('/src/assetsImage/Rectangle 14.png')",
        'test': "url('/src/assetsImage/Vector 2.png')"
      })
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
