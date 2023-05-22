import React from "react";
import { CiShuffle, CiShoppingCart, CiHeart, CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

import logo from "../../2.png";
function Middlebar() {
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
          <li className="wish-list">
            <span className="counter-badge">2</span>
            <CiHeart />
          </li>
          <li className="cart">
            <span className="counter-badge">1</span>
            <CiShoppingCart />
          </li>
        </ul>
      </div>
    </article>
  );
}

export default Middlebar;
