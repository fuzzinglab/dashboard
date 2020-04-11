const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.purple["700"],
        secondary: colors.purple["900"]
      }
    }
  },
  variants: {},
  plugins: []
};
