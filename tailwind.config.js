module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        100: "#c5c5c5",
        200: "#343a43",
        300: "#272a30",
        400: "#6f8caa",
      },
      brand: {
        primary: {
          100: "#1b1e24",
          200: "#14161b",
        },
      },
      // blue: "#129AB7",
      white: "#ffffff",
      black: "#000000",
      green: "#2bd299",
      red: "#f33d59",
      blue: {
        100: "#129AB7",
        200: "#6f8caa",
      },
    },

    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      fontSize: {
        xxs: "0.625rem",
        xxxs: "0.5rem",
      },
      backgroundImage: {
        stadium:
          "linear-gradient(0deg, rgb(12 12 12 / 70%), rgb(0 0 0 / 90%)), url(https://res.cloudinary.com/uniodds/image/upload/c_scale,q_auto,w_417/v1615151436/stadium-2.jpg)",
      },
      inset: {
        icon: "85%",
        "icon-md": "90%",
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
