module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        400: "400px",
      },
      keyframes: {
        bounce2: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        loading: "bounce2 0.5s ease-in infinite",
        "loading-100": "bounce2 0.5s ease-in 0.1s",
        "loading-200": "bounce2 0.5s ease-in 0.2s",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
