module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'clouds': "url('/src/static/images/clouds.jpg')",
        'sunset': "url('/src/static/images/sunset.jpg')",
      },
      width: {
        "screen-2/3": "calc(100vw * 2 / 3)",
      },
      borderWidth: {
        'r-2/5': '0.4rem'
      }
    },
  },
  plugins: [],
}