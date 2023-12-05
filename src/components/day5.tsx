import React, { useState } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  TextField,
  Checkbox,
} from "@mui/material";

function DayFive() {
  const [part2, setPart2] = useState(false);
  const [inputString, setInputString] = useState("");
  const [output, setOutput] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputString(e.target.value);
  };

  const extractArray = (regexIndex: number, match: string[]) => {
    const rows = match[regexIndex]?.split("\n").filter((row) => row);
    return rows?.map((row) => row.split(" ").map(Number));
  };

  const doTheThing = () => {
    const seedsRegex = inputString.match(/seeds:\s*([\d\s]+)/) ?? [];
    const match = inputString.match(/(?<=^|\n)[\d\s]+$/gm) ?? [];
    const seeds = seedsRegex[1]
      .replaceAll("\n", "")
      .split(" ")
      .map((seed) => {
        return parseInt(seed);
      });
    let locations: number[] = [];
    seeds.forEach((seed) => {
      let newSeed = seed;
      for (let i = 0; i < 7; i++) {
        let changed = false;
        extractArray(i, match).forEach((conversion, index) => {
          if (
            newSeed <= conversion[1] + conversion[2] - 1 &&
            newSeed >= conversion[1] &&
            !changed
          ) {
            console.log(
              `changed ${newSeed} to ${
                conversion[0] + newSeed - conversion[1]
              } in step ${i} conversion ${index}`
            );
            newSeed = conversion[0] + newSeed - conversion[1];
            changed = true;
          }
        });
      }
      locations.push(newSeed);
    });
    let smallestLocation = locations[0];
    locations.forEach((location) => {
      if (location < smallestLocation) {
        smallestLocation = location;
      }
    });
    setOutput(smallestLocation);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3>Day 4</h3>
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
            {part2 ? "Output" : "Lowest Seed"}: {output}
          </h4>
        </Box>
      )}
    </Box>
  );
}

export default DayFive;
