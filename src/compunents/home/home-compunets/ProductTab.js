import React, { useState, useRef } from "react";
import { useGlobalContext } from "../../../context";
import { Link } from "react-router-dom";
import "./app.css";
import {
  HiOutlineShoppingCart,
  HiOutlineHeart,
  HiChevronRight,
  HiChevronLeft,
} from "react-icons/hi";
import { Gi3DGlasses, GiCompanionCube } from "react-icons/gi";
function ProductTab() {
  const { categories, dispatch, data, state, setIsAlertShow } =
    useGlobalContext();
  const left = useRef(null);
  const right = useRef(null);
  const card = useRef(null);
  const [counter, setCounter] = useState(0);
  console.log(state.cart);
  const handleWishlist = (id) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: id });
    setIsAlertShow(true);
  };

  const handleCart = (id) => {
    dispatch({ type: "ADD_TO_CART", payload: id });
    setIsAlertShow(true);
  };
  const handleQuickLook = (id) => {
    dispatch({ type: "QUICK_CHECK", payload: id });
  };
  const handleFilterList = (item) => {
    dispatch({ type: "FILTER_LIST", payload: item });
  };
  const handleProductSlide = () => {
    const cards = document.querySelectorAll(".card");
    if (cards.length <= 5) {
      right.current.style.display = "none";
    } else {
      right.current.style.display = "block";
    }
  };
  React.useEffect(() => {
    const timer = setInterval(() => {
      setIsAlertShow(false);
    }, 1500);
    return () => clearInterval(timer);
  });

  return (
    <section className="tab-container">
      <article className="tab-header">
        <h2>New Arrivals</h2>
        <ul className="tab-links">
          {categories.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setCounter(0);

                  // handleProductSlide();
                  handleFilterList(item);
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </article>
      <div className="cards-center">
        {/* <span ref={right}>
          <HiChevronRight
            className="right"
            onClick={() => {
              setCounter((prev) => {
                return prev + 1;
              });

              const cards = document.querySelectorAll(".card");
              cards.forEach((card) => {
                card.style.left = `-${counter * 240}px`;
              });
            }}
          />
        </span> */}
        {/* <span ref={left}>
          {counter !== 1 && (
            <HiChevronLeft
              className="left"
              onClick={() => {
                setCounter((prev) => {
                  return prev - 1;
                });
                // console.log(counter);
                const cards = document.querySelectorAll(".card");
                cards.forEach((card) => {
                  card.style.left = `-${counter * 240}px`;
                });
              }}
            />
          )}
        </span> */}

        <article className="tab-cards">
          {state.filterList.map((item, index) => {
            const {
              id,
              cartState,
              name,
              category,
              colors,
              image,
              price,
              company,
            } = item;
            return (
              <article
                style={{
                  transform: `translateX(${index * 110}%)`,
                }}
                key={id}
                className="card"
                ref={card}
              >
                <div className="card-header">
                  <Link to={""} className="card-img">
                    <img src={image} alt="" />
                  </Link>
                  <HiOutlineHeart
                    className="heart-icon"
                    onClick={() => handleWishlist(id)}
                  />
                  <div className={"card-btn"}>
                    <span className="card-icon">
                      <Gi3DGlasses onClick={() => handleQuickLook(id)} />
                    </span>
                    <span className="line"></span>
                    <span className="card-icon">
                      {!cartState ? (
                        <HiOutlineShoppingCart onClick={() => handleCart(id)} />
                      ) : (
                        <span>in cart</span>
                      )}
                    </span>
                  </div>
                </div>
                <div className="card-info">
                  <p>{category}</p>
                  <h4>
                    {company} - {name}
                  </h4>
                  <p>
                    <span className="discount">
                      <b>$ </b>
                      {Math.floor(price * (80 / 100))}
                    </span>
                    {price}
                  </p>
                  <div className="colors-container">
                    {colors.map((color) => {
                      const style = {
                        backgroundColor: color,
                      };
                      return (
                        <div key={color} style={style} className="color"></div>
                      );
                    })}
                  </div>
                </div>
              </article>
            );
          })}
        </article>
      </div>
      <a href="#top"> hello</a>
    </section>
  );
}

export default ProductTab;
