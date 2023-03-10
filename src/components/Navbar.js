// import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
// import { FaShoppingCart } from "react-icons/fa";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [windowSize, setWindowSize] = useState(getWindowSize());

//   useEffect(() => {
//     function handleWindowResize() {
//       setWindowSize(getWindowSize());
//     }

//     window.addEventListener("resize", handleWindowResize);

//     return () => {
//       window.removeEventListener("resize", handleWindowResize);
//     };
//   }, []);

//   function getWindowSize() {
//     const { innerWidth } = window;
//     return { innerWidth };
//   }

//   return (
//     <nav className="navbar">
//       <div className="left-side">
//         {windowSize.innerWidth < 500 ? (
//           <Link to="/">
//             <img src={logo} alt="main-logo" />
//           </Link>
//         ) : (
//           <img src={logo} alt="main-logo" />
//         )}

//         <Link to="/">
//           <h2 className="navbar-title">Products</h2>
//         </Link>
//       </div>
//       <div className="right-side">
//         <Link to="/carts">
//           <button>
//             <FaShoppingCart />
//             My Cart
//           </button>
//         </Link>
//       </div>
//     </nav>
//   );
// }
