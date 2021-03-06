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
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      28: "7rem",
      full: "100%",
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

      screens: {
        portrait: { raw: "(orientation: portrait)" },
        ipad: {
          raw:
            "(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2)",
        },
        "ipad-portrait": {
          raw:
            "(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)",
        },
        "ipad-landscape": {
          raw:
            "(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape)",
        },
        // => @media (orientation: portrait) { ... }
      },

      minHeight: {
        loading: "65vh",
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
