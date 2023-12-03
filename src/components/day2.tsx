import React, { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
} from "@mui/material";

function DayTwo() {
  const [part2, setPart2] = useState(false);
  const [inputString, setInputString] = useState("");
  const [possibleGames, setPossibleGames] = useState<number[]>([]);
  const [output, setOutput] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputString(e.target.value);
  };

  const partOne = () => {
    const inputArray = inputString.split(/\r?\n/);
    const newPossibleGames: number[] = [];
    inputArray.forEach((el, index) => {
      const match = el.match(/:\s(.*)/)![1];
      const rounds = match.split("; ");
      let possible = true;
      for (let i = 0; i < rounds.length; i++) {
        const colors = rounds[i].split(", ");
        for (const color of colors) {
          if (
            (color.includes("blue") &&
              parseInt(color.replace(" blue", "")) > 14) ||
            (color.includes("green") &&
              parseInt(color.replace(" green", "")) > 13) ||
            (color.includes("red") && parseInt(color.replace(" red", "")) > 12)
          ) {
            possible = false;
            break;
          }
        }
      }
      if (possible) newPossibleGames.push(index + 1);
    });
    setPossibleGames([...newPossibleGames]);
    setOutput(
      newPossibleGames.reduce((acc, curr) => {
        return acc + curr;
      }, 0)
    );
  };

  const partTwo = () => {
    const inputArray = inputString.split(/\r?\n/);
    let powers: number[] = [];
    inputArray.forEach((el, index) => {
      const match = el.match(/:\s(.*)/)![1];
      const colors = match.split(/,\s|;\s/);
      let blue = 0;
      let green = 0;
      let red = 0;
      colors.forEach((color) => {
        if (
          color.includes("blue") &&
          parseInt(color.replace(" blue", "")) > blue
        ) {
          blue = parseInt(color.replace(" blue", ""));
        } else if (
          color.includes("green") &&
          parseInt(color.replace(" green", "")) > green
        ) {
          green = parseInt(color.replace(" green", ""));
        } else if (
          color.includes("red") &&
          parseInt(color.replace(" red", "")) > red
        ) {
          red = parseInt(color.replace(" red", ""));
        }
      });
      powers.push(blue * green * red);
    });
    setOutput(
      powers.reduce((acc, curr) => {
        return acc + curr;
      }, 0)
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3>Day 2</h3>
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
        onClick={part2 ? partTwo : partOne}
        variant="contained"
        sx={{ width: "15%", margin: 1 }}
      >
        Do the thing
      </Button>

      {part2 ? (
        <h4>Sum of all powers: {output}</h4>
      ) : (
        <Box>
          <h4 style={{ marginTop: 5 }}>
            Possible Games: {possibleGames.join(", ")}
          </h4>
          <h4 style={{ marginTop: 5 }}>Sum of all possible IDs: {output}</h4>
        </Box>
      )}
    </Box>
  );
}

export default DayTwo;
