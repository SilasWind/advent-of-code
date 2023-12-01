import React from "react";
import "./App.css";
import { Button, ButtonGroup } from "@mui/material";
import DayOne from "./components/day1";
import MainMenu from "./components/mainMenu";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/day1" element={<DayOne />} />
      </Routes>
    </div>
  );
}

export default App;
