import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function DayOne() {
  const [inputString, setInputString] = useState("");
  const [output, setOutput] = useState(0);

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
      let firstNumber = 100;
      let lastNumber = -100;
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
      if (firstDigitIndex !== -1 && firstDigitIndex < lowestWordFoundIndex) {
        firstNumber = parseInt(firstDigit);
      } else {
        firstNumber = numbers.indexOf(lowestWordFound);
      }
      if (lastDigitIndex > highestWordFoundIndex) {
        lastNumber = parseInt(lastDigit);
      } else {
        lastNumber = numbers.indexOf(highestWordFound);
      }
      output =
        output + parseInt(firstNumber.toString() + lastNumber.toString());
    });
    setOutput(output);
  };
  return (
    <div>
      <h3>Day 1</h3>
      <TextField
        multiline
        rows={4}
        value={inputString}
        onChange={(e) => handleChange(e)}
        sx={{ width: "90vw" }}
      />
      <Button onClick={convertInput} variant="contained">
        Convert
      </Button>
      <h4 style={{ marginTop: 5 }}>Sum of all numbers: {output}</h4>
    </div>
  );
}

export default DayOne;
