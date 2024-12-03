import React from "react";
import { Route, Routes } from "react-router-dom";
import MainMenu from "../mainMenu";
import DayOne from "./days/day1";
import DayTwo from "./days/day2";

export default function Router2024() {
  return (
    <Routes>
      <Route path="/" element={<MainMenu year={2024} />} />
      <Route path="2024/day1" element={<DayOne />} />
      <Route path="2024/day2" element={<DayTwo />} />
    </Routes>
  );
}
