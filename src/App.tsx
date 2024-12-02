import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  AppBar,
  CssBaseline,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Router2023 from "./2023/router";
import Router2024 from "./2024/router";
import { Routes } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [tab, setTab] = useState(0);

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
        <Tabs onChange={(_, val) => setTab(val)} value={tab}>
          <Tab label="2023" value={0} />
          <Tab label="2024" value={1} />
        </Tabs>
        <Routes>{tab === 0 ? <Router2023 /> : <Router2024 />}</Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
