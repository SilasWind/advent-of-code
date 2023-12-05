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
    let lowestSeed = seeds[0];
    let highestSeed = seeds[1];
    seeds.forEach((seed) => {
      console.log("checking seed " + seed);
      if (seed < lowestSeed) {
        lowestSeed = seed;
      }
      if (seed > highestSeed) {
        highestSeed = seed;
      }
    });
    let exchangeArr: number[] = [...Array(highestSeed).keys()];
    let prevExchangeArr: number[] = [...exchangeArr];
    for (let j = 0; j < 7; j++) {
      extractArray(j, match).forEach((exchange) => {
        for (let i = 0; i < exchange[2]; i++) {
          console.log(`${j}/6 | ${i}/${exchange[2] - 1}`);
          exchangeArr[prevExchangeArr.indexOf(exchange[1] + i)] =
            exchange[0] + i;
        }
      });
      prevExchangeArr = [...exchangeArr];
    }
    setOutput(exchangeArr[lowestSeed]);
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
