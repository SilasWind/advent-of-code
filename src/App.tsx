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
import { useLocation } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const location = useLocation();
  const [tab, setTab] = useState(location.pathname.includes("2024") ? 1 : 0);

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
        {location.pathname === "/" && (
          <Tabs onChange={(_, val) => setTab(val)} value={tab}>
            <Tab label="2023" value={0} />
            <Tab label="2024" value={1} />
          </Tabs>
        )}
        {tab === 0 ? <Router2023 /> : <Router2024 />}
      </div>
    </ThemeProvider>
  );
}

export default App;
