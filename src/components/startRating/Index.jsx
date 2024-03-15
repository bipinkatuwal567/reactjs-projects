import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Style.css";

export default function StarRating({ noOfStar = 10 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(id) {
    setRating(id);
  }

  function starIncreament(id) {
    setHover(id);
  }

  function starDecreament() {
    setHover(rating)
  }

  return (
    <div className="starRating">
      <p>How was your experience?</p>
      <div className="stars">
        {[...Array(noOfStar)].map((_, index) => {
          index += 1;

          return (
            <FaStar
              size={34}
              key={index}
              className={`star ${index <= (hover || rating) ? "active" : "inactive"}`}
              onMouseEnter={() => starIncreament(index)}
              onMouseLeave={starDecreament}
              onClick={() => handleClick(index)}
            />
          );
        })}
      </div>
    </div>
  );
}
