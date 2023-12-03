import React, { useState } from "react";
import {
  Button,
  Box,
  FormControlLabel,
  TextField,
  Checkbox,
} from "@mui/material";

function DayThree() {
  const [part2, setPart2] = useState(false);
  const [inputString, setInputString] = useState("");
  const [output, setOutput] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputString(e.target.value);
  };

  const partOne = () => {
    const inputArray = inputString.split(/\r?\n/);
    let foundNumbers: number[] = [];
    inputArray.forEach((el, index) => {
      const numberIndices = [...el.matchAll(new RegExp(/\d/, "g"))].map(
        (num) => num.index ?? -1
      );
      let addedIndices: number[] = [];
      let numberIndexGroups: number[][] = [[]];
      numberIndices.forEach((numberIndex, numberIndexIndex) => {
        if (numberIndexIndex === 0) {
          numberIndexGroups = [[numberIndex]];
        } else {
          if (numberIndex === numberIndices[numberIndexIndex - 1] + 1) {
            numberIndexGroups[numberIndexGroups.length - 1].push(
              numberIndex ?? -1
            );
          } else {
            numberIndexGroups.push([numberIndex]);
          }
        }
      });
      const symbolIndices = (index: number) => {
        return [...inputArray[index].matchAll(new RegExp(/[^0-9.]/, "g"))].map(
          (num) => num.index ?? -1
        );
      };
      [index - 1, index, index + 1].forEach((searchIndex) => {
        if (searchIndex >= 0 && searchIndex <= inputArray.length - 1) {
          symbolIndices(searchIndex).forEach((symbol) => {
            numberIndexGroups.forEach((number) => {
              if (
                !addedIndices.includes(number[0]) &&
                (symbol === number[0] - 1 ||
                  symbol === number[number.length - 1] + 1 ||
                  number.includes(symbol))
              ) {
                let digitArray: number[] = [];
                number.forEach((numberIndex) => {
                  digitArray.push(parseInt(el[numberIndex]));
                  addedIndices.push(numberIndex);
                });
                foundNumbers.push(parseInt(digitArray.join("")));
              }
            });
          });
        }
      });
      console.log(addedIndices);
    });
    console.log(foundNumbers);
    setOutput(foundNumbers.reduce((acc, curr) => acc + curr, 0));
  };

  const partTwo = () => {
    const inputArray = inputString.split(/\r?\n/);
    let foundNumbers: number[] = [];
    inputArray.forEach((el, index) => {
      const gearIndices = [...el.matchAll(new RegExp(/\*/, "g"))].map(
        (num) => num.index ?? -1
      );
      const numberIndices = (index: number) => {
        return [...inputArray[index].matchAll(new RegExp(/\d/, "g"))].map(
          (num) => num.index ?? -1
        );
      };
      let topNumberGroups: number[][] = [[]];
      let sameNumberGroups: number[][] = [[]];
      let bottomNumberGroups: number[][] = [[]];
      [index - 1, index, index + 1].forEach((searchIndex) => {
        if (searchIndex >= 0 && searchIndex <= inputArray.length - 1) {
          numberIndices(searchIndex).forEach(
            (numberIndex, numberIndexIndex) => {
              let numberIndexGroups =
                searchIndex === index - 1
                  ? topNumberGroups
                  : searchIndex === index
                  ? sameNumberGroups
                  : bottomNumberGroups;
              if (numberIndexIndex === 0) {
                numberIndexGroups = [[numberIndex]];
              } else {
                if (
                  numberIndex ===
                  numberIndices(searchIndex)[numberIndexIndex - 1] + 1
                ) {
                  numberIndexGroups[numberIndexGroups.length - 1].push(
                    numberIndex ?? -1
                  );
                } else {
                  numberIndexGroups.push([numberIndex]);
                }
              }
            }
          );
        }
      });
      console.log(sameNumberGroups);
    });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3>Day 3</h3>
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
          <h4 style={{ marginTop: 5 }}>Sum of all part numbers: {output}</h4>
        </Box>
      )}
    </Box>
  );
}

export default DayThree;
