import React, { useState } from "react";
import InputComp from "./inputComp";
import _ from "lodash";

function DayEighteen() {
  const [part2, setPart2] = useState(false);
  const [inputString, setInputString] = useState("");
  const [output, setOutput] = useState(0);
  const [holeOutput, setHoleOutput] = useState<string[][]>([["#"]]);

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
    let diggyHole: string[][] = [["#"]];
    let lastCoords: number[] = [0, 0];
    let newOutput = 0;
    inputArray.forEach((line) => {
      for (let i = 0; i < parseInt(line[1]); i++) {
        if (line[0] === "R") {
          if (lastCoords[0] === diggyHole[lastCoords[1]].length - 1) {
            diggyHole[lastCoords[1]].push("#");
          } else {
            diggyHole[lastCoords[1]][lastCoords[0] + 1] = "#";
          }
          lastCoords = [lastCoords[0] + 1, lastCoords[1]];
        } else if (line[0] === "L") {
          if (lastCoords[0] === 0) {
            diggyHole.forEach((line, lineIndex) => {
              line.splice(0, 0, lineIndex === lastCoords[1] ? "#" : ".");
            });
          } else {
            diggyHole[lastCoords[1]][lastCoords[0] - 1] = "#";
            lastCoords = [lastCoords[0] - 1, lastCoords[1]];
          }
        } else if (line[0] === "U") {
          if (lastCoords[1] === 0) {
            diggyHole.splice(
              0,
              0,
              Array(diggyHole[diggyHole.length - 1].length).fill(".")
            );
            diggyHole[0][lastCoords[0]] = "#";
          } else {
            diggyHole[lastCoords[1] - 1][lastCoords[0]] = "#";
            lastCoords = [lastCoords[0], lastCoords[1] - 1];
          }
        } else {
          if (lastCoords[1] === diggyHole.length - 1) {
            diggyHole.push(Array(diggyHole[lastCoords[1]].length).fill("."));
            diggyHole[lastCoords[1] + 1][lastCoords[0]] = "#";
          } else {
            diggyHole[lastCoords[1] + 1][lastCoords[0]] = "#";
          }
          lastCoords = [lastCoords[0], lastCoords[1] + 1];
        }
      }
    });
    diggyHole.forEach((line, lineIndex) => {
      let inside = false;
      let lastChar = ".";
      for (let i = 0; i < line.length; i++) {
        if (!(i in line)) {
          line[i] = ".";
        }
      }
      line.forEach((char, charIndex) => {
        // console.log(lastChar);
        if (char === "#") {
          newOutput++;
          if (lastChar === ".") {
            inside = !inside;
          }
          lastChar = char;
        } else {
          if (
            lineIndex > 0 &&
            lastChar === "#" &&
            line[charIndex - 2] === "#"
          ) {
            inside = diggyHole[lineIndex - 1][charIndex] !== "." ? true : false;
          }
          lastChar = char;
          if (inside) {
            newOutput++;
            diggyHole[lineIndex][charIndex] = "+";
          }
        }
      });
    });

    setHoleOutput([...diggyHole]);
    setOutput(newOutput);
    console.log(diggyHole);
    console.log("too high: 46339");
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
              <div key={charIndex}>{char}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DayEighteen;
