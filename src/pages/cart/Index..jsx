import React, { useEffect } from "react";
import { useGlobalContext } from "../../components/context";
import { FaTrash } from "react-icons/fa";

// css module
import classes from "./styles.module.css";

export default function Carts() {
  const {
    closeModal,
    clearAll,
    total,
    cartsContent,
    removeCart,
    increase,
    decrease,
  } = useGlobalContext();

  useEffect(() => {
    closeModal();
  }, []);

  if (cartsContent.length > 0) {
    return (
      <>
        <h1 className="main-title">
          Your <span>Cart</span>
        </h1>
        {cartsContent.map((item) => {
          const { img, title, price, id, amount, eachTotal } = item;
          return (
            <div className={classes["carts-container"]} key={id}>
              <div className={classes.products}>
                <h6>products</h6>
                <img src={img} alt={title} />
              </div>
              <div className={classes["name-of-products"]}>
                <h6>name of product</h6>
                <h4>{title}</h4>
              </div>
              <div className={classes["price-container"]}>
                <h6>price</h6>
                <span className={classes.price}>${price}</span>
              </div>
              <div className={classes.quantity}>
                <h6>quantity</h6>
                <button onClick={() => decrease(id)}>-</button>
                <button>{amount}</button>
                <button onClick={() => increase(id)}>+</button>
              </div>
              <div className={classes.remove}>
                <h6>remove</h6>
                <FaTrash
                  className={classes["trash-icon"]}
                  onClick={() => removeCart(id)}
                />
              </div>
              <div className={classes["item-total"]}>
                <h6>total</h6>
                <h4>item total : ${eachTotal}</h4>
              </div>
            </div>
          );
        })}
        <div className={classes["right-side-info"]}>
          <button className={classes["clear-carts"]} onClick={clearAll}>
            clear cart
          </button>
          <div className={classes["tax-info"]}>
            <span>total : ${total}</span>
            <span>tax : ${total / 100}</span>
            <span>full tax : ${total + total / 100}</span>
          </div>
          <button className={classes.paypal}>
            <p>
              <span className={classes.pay}>Pay</span>
              <span className={classes.pal}>Pal </span>
              checkout
            </p>
          </button>
        </div>
      </>
    );
  } else {
    return <h1 className="main-title">Your Cart Is Currently Empty</h1>;
  }
}
