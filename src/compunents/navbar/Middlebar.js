import React from "react";
import { CiShuffle, CiShoppingCart, CiHeart, CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
import logo from "../../2.png";
function Middlebar() {
  const { state } = useGlobalContext();

  return (
    <article className="middle">
      <div className="logo">
        <span>
          <RxHamburgerMenu />
        </span>
        <img src={logo} alt="total market" />
      </div>
      <div className="search-bar">
        <span>
          <CiSearch />
        </span>
        <input type="text" placeholder="Search Products" />
      </div>
      <div className="icons-container">
        <ul>
          <li>
            <CiShuffle />
          </li>
          <Link to="../../../pages/Wishlist">
            {" "}
            <li className="wish-list">
              <span className="counter-badge">{state.wishlistCounter}</span>
              <CiHeart />
            </li>
          </Link>
          <Link to="../../../pages/Cart">
            {" "}
            <li className="cart">
              <span className="counter-badge">{state.cartCounter}</span>
              <CiShoppingCart />
            </li>
          </Link>
        </ul>
      </div>
    </article>
  );
}

export default Middlebar;
