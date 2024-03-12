import React, {useState} from "react";
import "./styles.css"
import data from "./data";


export default function Index() {
  const [isShow, setIsShow] = useState(null)

  return (
    <div className="main">
      <button className="btn">Enable Multi Selection</button>
      {data.map(el => (
        <Accordion
        heading={el.question}
        content={el.answer}
        key={el.id}
        isShow={isShow}
        setIsShow={setIsShow}
        id={el.id}
      />
      ))}
    </div>
  );
}

function Accordion({ heading, content, isShow, setIsShow, id }) {
  
  return (
    <div className="accordion" onClick={() => setIsShow(id)}>
      <div><h2>{heading}</h2>
      {isShow === id && <p>{content}</p>}</div>
      <button className="btn">+</button>
    </div>
  );
}
