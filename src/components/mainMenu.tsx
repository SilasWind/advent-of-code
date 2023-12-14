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
        {Array.from({ length: 14 }, (_, i) => i + 1).map((day) => (
          <Button href={`/day${day}`}>Day {day}</Button>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default MainMenu;
