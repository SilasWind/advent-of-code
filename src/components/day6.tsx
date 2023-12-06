import React, { useState } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  TextField,
  Checkbox,
} from "@mui/material";

function DaySix() {
  const [part2, setPart2] = useState(false);
  const [inputString, setInputString] = useState("");
  const [output, setOutput] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputString(e.target.value);
  };

  const doTheThing = () => {
    const match =
      inputString.match(/Time:\s+([\d\s]+)Distance:\s+([\d\s]+)/) ?? [];
    const times = part2
      ? [parseInt(match[1]?.replaceAll(" ", ""))]
      : match[1]
          ?.split(" ")
          .filter((time) => time)
          .map((time) => parseInt(time.trim()));
    const distances = part2
      ? [parseInt(match[2]?.replaceAll(" ", ""))]
      : match[2]
          ?.split(" ")
          .filter((distance) => distance)
          .map((distance) => parseInt(distance.trim()));
    let foundDistances: number[] = new Array(distances.length).fill(0);
    times.forEach((time, index) => {
      for (let i = 0; i <= time; i++) {
        if (i * (time - i) > distances[index]) {
          foundDistances[index]++;
        }
      }
    });
    setOutput(foundDistances.reduce((a, b) => a * b, 1));
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3>Day 6</h3>
      <FormControlLabel
        control={<Checkbox checked={part2} onChange={() => setPart2(!part2)} />}
        label="Part 2"
      />
      <TextField
        multiline
        rows={4}
        value={inputString}
        onChange={(e) => handleChange(e)}
        sx={{ width: "90vw" }}
      />
      <Button
        onClick={doTheThing}
        variant="contained"
        sx={{ width: "15%", margin: 1 }}
      >
        Do the thing
      </Button>

      {part2 ? (
        <h4>Output: {output}</h4>
      ) : (
        <Box>
          <h4 style={{ marginTop: 5 }}>
            {part2 ? "Output" : "Product of matches"}: {output}
          </h4>
        </Box>
      )}
    </Box>
  );
}

export default DaySix;
