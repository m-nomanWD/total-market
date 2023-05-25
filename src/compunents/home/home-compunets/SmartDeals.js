import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { smartDeals } from "../../../data";
import "./app.css";
function SmartDeals() {
  return (
    <section>
      <div className="smart-deal-container">
        {smartDeals.map((item) => {
          const { img, dealType, discount, id, name } = item;
          return (
            <article key={id} className={`smart-deal deal-${id}`}>
              <div className="deal-info">
                <p>{dealType}</p>
                <div className="name-deal">
                  <h3>{name}</h3>
                  <p>{discount}</p>
                </div>
                <button className="btn-deal">
                  shop now <HiArrowRight className="icon" />
                </button>
              </div>
              <div className="deal-img">
                <img src={img} alt="" />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default SmartDeals;
