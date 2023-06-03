import React, { useEffect } from "react";
import { useGlobalContext } from "../../context";
import "./cart.css";
import { AiOutlineClose } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
function Cart() {
  const { state, dispatch, isAlertShow, setIsAlertShow } = useGlobalContext();
  useEffect(() => {
    const timer = setInterval(() => {
      setIsAlertShow(false);
    }, 1000);
    return clearInterval(timer);
  });

  if (state.cart.length === 0) {
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
            <CiShoppingCart className="icon" />
          </div>
          <p>your card is empty</p>
          <Link to="/">
            <button className="btn btn-empty">Go to Shop!</button>
          </Link>{" "}
        </section>
      </>
    );
  }
  if (state.cart.length > 0) {
    return (
      <>
        <article
          className={isAlertShow ? `alert ${state.alertClass}` : "alert"}
        >
          <p>{state.alertMsg}</p>
        </article>

        <header className="cart-header">
          <div className="header-center">
            <h1>shopping cart</h1>
            <p>Shop</p>
          </div>
        </header>
        <section className="cart-section">
          <article className="cart-container">
            <div className="cart-table-head">
              <li className="product-cell">product</li>
              <li>price</li>
              <li>quantity</li>
              <li>total</li>
            </div>
            {state.cart.map((item) => {
              return (
                <article className="cart-item">
                  <div className="product-container">
                    <div className="cart-img">
                      <img src={item.image} alt="" />
                    </div>
                    <h4>
                      {item.company} - {item.name}
                    </h4>
                  </div>
                  <div className="price">{item.price}</div>
                  <div className="quantity">
                    <div className="counter">
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch({ type: "DECREASE", payload: item.id });
                          setIsAlertShow(true);
                        }}
                      >
                        -
                      </span>
                      <span>{item.counter}</span>

                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch({ type: "INCREASE", payload: item.id });
                          setIsAlertShow(true);
                        }}
                      >
                        +
                      </span>
                    </div>
                  </div>
                  <p className="total">{item.totalAmount}</p>
                  <AiOutlineClose
                    className="remove-item"
                    onClick={() => {
                      dispatch({ type: "REMOVE_ITEM", payload: item.id });
                      setIsAlertShow(true);
                    }}
                  />
                </article>
              );
            })}
          </article>
          <TotalBill />
        </section>
      </>
    );
  }
}
const TotalBill = () => {
  const { state } = useGlobalContext();
  return <div>total bill {state.total}</div>;
};
const Alert = () => {};
export default Cart;
