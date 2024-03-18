import "./App.css";
import React from "react";
import Accordion from "./components/accordion/Index";
import RandomColorGenerator from "./components/RandomColorGenerator/Index";
import StarRating from "./components/startRating/Index";
import ImageSlider from "./components/ImageSlider/Index";
import LoadMoreData from "./components/loadMoreData";

export default function App() {
  return (
    <div className="app">
      {/* <Accordion /> */}
      {/* <RandomColorGenerator /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider url="https://picsum.photos/v2/list" limit="5" page="1" /> */}
      <LoadMoreData />
    </div>
  );
}
