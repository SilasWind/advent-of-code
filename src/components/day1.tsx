import React, { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
} from "@mui/material";

function DayOne() {
  const [inputString, setInputString] = useState("");
  const [output, setOutput] = useState(0);
  const [ignoreWords, setIgnoreWords] = useState(true);

  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputString(e.target.value);
  };

  const convertInput = () => {
    const inputArray = inputString.split(/\r?\n/);
    let output = 0;
    inputArray.forEach((el) => {
      const reversedString = el.split("").reverse().join("");
      let firstNumber = "";
      let lastNumber = "";
      let firstDigitIndex = el.search(/\d/);
      let firstDigit = el[firstDigitIndex];
      let lastDigitIndex =
        reversedString.search(/\d/) !== -1
          ? el.length - reversedString.search(/\d/) - 1
          : -1;
      let lastDigit = el[lastDigitIndex];
      let lowestWordFoundIndex = 100;
      let lowestWordFound = "";
      let highestWordFoundIndex = -100;
      let highestWordFound = "";
      if (!ignoreWords) {
        numbers.forEach((number) => {
          const index = el.indexOf(number);
          const lastIndex = el.lastIndexOf(number);
          if (index !== -1) {
            if (index < lowestWordFoundIndex) {
              lowestWordFoundIndex = index;
              lowestWordFound = number;
            }
            if (lastIndex > highestWordFoundIndex) {
              highestWordFoundIndex = lastIndex;
              highestWordFound = number;
            }
          }
        });
      }
      if (
        ignoreWords ||
        (firstDigitIndex !== -1 && firstDigitIndex < lowestWordFoundIndex)
      ) {
        firstNumber = ignoreWords && firstDigitIndex === -1 ? "0" : firstDigit;
      } else {
        firstNumber = numbers.indexOf(lowestWordFound).toString();
      }
      if (ignoreWords || lastDigitIndex > highestWordFoundIndex) {
        lastNumber = ignoreWords && lastDigitIndex === -1 ? "0" : lastDigit;
      } else {
        lastNumber = numbers.indexOf(highestWordFound).toString();
      }
      console.log(parseInt(firstNumber + lastNumber));
      output = output + parseInt(firstNumber + lastNumber);
    });
    setOutput(output);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3>Day 1</h3>
      <FormControlLabel
        control={
          <Checkbox
            checked={ignoreWords}
            onChange={() => setIgnoreWords(!ignoreWords)}
          />
        }
        label="Ignore written out numbers"
      />

      <TextField
        multiline
        rows={4}
        value={inputString}
        onChange={(e) => handleChange(e)}
        sx={{ width: "90vw" }}
      />
      <Button
        onClick={convertInput}
        variant="contained"
        sx={{ width: "15%", margin: 1 }}
      >
        Do the thing
      </Button>

      <h4 style={{ marginTop: 5 }}>Sum of all numbers: {output}</h4>
    </Box>
  );
}

export default DayOne;
