import React, { useState } from "react";
import InputComp from "./inputComp";

function DayEighteen() {
  const [part2, setPart2] = useState(false);
  const [inputString, setInputString] = useState("");
  const [output, setOutput] = useState(0);
  const [holeOutput, setHoleOutput] = useState<boolean[][]>([[true]]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputString(e.target.value);
  };

  const doTheThing = () => {
    const inputArray = inputString
      .trim()
      .split("\n")
      .map((row) => row.trim().split(" "));
    let diggyHole: boolean[][] = [[true]];
    let lastCoords: number[] = [0, 0];
    let newOutput = 0;
    inputArray.forEach((line) => {
      for (let i = 0; i < parseInt(line[1]); i++) {
        if (line[0] === "R") {
          if (lastCoords[0] === diggyHole[lastCoords[1]].length - 1) {
            diggyHole[lastCoords[1]].push(true);
          } else {
            diggyHole[lastCoords[1]][lastCoords[0] + 1] = true;
          }
          lastCoords = [lastCoords[0] + 1, lastCoords[1]];
        } else if (line[0] === "L") {
          if (lastCoords[0] === 0) {
            diggyHole.forEach((line, lineIndex) => {
              line.splice(0, 0, lineIndex === lastCoords[1] ? true : false);
            });
          } else {
            diggyHole[lastCoords[1]][lastCoords[0] - 1] = true;
            lastCoords = [lastCoords[0] - 1, lastCoords[1]];
          }
        } else if (line[0] === "U") {
          if (lastCoords[1] === 0) {
            diggyHole.splice(
              0,
              0,
              Array(diggyHole[lastCoords[0]].length).fill(false)
            );
            diggyHole[0][lastCoords[0]] = true;
          } else {
            diggyHole[lastCoords[1] - 1][lastCoords[0]] = true;
            lastCoords = [lastCoords[0], lastCoords[1] - 1];
          }
        } else {
          if (lastCoords[1] === diggyHole.length - 1) {
            diggyHole.push(Array(diggyHole[lastCoords[1]].length).fill(false));
            diggyHole[lastCoords[1] + 1][lastCoords[0]] = true;
          } else {
            diggyHole[lastCoords[1] + 1][lastCoords[0]] = true;
          }
          lastCoords = [lastCoords[0], lastCoords[1] + 1];
        }
      }
    });
    diggyHole.forEach((line, lineIndex) => {
      let inside = false;
      let lastBool = false;
      line.forEach((char, charIndex) => {
        if (char) {
          newOutput++;
          if (!lastBool) {
            inside = !inside;
          }
        } else if (inside) {
          newOutput++;
          //   diggyHole[lineIndex][charIndex] = true;
        }
        lastBool = char;
      });
    });
    setHoleOutput([...diggyHole]);
    setOutput(newOutput);
    console.log(diggyHole);
  };
  return (
    <div>
      <InputComp
        part2={part2}
        setPart2={setPart2}
        inputString={inputString}
        output={output}
        part1Func={doTheThing}
        part2Func={doTheThing}
        handleChange={handleChange}
        dayNumber={18}
      />
      <div>
        {holeOutput?.map((row, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              fontFamily: "monospace",
            }}
          >
            {row.map((char, charIndex) => (
              <div key={charIndex}>{char ? "#" : "."}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DayEighteen;
