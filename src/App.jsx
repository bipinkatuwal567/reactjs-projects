import "./App.css";
import React, { useState } from 'react'
import Accordion from './components/accordion/Index'
import RandomColorGenerator from "./components/RandomColorGenerator/Index";

export default function App() {
  return (
    <div className='app'>
      {/* <Accordion /> */}
      <RandomColorGenerator />
    </div>
  )
}
