import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import darkTheme from "./utils/theme/darkTheme";
import lightTheme from "./utils/theme/lightTheme";
import { DARK } from "./redux/Reducers/themeReducer/constants";
import Frame from "./components/Frame";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./containers/Homepage";

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme === DARK ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/todo-list" element={<Frame />}>
            <Route index element={<Homepage />} />
            <Route path="login" element={<h1>Login</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
