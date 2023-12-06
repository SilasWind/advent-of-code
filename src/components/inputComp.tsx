import React from "react";
import {
  Box,
  Button,
  FormControlLabel,
  TextField,
  Checkbox,
} from "@mui/material";

type InputProps = {
  part2: boolean;
  setPart2: React.Dispatch<React.SetStateAction<boolean>>;
  inputString: string;
  output: number;
  part1Func: () => void;
  part2Func: () => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  dayNumber: number;
};

const InputComp: React.FC<InputProps> = ({
  part2,
  setPart2,
  inputString,
  output,
  part1Func,
  part2Func,
  handleChange,
  dayNumber,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3>Day {dayNumber}</h3>
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
        onClick={part2 ? part2Func : part1Func}
        variant="contained"
        sx={{ width: "15%", margin: 1 }}
      >
        Do the thing
      </Button>

      <Box>
        <h4 style={{ marginTop: 5 }}>Output: {output}</h4>
      </Box>
    </Box>
  );
};

export default InputComp;
