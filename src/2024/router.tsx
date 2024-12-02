import React from "react";
import { Route, Routes } from "react-router-dom";
import MainMenu from "../mainMenu";

export default function Router2024() {
  return (
    <Routes>
      <Route path="/" element={<MainMenu year={2024} />} />
    </Routes>
  );
}
