import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

// css module
import classes from "./Modal.module.css";

export default function Modal() {
  const { closeModal, modalContent } = useGlobalContext();

  const checkWhereClicked = (e) => {
    if (!e.target.classList.contains("modal-container")) {
      closeModal();
    }
  };

  const { img, title, price } = modalContent;
  return (
    <div className={classes["modal-overlay"]} onClick={checkWhereClicked}>
      <div
        className={classes["modal-container"]}
        onClick={(e) => e.stopPropagation()}>
        <h3>Item Added To Cart</h3>
        <img src={img} alt={title} />
        <div className={classes.info}>
          <h4>{title}</h4>
          <span className={classes.price}>Price - ${price}</span>
        </div>
        <div className={classes["btn-container"]}>
          <button className="btn btn-continue" onClick={() => closeModal()}>
            Continue Shopping
          </button>
          <Link to="/carts">
            <button className="btn btn-cart">Go To Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
