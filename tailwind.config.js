module.exports = {
  theme: {
    extend: {
      backgroundImage: theme => ({
        "hero": "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/src/assets/hero.jpg')",

      }),
      zIndex: {
        '-10': '-10',
      },
      fontFamily: {
        'display': ['Quicksand', "sans-serif"],
        "sans": ["Raleway", "sans-serif"],
        'display-alt': ["Oxanium", "sans-serif"]
      }
    }
  }
}