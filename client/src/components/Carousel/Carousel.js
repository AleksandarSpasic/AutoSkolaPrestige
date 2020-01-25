import React, { useState } from "react";
import "./CarouselStyle.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const slideLeft = () => {
    if (0 < index) {
      setIndex(index - 1);
    } else {
      setIndex(2);
    }
  };

  const slideRight = () => {
    if (index < 2) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <div className="carousel_wrapper">
      <div className="carousel_holder">
        <div
          className={
            index === 0
              ? "carousel_item1 carousel_item active_slider"
              : "carousel_item1 carousel_item"
          }
        >
          <div>
            <h2>Auto - škola "Prestige" d.o.o. Niš</h2>
            <p>
              Prestige je najbolja škola vožnje. Sa veoma dobrim instruktorima.
            </p>
          </div>
        </div>
        <div
          className={
            index === 1
              ? "carousel_item2 carousel_item active_slider"
              : "carousel_item2 carousel_item"
          }
        >
          <div>
            <h2>Auto - škola "Prestige" d.o.o. Niš</h2>
            <p>
              Prestige je najbolja škola vožnje. Sa veoma dobrim instruktorima.
            </p>
          </div>
        </div>
        <div
          className={
            index === 2
              ? "carousel_item3 carousel_item active_slider"
              : "carousel_item3 carousel_item"
          }
        >
          <div>
            <h2>Auto - škola "Prestige" d.o.o. Niš</h2>
            <p>
              Prestige je najbolja škola vožnje. Sa veoma dobrim instruktorima.
            </p>
          </div>
        </div>
        <div className="carousel_arrows">
          <div className="carousel_arrow_left" onClick={slideLeft}>
            <FaAngleLeft />
          </div>
          <div className="carousel_arrow_right" onClick={slideRight}>
            <FaAngleRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
