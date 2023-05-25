import React from "react";
import { Link } from "react-router-dom";
import { categoriesList } from "../../../data";
import "./app.css";
import img from "../../../assets/images/annie-spratt-fbAnIjhrOL4-unsplash-removebg-preview.png";

function Categories() {
  return (
    <section className="categories">
      <h2 className="title">Explore Popular Categories</h2>
      <article className="list">
        {categoriesList.map((list, index) => {
          return (
            <Link
              className="single-category"
              to="../../../pages/ShopList"
              key={index}
            >
              <article className="inner">
                <img src={list.img} alt="" />

                <p>{list.category}</p>
              </article>
            </Link>
          );
        })}
      </article>
    </section>
  );
}

export default Categories;
