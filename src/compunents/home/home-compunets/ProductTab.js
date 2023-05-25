import React, { useState } from "react";
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
              <li key={index} onClick={() => handleFilterList(item)}>
                {item}
              </li>
            );
          })}
        </ul>
      </article>
      <div className="cards-center">
        <HiChevronRight className="right" />
        <HiChevronLeft className="left" />
        <article className="tab-cards">
          {state.filterList.map((item) => {
            const { id, name, category, colors, image, price, company } = item;
            return (
              <article key={id} className="card">
                <div className="card-header">
                  <Link to={""} className="card-img">
                    <img src={image} alt="" />
                  </Link>
                  <HiOutlineHeart
                    className="heart-icon"
                    onClick={() => handleWishlist(id)}
                  />
                  <div className={"card-btn"}>
                    <Gi3DGlasses
                      className="card-icon"
                      onClick={() => handleQuickLook(id)}
                    />
                    <span className="line"></span>
                    <HiOutlineShoppingCart
                      className="card-icon"
                      onClick={() => handleCart(id)}
                    />
                  </div>
                </div>
                <div className="card-info">
                  <p>{category}</p>
                  <h4>
                    {company} - {name}
                  </h4>
                  <p>
                    <span className="discount">
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
                        <div key={color} style={style} className="color">
                          {""}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </article>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default ProductTab;
