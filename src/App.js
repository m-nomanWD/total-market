import React from "react";
import "./App.css";
import Navbar from "./compunents/navbar/Nabaar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Registation from "./pages/Registation";
import ShopList from "./pages/ShopList";
import Error from "./pages/Error";
import Loading from "./compunents/Loading/Loading";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { useGlobalContext } from "./context";

function App() {
  const { isLoading } = useGlobalContext();
  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" Component={Home} />

            <Route path="/pages/AboutUs" Component={AboutUs} />
            <Route path="/pages/ShopList" Component={ShopList} />

            <Route path="/pages/Registation" Component={Registation} />
            <Route path="/pages/Cart" Component={Cart} />
            <Route path="/pages/Wishlist" Component={Wishlist} />
            <Route path="*" Component={Error} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
