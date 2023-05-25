import React, { useState, useEffect } from "react";
import { sliderData } from "../../collection";
import { useGlobalContext } from "../../context";
import { HiArrowRight, HiChevronLeft, HiChevronRight } from "react-icons/hi";

function Slider() {
  const [indexItem, setIndexItem] = useState(0);
  const { data } = useGlobalContext();
  const newList = data.slice(0, 3);

  useEffect(() => {
    if (indexItem > 2) {
      console.log(indexItem);
      setIndexItem(0);
    }
    if (indexItem < 0) {
      setIndexItem(2);
    }
  }, [indexItem]);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setIndexItem(indexItem - 1);
  //   }, 3000);
  //   return () => clearInterval(timer);
  // });
  return (
    <section className="slider">
      <div className="slider-center">
        {newList.map((item, index) => {
          const { id, company, image, name, price } = item;
          let position = "next";
          if (index === indexItem) {
            position = "active";
          }
          if (index === indexItem - 1 || (index === 2 && indexItem === 0)) {
            position = "last";
          }
          return (
            <div key={id} className={`slide ${position}`}>
              <article className="img-container">
                <img src={image} alt="product img" />
              </article>
              <article className="product-info">
                <p className="tag">NEW ARRIVAl</p>
                <div className="center">
                  <h1>{name}</h1>
                  <h4>{company}</h4>
                </div>
                <div className="price-container">
                  <span>${price}</span>
                  <h1>${(price * 70) / 100}</h1>
                </div>
                <div className="btn-conteiner">
                  <button className="btn">
                    Shop Now <HiArrowRight style={{ marginLeft: ".75rem" }} />
                  </button>
                </div>
              </article>
            </div>
          );
        })}
        <span
          className="right slider-Control"
          onClick={() => {
            setIndexItem(indexItem + 1);
          }}
        >
          <HiChevronRight />
        </span>

        <span
          className="left slider-Control"
          onClick={() => setIndexItem(indexItem - 1)}
        >
          <HiChevronLeft />
        </span>
      </div>
    </section>
  );
}

export default Slider;
