import React from "react";
import { smartDeals } from "../../data";
import { useGlobalContext } from "../../context";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import "./app.css";

function ModalProduct() {
  const deals = smartDeals;

  const { quickViewItem, state, dispatch } = useGlobalContext();

  const product = state.quickShowProduct;
  console.log(product);

  if (state.showModalProduct) {
    const {
      image,
      name,
      company,
      category,
      price,
      description,
      id,
      counter,
      cartState,
    } = product;
    return (
      <div className="overlay">
        <div
          className={
            state.showModalProduct
              ? "modal-quick-show scale-modal"
              : "modal-quick-show"
          }
        >
          <AiOutlineClose
            className="close"
            onClick={() => {
              dispatch({ type: "CLOSE_MODAL", payload: "" });
            }}
          />
          <div className="product-imgs-container">
            <div className="thumbnails-container">
              <span className="thumbnail t-01"></span>
              <span className="thumbnail t-02"></span>
              <span className="thumbnail t-03"></span>
              <span className="thumbnail t-04"></span>
            </div>
            <div className="big-img-container">
              <img className="big-img" src={image} alt="" />
            </div>
          </div>
          <div className="product-info">
            <h2>{name}</h2>
            <h4>{company}</h4>
            <p className="price-wraper">
              <span className="discount">${(price * 80) / 100}</span>{" "}
              <span style={{ textDecoration: "line-through" }}>${price}</span>
            </p>
            <p>{description}</p>
            <div className="quantity">
              <span>qty:</span>
              <div className="counter">
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => dispatch({ type: "DECREASE", payload: id })}
                >
                  -
                </span>
                <span>{counter}</span>

                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => dispatch({ type: "INCREASE", payload: id })}
                >
                  +
                </span>
              </div>
            </div>
            <div className="btn-container-modal">
              <button className="add-cart btn">
                <AiOutlineShoppingCart className="shopping-cart" />
                {cartState ? (
                  <span>in the cart</span>
                ) : (
                  <span
                    onClick={() => {
                      dispatch({ type: "ADD_TO_CART", payload: id });
                    }}
                  >
                    add to cart
                  </span>
                )}
              </button>
              <button
                className="add-wishlist btn"
                onClick={() => dispatch({ type: "ADD_TO_WISHLIST" })}
              >
                <AiOutlineHeart className="heart" />{" "}
                <span>add to wishlist</span>
              </button>
            </div>
            <p className="category-tag">
              <span> category :</span> <b>{category}</b>
            </p>
            <ul className="social-links">
              <span> share :</span>
              <li>
                <AiOutlineFacebook />
              </li>
              <li>
                <AiOutlineTwitter />
              </li>
              <li>
                <AiOutlineInstagram />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalProduct;
