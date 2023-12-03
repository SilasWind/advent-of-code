import React from "react";
import DayOne from "./components/day1";
import DayTwo from "./components/day2";
import MainMenu from "./components/mainMenu";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AppBar, CssBaseline, IconButton, Toolbar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <AppBar position="sticky">
          <Toolbar>
            <IconButton href="/" edge="start" color="inherit">
              <HomeIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/day1" element={<DayOne />} />
          <Route path="/day2" element={<DayTwo />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
