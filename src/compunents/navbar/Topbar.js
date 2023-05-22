import React, { useRef, useState, useEffect } from "react";
import "./navbar.css";
import { HiOutlinePhone, HiChevronDown } from "react-icons/hi";

import { Link } from "react-router-dom";
function Topbar() {
  const language = useRef(null);
  const currency = useRef(null);
  const [valueCrr, setValueCrr] = useState("usd");
  const [valuelaug, setValuelaug] = useState("english");
  const handleDropDown = (active) => {
    // const height = active.current.getBoundingClientRect();
    active.current.style.height = "71px";
  };
  const handleDropDownClose = (active) => {
    active.current.style.height = "0px";
  };
  return (
    <article className="topbar">
      <div className="wrapper">
        <div className="topbar-left">
          <p>
            <HiOutlinePhone /> Call: +0123 456 789
          </p>
        </div>
        <div className="topbar-right">
          <div
            className="list-container"
            onMouseEnter={() => handleDropDown(currency)}
            onMouseLeave={() => handleDropDownClose(currency)}
          >
            <span>
              {valueCrr.toUpperCase()} <HiChevronDown />
            </span>
            <ul className="drop-down" ref={currency}>
              <li
                onClick={(e) => {
                  setValueCrr(e.currentTarget.textContent);
                }}
              >
                Usd
              </li>
              <li
                onClick={(e) => {
                  setValueCrr(e.currentTarget.textContent);
                }}
              >
                Eur
              </li>
            </ul>
          </div>
          <div
            className="list-container"
            onMouseEnter={() => handleDropDown(language)}
            onMouseLeave={() => handleDropDownClose(language)}
          >
            <span>
              {valuelaug.toUpperCase()}
              <HiChevronDown />
            </span>
            <ul className="drop-down" ref={language}>
              <li
                onClick={(e) => {
                  setValuelaug(e.currentTarget.textContent);
                }}
              >
                French
              </li>
              <li
                onClick={(e) => {
                  setValuelaug(e.currentTarget.textContent);
                }}
              >
                English
              </li>
            </ul>
          </div>
          <Link className="link" to="../../../pages/Registation">
            Login/SignUp
          </Link>
        </div>
      </div>
    </article>
  );
}

export default Topbar;
