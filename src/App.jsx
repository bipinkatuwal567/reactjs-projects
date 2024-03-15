import "./App.css";
import React from "react";
import Accordion from "./components/accordion/Index";
import RandomColorGenerator from "./components/RandomColorGenerator/Index";
import StarRating from "./components/startRating/Index";

export default function App() {
  return (
    <div className="app">
      {/* <Accordion /> */}
      {/* <RandomColorGenerator /> */}
      <h3><span>Star</span> Rating</h3>
      <StarRating />
    </div>
  );
}
