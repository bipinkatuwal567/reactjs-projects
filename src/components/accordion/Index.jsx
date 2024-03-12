import React, { useState } from "react";
import "./styles.css";
import data from "./data";

export default function Index() {
  const [isShow, setIsShow] = useState(null);
  const [isEnableMultiSelection, setIsEnableMultiSelecttion] = useState(false);
  const [multi, setMulti] = useState([]);

  function handleClick(){
    setIsEnableMultiSelecttion(isEnableMultiSelection => !isEnableMultiSelection)
    setIsShow(null);
    setMulti([]);
  }

  return (
    <div className="main">
      <button className="btn" style={{
        backgroundColor: isEnableMultiSelection ? "red" : null
      }} onClick={handleClick}>
        {isEnableMultiSelection ? "Disable Multi Selection" : "Enable Multi Selection"}
      </button>
      {data.map((el) => (
        <Accordion
          heading={el.question}
          content={el.answer}
          key={el.id}
          isShow={isShow}
          setIsShow={setIsShow}
          id={el.id}
          isEnableMultiSelection={isEnableMultiSelection}
          multi={multi}
          setMulti={setMulti}
        />
      ))}
    </div>
  );
}

function Accordion({ heading, content, isShow, setIsShow, id, multi, setMulti, isEnableMultiSelection }) {
  function handleSingle(){
    setIsShow(id === isShow ? null : id)
  }

  function handleMulti(){
    let tempArr = [...multi];
    const findIndexOfCurrentId = tempArr.indexOf(id);

    if(findIndexOfCurrentId === -1) tempArr.push(id)
    else tempArr.splice(findIndexOfCurrentId, 1)
    setMulti(tempArr);
  }

  console.log(multi)

  return (
    <div className="accordion" onClick={isEnableMultiSelection ? handleMulti : handleSingle}>
      <div>
        <h2>{heading}</h2>
        {isShow === id || multi.indexOf(id) !== -1 ? <p>{content}</p> : null}
      </div>
      <button className="btn">+</button>
    </div>
  );
}
