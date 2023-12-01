import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function DayOne() {
  const [inputString, setInputString] = useState("");
  const [input, setInput] = useState([""]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputString(e.target.value);
  };

  const convertInput = () => {
    console.log(inputString.split(/\r?\n/));
    setInput(inputString.split(/\r?\n/));
  };
  return (
    <div>
      <h3>Day 1</h3>
      <TextField
        multiline
        rows={4}
        value={inputString}
        onChange={(e) => handleChange(e)}
      />
      <Button onClick={convertInput} variant="contained">
        Convert
      </Button>
    </div>
  );
}

export default DayOne;
