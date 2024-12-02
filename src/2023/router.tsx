import React from "react";
import { Route, Routes } from "react-router-dom";
import MainMenu from "../mainMenu";
import DayOne from "./days/day1";
import DayTen from "./days/day10";
import DayEleven from "./days/day11";
import DayTwelve from "./days/day12";
import DayThirteen from "./days/day13";
import DayFourteen from "./days/day14";
import DayFifteen from "./days/day15";
import DaySixteen from "./days/day16";
import DaySeventeen from "./days/day17";
import DayEighteen from "./days/day18";
import DayNineteen from "./days/day19";
import DayTwo from "./days/day2";
import DayTwenty from "./days/day20";
import DayThree from "./days/day3";
import DayFour from "./days/day4";
import DayFive from "./days/day5";
import DaySix from "./days/day6";
import DaySeven from "./days/day7";
import DayEight from "./days/day8";
import DayNine from "./days/day9";

export default function Router2023() {
  return (
    <Routes>
      <Route path="/" element={<MainMenu year={2023} />} />
      <Route path="2023/day1" element={<DayOne />} />
      <Route path="2023/day2" element={<DayTwo />} />
      <Route path="2023/day3" element={<DayThree />} />
      <Route path="2023/day4" element={<DayFour />} />
      <Route path="2023/day5" element={<DayFive />} />
      <Route path="2023/day6" element={<DaySix />} />
      <Route path="2023/day7" element={<DaySeven />} />
      <Route path="2023/day8" element={<DayEight />} />
      <Route path="2023/day9" element={<DayNine />} />
      <Route path="2023/day10" element={<DayTen />} />
      <Route path="2023/day11" element={<DayEleven />} />
      <Route path="2023/day12" element={<DayTwelve />} />
      <Route path="2023/day13" element={<DayThirteen />} />
      <Route path="2023/day14" element={<DayFourteen />} />
      <Route path="2023/day15" element={<DayFifteen />} />
      <Route path="2023/day16" element={<DaySixteen />} />
      <Route path="2023/day17" element={<DaySeventeen />} />
      <Route path="2023/day18" element={<DayEighteen />} />
      <Route path="2023/day19" element={<DayNineteen />} />
      <Route path="2023/day20" element={<DayTwenty />} />
    </Routes>
  );
}
