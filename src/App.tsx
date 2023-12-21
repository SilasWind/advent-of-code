import React from "react";
import MainMenu from "./components/mainMenu";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AppBar, CssBaseline, IconButton, Toolbar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DayOne from "./components/day1";
import DayTwo from "./components/day2";
import DayThree from "./components/day3";
import DayFour from "./components/day4";
import DayFive from "./components/day5";
import DaySix from "./components/day6";
import DaySeven from "./components/day7";
import DayEight from "./components/day8";
import DayNine from "./components/day9";
import DayTen from "./components/day10";
import DayEleven from "./components/day11";
import DayTwelve from "./components/day12";
import DayThirteen from "./components/day13";
import DayFourteen from "./components/day14";
import DayFifteen from "./components/day15";
import DaySixteen from "./components/day16";
import DaySeventeen from "./components/day17";
import DayEighteen from "./components/day18";

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
          <Route path="/day3" element={<DayThree />} />
          <Route path="/day4" element={<DayFour />} />
          <Route path="/day5" element={<DayFive />} />
          <Route path="/day6" element={<DaySix />} />
          <Route path="/day7" element={<DaySeven />} />
          <Route path="/day8" element={<DayEight />} />
          <Route path="/day9" element={<DayNine />} />
          <Route path="/day10" element={<DayTen />} />
          <Route path="/day11" element={<DayEleven />} />
          <Route path="/day12" element={<DayTwelve />} />
          <Route path="/day13" element={<DayThirteen />} />
          <Route path="/day14" element={<DayFourteen />} />
          <Route path="/day15" element={<DayFifteen />} />
          <Route path="/day16" element={<DaySixteen />} />
          <Route path="/day17" element={<DaySeventeen />} />
          <Route path="/day18" element={<DayEighteen />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
