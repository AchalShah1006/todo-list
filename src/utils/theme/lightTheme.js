import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    text: {
      primary: "#000",
    },
    background: {
      default: "#FFF",
    },
    primary: {
      main: "#002aff",
      light: "#548CFF",
      dark: "#002aff",
    },
    secondary: {
      main: "#548CFF",
      light: "#919191",
      dark: "#424242",
    },
  },
});

export default lightTheme;
