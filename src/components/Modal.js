// import React from "react";
// import { useGlobalContext } from "../pages/context";
// import { Link } from "react-router-dom";

// export default function Modal() {
//   const { closeModal, modalContent, getModifyCart } = useGlobalContext();

//   const checkWhereClicked = (e) => {
//     if (!e.target.classList.contains("modal-container")) {
//       closeModal();
//     }
//   };

//   const { img, title, price, id } = modalContent;
//   return (
//     <div className="modal-overlay" onClick={checkWhereClicked}>
//       <div className="modal-container" onClick={(e) => e.stopPropagation()}>
//         <h3>Item Added To Cart</h3>
//         <img src={img} alt={title} />
//         <div className="info">
//           <h4>{title}</h4>
//           <span className="price">Price - ${price}</span>
//         </div>
//         <div className="btn-container">
//           <button className="btn btn-continue" onClick={() => closeModal()}>
//             Continue Shopping
//           </button>
//           <Link to="/carts">
//             <button className="btn btn-cart">Go To Cart</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
