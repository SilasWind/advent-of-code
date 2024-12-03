import { Button, ButtonGroup, Grid, Grid2 } from "@mui/material";
import React from "react";

const MainMenu = ({ year }: { year: number }) => {
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
      <ButtonGroup
        orientation="vertical"
        variant="outlined"
        size="large"
        sx={{ padding: 5 }}
      >
        <Grid container rowSpacing={1}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((day) => (
            <Grid item gap={2} xs={3} key={day}>
              <Button href={`${year}/day${day}`}>Day {day}</Button>
            </Grid>
          ))}
        </Grid>
      </ButtonGroup>
    </div>
  );
};

export default MainMenu;
