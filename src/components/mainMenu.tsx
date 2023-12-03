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
      <Typography variant="h2">Main Menu</Typography>
      <ButtonGroup orientation="vertical" variant="text" size="large">
        <Button href="/day1">Day 1</Button>
        <Button href="/day2">Day 2</Button>
      </ButtonGroup>
    </div>
  );
};

export default MainMenu;
