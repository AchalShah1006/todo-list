import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "#FFF",
    },
    background: {
      default: "#161616",
    },
    primary: {
      main: "#548CFF",
    },
    secondary: {
      main: "#11cb5f",
    },
  },
});

export default darkTheme;
