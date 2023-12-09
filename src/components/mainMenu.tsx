import styled from "@emotion/styled";
import { Button, ButtonGroup, Typography } from "@mui/material";
import React from "react";

const MainMenu: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src="/mainmenu.png" style={{ height: "10%", width: "40%" }} />
      <ButtonGroup orientation="vertical" variant="text" size="large">
        <Button href="/day1">Day 1</Button>
        <Button href="/day2">Day 2</Button>
        <Button href="/day3">Day 3</Button>
        <Button href="/day4">Day 4</Button>
        <Button href="/day5">Day 5</Button>
        <Button href="/day6">Day 6</Button>
        <Button href="/day7">Day 7</Button>
        <Button href="/day8">Day 8</Button>
        <Button href="/day9">Day 9</Button>
      </ButtonGroup>
    </div>
  );
};

export default MainMenu;
