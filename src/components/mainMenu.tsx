import { Button, ButtonGroup, Grid } from "@mui/material";
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
      <img
        src="/mainmenu.png"
        style={{ height: "10%", width: "40%" }}
        alt="emini"
      />
      <ButtonGroup orientation="vertical" variant="outlined" size="large">
        <Grid container rowSpacing={1}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((day) => (
            <Grid item gap={2} xs={3} key={day}>
              <Button href={`/day${day}`}>Day {day}</Button>
            </Grid>
          ))}
        </Grid>
      </ButtonGroup>
    </div>
  );
};

export default MainMenu;
