import React, { useState } from "react";
import InputComp from "../../inputComp";

export default function DayOne() {
  const [part2, setPart2] = useState(false);
  const [inputString, setInputString] = useState("");
  const [output, setOutput] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputString(e.target.value);
  };

  const doTheThing = () => {
    const { firstArr, secondArr } = getFormattedArrays(inputString, true);
    let result = 0;
    for (let i = 0; i < firstArr.length; i++) {
      result = result + Math.abs(firstArr[i] - secondArr[i]);
    }
    setOutput(result);
  };

  const doTheThingPart2 = () => {
    const { firstArr, secondArr } = getFormattedArrays(inputString, true);
    let result = 0;
    firstArr.forEach((el) => {
      let findings = 0;
      secondArr.forEach((el2) => {
        if (el === el2) {
          findings++;
        }
      });
      result = result + el * findings;
    });
    setOutput(result);
  };
  return (
    <InputComp
      part2={part2}
      setPart2={setPart2}
      inputString={inputString}
      output={output}
      part1Func={doTheThing}
      part2Func={doTheThingPart2}
      handleChange={handleChange}
      dayNumber={1}
    />
  );
}

const getFormattedArrays = (inputString: string, sort?: boolean) => {
  let firstArr: number[] = [];
  let secondArr: number[] = [];
  inputString
    .split("\n")
    .map((x) => x.split("   "))
    .map((x) => {
      firstArr.push(parseInt(x[0]));
      secondArr.push(parseInt(x[1]));
      return x;
    });
  if (sort) {
    firstArr.sort((a, b) => a - b);
    secondArr.sort((a, b) => a - b);
  }
  return { firstArr, secondArr };
};
