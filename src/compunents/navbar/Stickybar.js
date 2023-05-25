import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HiChevronDown, HiOutlineLightBulb } from "react-icons/hi";
import { useGlobalContext } from "../../context";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import "./navbar.css";

function Stickybar() {
  const [isShowList, setIsShowList] = useState(true);
  const container = useRef(null);
  const { categories } = useGlobalContext();

  return (
    <article className="sticky-bar">
      <div
        className="category-container"
        onMouseEnter={() => {
          container.current.style.height = "auto";
          setIsShowList(false);
        }}
        onMouseLeave={() => {
          container.current.style.height = "0";
          setIsShowList(true);
        }}
      >
        <div className="category-header">
          <div className="toggle-container">
            <span className="toggle-browse">
              {isShowList ? (
                <RxHamburgerMenu className="blue-icon hamberger " />
              ) : (
                <AiOutlineClose className="blue-icon  close" />
              )}
            </span>

            <h4>Browse Categories</h4>
          </div>

          <span>
            <HiChevronDown className="blue-icon chevron " />
          </span>
        </div>

        <ul className="category-list" ref={container}>
          {categories.map((category, index) => {
            return <li key={index}>{category.toUpperCase()}</li>;
          })}
        </ul>
      </div>
      <ul className="pages">
        <Link to="/" className="link active">
          Home <HiChevronDown />
        </Link>

        <Link className="link" to="../../../pages/ShopList">
          ShopList <HiChevronDown />
        </Link>

        <Link className="link " to="../../../pages/Registation">
          Registration <HiChevronDown />
        </Link>

        <Link className="link" to="../../../pages/AboutUs">
          About <HiChevronDown />
        </Link>
      </ul>
      <p className="bar">|</p>
      <p>
        <HiOutlineLightBulb style={{ marginRight: "12px" }} /> Clearance Up to
        30% Off
      </p>
    </article>
  );
}

export default Stickybar;
