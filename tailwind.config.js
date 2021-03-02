module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        100: "#c5c5c5",
        200: "#343a43",
        300: "#272a30",
      },
      brand: {
        primary: {
          100: "#1b1e24",
        },
      },
      white: "#ffffff",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
