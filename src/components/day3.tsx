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

  const doTheThing = () => {
    console.log("thing done");
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
        onClick={doTheThing}
        variant="contained"
        sx={{ width: "15%", margin: 1 }}
      >
        Do the thing
      </Button>

      {part2 ? (
        <h4>Sum of all powers: {output}</h4>
      ) : (
        <Box>
          <h4 style={{ marginTop: 5 }}>Sum of all possible IDs: {output}</h4>
        </Box>
      )}
    </Box>
  );
}

export default DayThree;
