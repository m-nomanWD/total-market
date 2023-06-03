import React from "react";
import { useGlobalContext } from "../../context";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
function WishList() {
  const { state } = useGlobalContext();
  const wishlist = state.wishlistItems;
  if (wishlist.length === 0) {
    return (
      <>
        <header className="cart-header">
          <div className="header-center">
            <h1>shopping cart</h1>
            <p>Shop</p>
          </div>
        </header>
        <section className="empty-cart-container">
          <div className="shopping-icon">
            <CiHeart className="icon" />
          </div>
          <p>your card is empty</p>
          <Link to="/">
            <button className="btn btn-empty">Go to Shop!</button>
          </Link>{" "}
        </section>
      </>
    );
  } else {
    return (
      <>
        {wishlist.map((item) => {
          return <h1>{item.name}</h1>;
        })}
      </>
    );
  }
}

export default WishList;
