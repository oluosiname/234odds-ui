module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        100: "#c5c5c5",
        200: "#343a43",
        300: "#272a30",
        400: "#6F8CAA",
      },
      brand: {
        primary: {
          100: "#1b1e24",
          200: "#14161b",
        },
      },
      blue: "#129AB7",
      white: "#ffffff",
      black: "#000000",
      green: "#2BD299",
      red: "#F33D59",
    },

    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      fontSize: {
        xxs: "0.625rem",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["first", "last"],
    },
  },
  plugins: [],
};
