module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      mono: ["Roboto Mono", "Menlo", "monospace"],
    },
    extend: {
      colors: {
        primary: {
          50: "#4b5562",
          100: "#414b58",
          200: "#37414e",
          300: "#2d3744",
          400: "#232d3a",
          500: "#192330",
          600: "#0f1926",
          700: "#050f1c",
          800: "#000512",
          900: "#000008",
        },
      },
      animation: {
        blob: "blob 9s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(20px, -30px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1.0)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
