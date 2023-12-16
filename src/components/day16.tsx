import React, { useState } from "react";
import InputComp from "./inputComp";

function DaySixteen() {
  const [part2, setPart2] = useState(false);
  const [inputString, setInputString] = useState("");
  const [output, setOutput] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputString(e.target.value);
  };

  const doTheThing = () => {
    const inputArray = inputString.split(/\r?\n/).filter((line) => line);
    let beams: number[][] = [[0, 0, 0, 0]];
    let energized: number[][] = [];
    let counter = 0;
    while (beams.length) {
      if (counter === 100) {
        console.error("infinite loop");
        break;
      }
      beams.forEach((beam, beamIndex) => {
        console.log(beam);
        if (
          !energized.some(
            (checkBeam) =>
              checkBeam.toString() === [beam[0], beam[1]].toString()
          )
        ) {
          energized.push([beam[0], beam[1]]);
        }
        if (
          beam[0] > -1 &&
          beam[0] < inputArray[0].length &&
          beam[1] > -1 &&
          beam[1] < inputArray.length
        ) {
          const char = inputArray[beam[0]][beam[1]];
          const getDirection = () => {
            if (beam[3] > beam[1]) {
              return "up";
            }
            if (beam[3] < beam[1]) {
              return "down";
            }
            if (beam[2] > beam[0]) {
              return "left";
            } else {
              return "right";
            }
          };
          const direction = getDirection();
          console.log(direction);
          const changes = {
            up: [beam[0], beam[1] - 1, beam[0], beam[1]],
            down: [beam[0], beam[1] + 1, beam[0], beam[1]],
            right: [beam[0] + 1, beam[1], beam[0], beam[1]],
            left: [beam[0] - 1, beam[1], beam[0], beam[1]],
          };
          if (char === ".") {
            beams[beamIndex] = [...changes[direction]];
            console.log("continuing " + direction);
          } else if (char === "/") {
            if (direction === "up") {
              beams[beamIndex] = [...changes.right];
            } else if (direction === "down") {
              beams[beamIndex] = [...changes.left];
            } else if (direction === "right") {
              beams[beamIndex] = [...changes.up];
            } else {
              beams[beamIndex] = [...changes.down];
            }
          } else if (char === "\\") {
            if (direction === "up") {
              beams[beamIndex] = [...changes.left];
            } else if (direction === "down") {
              beams[beamIndex] = [...changes.right];
            } else if (direction === "right") {
              beams[beamIndex] = [...changes.down];
            } else {
              beams[beamIndex] = [...changes.up];
            }
          } else if (char === "|") {
            if (direction === "up" || direction === "down") {
              beams[beamIndex] = changes[direction];
            } else {
              beams[beamIndex] = [...changes.down];
              beams.push([...changes.up]);
            }
          } else if (char === "-") {
            if (direction === "left" || direction === "right") {
              beams[beamIndex] = [...changes[direction]];
            } else {
              beams[beamIndex] = [...changes.right];
              beams.push([...changes.left]);
            }
          }
        } else {
          beams.splice(beamIndex, 1);
        }
      });
      counter++;
    }
    setOutput(energized.length);
  };
  return (
    <InputComp
      part2={part2}
      setPart2={setPart2}
      inputString={inputString}
      output={output}
      part1Func={doTheThing}
      part2Func={doTheThing}
      handleChange={handleChange}
      dayNumber={16}
    />
  );
}

export default DaySixteen;
