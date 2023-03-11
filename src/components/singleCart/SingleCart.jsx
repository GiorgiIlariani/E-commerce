import React from "react";
import { useGlobalContext } from "../context";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

import classes from "./SingleCart.module.css";

export default function SingleCart({ id, img, title, price, inCart }) {
  const { openModal, about, getCarts } = useGlobalContext();
  return (
    <article className={classes["each-article"]}>
      <div className={classes["img-container"]}>
        <Link to={`/about`}>
          <img src={img} alt={title} onClick={() => about(id)} />
        </Link>
        <button className={classes["cart-btn"]}>
          {inCart ? (
            "IN CART"
          ) : (
            <FaShoppingCart
              onClick={() => {
                openModal(id);
                getCarts(id);
              }}
            />
          )}
        </button>
      </div>

      <div className={classes.info}>
        <h4>{title}</h4>
        <span className={classes.price}>${price}</span>
      </div>
    </article>
  );
}
