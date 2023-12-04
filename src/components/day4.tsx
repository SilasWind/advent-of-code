import React, { useState } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  TextField,
  Checkbox,
} from "@mui/material";

function DayFour() {
  const [part2, setPart2] = useState(false);
  const [inputString, setInputString] = useState("");
  const [output, setOutput] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputString(e.target.value);
  };

  const doTheThing = () => {
    const inputArray = inputString.split(/\r?\n/);
    let newOutput = 0;
    let cardCopies = new Array(inputArray.length).fill(1);
    let totalCards = inputArray.length;
    inputArray.forEach((el, index) => {
      const match =
        el.match(/Card\s+\d+:\s+(\d+(?:\s+\d+)*)\s+\|\s+(\d+(?:\s+\d+)*)/) ??
        [];
      const ownNumbers = match[1]
        ?.split(" ")
        .filter((number) => number)
        .map((ownNumber) => {
          return ownNumber.trim();
        });
      const winningNumbers = match[2]
        ?.split(" ")
        .filter((number) => number)
        .map((ownNumber) => {
          return ownNumber.trim();
        });
      let score = 0;
      if (part2) {
        do {
          let currentIndex = index + 1;
          winningNumbers.forEach((winningNumber) => {
            ownNumbers.forEach((ownNumber) => {
              if (winningNumber === ownNumber) {
                cardCopies[currentIndex]++;
                currentIndex++;
                totalCards++;
              }
            });
          });
          if (cardCopies[index]) cardCopies[index]--;
        } while (cardCopies[index]);
      } else {
        winningNumbers.forEach((winningNumber) => {
          ownNumbers.forEach((ownNumber) => {
            if (winningNumber === ownNumber) {
              if (score === 0) {
                score = 1;
              } else {
                score = score * 2;
              }
            }
          });
        });
        newOutput = newOutput + score;
      }
    });
    setOutput(part2 ? totalCards : newOutput);
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
            {part2 ? "Output" : "Total Score"}: {output}
          </h4>
        </Box>
      )}
    </Box>
  );
}

export default DayFour;
