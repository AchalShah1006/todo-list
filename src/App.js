import React from "react";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import darkTheme from "./utils/theme/darkTheme";
import lightTheme from "./utils/theme/lightTheme";
import { DARK } from "./redux/Reducers/themeReducer/constants";
import Navbar from "./components/Navbar";

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme === DARK ? darkTheme : lightTheme}>
      <Box style={{ height: "100vh" }}>
        <Navbar />
      </Box>
    </ThemeProvider>
  );
}

export default App;
