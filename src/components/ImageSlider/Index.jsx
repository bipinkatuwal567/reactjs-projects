import React, { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import "./style.css";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const imageLength = images.length;

  async function getImages(url) {
    try {
      setIsLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) setImages(data);
    } catch (err) {
      setIsError(err.message);
    }
    setIsLoading(false);
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? imageLength - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === imageLength - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    getImages(url);
  }, [url]);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>{isError}</div>;

  return (
    <div className="slider">
        <h3>Image Slider</h3>
      <div className="container">
        <HiChevronLeft className="arrow arrow-left" onClick={handlePrevious} />
        {images && images.length
          ? images.map((image, index) => {
              return (
                <img
                  src={image.download_url}
                  alt={image.download_url}
                  key={image.id}
                  className={`current-image ${
                    currentSlide !== index ? "hide-current-image" : ""
                  }`}
                />
              );
            })
          : null}
        <HiChevronRight className="arrow arrow-right" onClick={handleNext} />
        <span className="circle-indicators">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  key={index}
                  className={`current-indicator ${
                    currentSlide !== index ? "inactive-indicator" : ""
                  }`}
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))
            : null}
        </span>
      </div>
    </div>
  );
}
