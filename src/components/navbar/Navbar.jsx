import React, { useState, useEffect } from "react";
import logo from "../logo/logo.svg";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

// css module
import classes from "./Navbar.module.css";

export default function Navbar() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }

  return (
    <nav className={classes.navbar}>
      <div className={classes["left-side"]}>
        {windowSize.innerWidth < 500 ? (
          <Link to="/">
            <img src={logo} alt="main-logo" />
          </Link>
        ) : (
          <>
            <img src={logo} alt="main-logo" />
            <Link to="/">
              <h2 className={classes["navbar-title"]}>Products</h2>
            </Link>
          </>
        )}
      </div>
      <div className={classes["right-side"]}>
        <Link to="/carts">
          <button>
            <FaShoppingCart />
            My Cart
          </button>
        </Link>
      </div>
    </nav>
  );
}
