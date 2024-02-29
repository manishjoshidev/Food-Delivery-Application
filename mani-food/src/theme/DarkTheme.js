const { createTheme } = require("@mui/material");

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#e91e63",
    },
    secondary: {
      main: "#5A20CB",
    },
    background: {
      default: "#0D0D0D",
      paper: "#0D0D0D",
    },
  },
  // Custom colors
  black: {
    main: "#242B2E",
  },
  textColor: {
    main: "#111111",
  },
});

export default darkTheme;
