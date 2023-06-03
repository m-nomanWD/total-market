import React, { useState } from "react";
import Slider from "./Slider";
import Categories from "./home-compunets/Categories";
import "./home.css";
import SmartDeals from "./home-compunets/SmartDeals";
import ProductTab from "./home-compunets/ProductTab";
import ModalProduct from "../modals/ModalProduct";
import { useGlobalContext } from "../../context";

function Home() {
  const { state, isAlertShow, setIsAlertShow } = useGlobalContext();
  return (
    <>
      {isAlertShow && (
        <article className={`alert ${state.alertClass}`}>
          <p>{state.alertMsg}</p>
        </article>
      )}
      <ModalProduct />
      <Slider />
      <Categories />
      <SmartDeals />
      <ProductTab />
    </>
  );
}

export default Home;
