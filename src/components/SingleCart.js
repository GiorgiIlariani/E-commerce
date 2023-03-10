

// import React from "react";
// import { useGlobalContext } from "../pages/context";
// import { FaShoppingCart } from "react-icons/fa";
// import { Link } from "react-router-dom";

// export default function SingleCart({ id, img, title, price, inCart }) {
//   const { openModal, about, getCarts } = useGlobalContext();
//   return (
//     <article className="each-article">
//       <div className="img-container">
//         <Link to={`/about`}>
//           <img src={img} alt={title} onClick={() => about(id)} />
//         </Link>
//         <button className="cart-btn">
//           {inCart ? (
//             "IN CART"
//           ) : (
//             <FaShoppingCart
//               onClick={() => {
//                 openModal(id);
//                 getCarts(id);
//               }}
//             />
//           )}
//         </button>
//       </div>

//       <div className="info">
//         <h4>{title}</h4>
//         <span className="price">${price}</span>
//       </div>
//     </article>
//   );
// }
