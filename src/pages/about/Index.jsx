import React from "react";
import { useGlobalContext } from "../../components/context";
import { Link } from "react-router-dom";
// css module
import classes from "./styles.module.css";

export default function About() {
  const { aboutContent } = useGlobalContext();

  const { title, img, company, info, price } = aboutContent;

  return (
    <>
      <h2 className={classes["about-title"]}>{title}</h2>
      <div className={classes.about}>
        <div className={classes["left-side"]}>
          <img src={img} alt={title} />
        </div>
        <div className={classes["right-side"]}>
          <h3 className={classes["model-name"]}>Model: {title}</h3>
          <span className={classes["made-by"]}>made By : {company}</span>
          <h5 className={classes.price}>Price: ${price}</h5>
          <label>Some Info About Product : </label>
          <p>{info}</p>
          <div className={classes["about-btn-container"]}>
            <Link to="/">
              <button className="btn btn-continue">Continue Shopping</button>
            </Link>
            <Link to="/carts">
              <button className="btn btn-cart">Go To Cart</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
