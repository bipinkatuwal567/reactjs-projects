import React, { useState } from "react";
import "./style.css";

export default function RandomColorGenerator() {
  const [resultColor, setResultColor] = useState("");
  const [isHexColor, setIsHexColor] = useState("hex");

  function randomColorUtiliy(length) {
    return Math.floor(Math.random() * length);
  }

  function randomHexColorGenerator() {
    let characters = "abcdef0123456789";
    let charLength = characters.length;

    let result = "#";

    for (let i = 0; i < 6; i++) {
      result += characters.charAt(randomColorUtiliy(charLength));
    }
    setResultColor(result);
  }

  function randomRgbColorGenerator() {
    let result = "";

    const r = randomColorUtiliy(255);
    const g = randomColorUtiliy(255);
    const b = randomColorUtiliy(255);

    result = `rgb(${r}, ${g}, ${b})`;
    setResultColor(result);
  }

  function hexColorHandle() {
    setIsHexColor("hex");
    randomHexColorGenerator();
  }

  function rgbColorHandle() {
    setIsHexColor("rgb");
    randomRgbColorGenerator();
  }

  console.log(isHexColor);

  return (
    <div className="randomColor">
      <div
        className="box"
        style={{ backgroundColor: `${resultColor ? resultColor : ""}` }}
      ></div>
      <p>{resultColor ? resultColor : `#e6a970`}</p>

      <button
        onClick={() =>
          isHexColor === "hex" ? randomHexColorGenerator() : randomRgbColorGenerator()
        }
      >
        Generate Random Color
      </button>
      <div className="buttons">
        <button onClick={hexColorHandle}>Create HEX Color</button>
        <button onClick={rgbColorHandle}>Create RGB Color</button>
      </div>
    </div>
  );
}
