const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        prose: "80ch",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100vw",
          },
        },
      },
      colors: {
        primary: "#3d405b",
        secondary: "#e07a5f",
      },
      fontFamily: {
        display: ['"Poppins"', "sans-serif"],
        body: ['"Lato"', "sans-serif"],
        mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
