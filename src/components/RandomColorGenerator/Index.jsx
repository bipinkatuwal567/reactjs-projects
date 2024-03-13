import React, { useState } from "react";
import "./style.css";

export default function RandomColorGenerator() {
  const [resultColor, setResultColor] = useState("");
  const [isHexColor, setIsHexColor] = useState(true);

  function randomHexColorGenerator() {
    let characters = "abcdef0123456789";

    let result = "#";

    for (let i = 0; i < 6; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setResultColor(result);
    setIsHexColor(true);
  }

  function randomRgbColorGenerator() {
    let result = "";

    const r = Math.floor(Math.random() * 255 + 1);
    const g = Math.floor(Math.random() * 255 + 1);
    const b = Math.floor(Math.random() * 255 + 1);

    result = `rgb(${r}, ${g}, ${b})`;
    setResultColor(result);
    setIsHexColor(false);
  }

  function hexColorHandle(){
    setIsHexColor(true)
    randomHexColorGenerator();
  }

  function rgbColorHandle(){
    setIsHexColor(false)
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

      <button onClick={() => isHexColor ? randomHexColorGenerator() : randomRgbColorGenerator()}>
        Generate Random Color
      </button>
      <div className="buttons">
        <button onClick={hexColorHandle}>Create HEX Color</button>
        <button onClick={rgbColorHandle}>Create RGB Color</button>
      </div>
    </div>
  );
}
