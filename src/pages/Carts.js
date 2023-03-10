// import React, { useEffect } from "react";
// import { useGlobalContext } from "./context";
// import { FaTrash } from "react-icons/fa";

// export default function Carts() {
//   const {
//     closeModal,
//     cartsContent,
//     removeCart,
//     clearAll,
//     increase,
//     decrease,
//     total,
//   } = useGlobalContext();

//   useEffect(() => {
//     closeModal();
//   }, []);

//   let storageContent = JSON.parse(localStorage.getItem("eachCart"));

//   if (storageContent.length > 0) {
//     return (
//       <>
//         <h1 className="main-title">
//           Your <span>Cart</span>
//         </h1>
//         {storageContent.map((item) => {
//           const { img, title, price, id, amount, eachTotal } = item;
//           return (
//             <div className="carts-container" key={id}>
//               <div className="products">
//                 <h6>products</h6>
//                 <img src={img} alt={title} />
//               </div>
//               <div className="name-of-products">
//                 <h6>name of product</h6>
//                 <h4>{title}</h4>
//               </div>
//               <div className="price-container">
//                 <h6>price</h6>
//                 <span className="price">${price}</span>
//               </div>
//               <div className="quantity">
//                 <h6>quantity</h6>
//                 <button
//                   onClick={() => {
//                     decrease(id);
//                   }}>
//                   -
//                 </button>
//                 <button>{amount}</button>
//                 <button onClick={() => increase(id)}>+</button>
//               </div>
//               <div className="remove">
//                 <h6>remove</h6>
//                 <FaTrash
//                   className="trash-icon"
//                   onClick={() => removeCart(id)}
//                 />
//               </div>
//               <div className="item-total">
//                 <h6>total</h6>
//                 <h4>item total : ${eachTotal}</h4>
//               </div>
//             </div>
//           );
//         })}
//         <div className="right-side-info">
//           <button className="clear-carts" onClick={clearAll}>
//             clear cart
//           </button>
//           <div className="tax-info">
//             <span>total : ${total}</span>
//             <span>tax : ${total / 100}</span>
//             <span>full tax : ${total + total / 100}</span>
//           </div>
//           <button className="paypal">
//             <p>
//               <span className="pay">Pay</span>
//               <span className="pal">Pal </span>
//               checkout
//             </p>
//           </button>
//         </div>
//       </>
//     );
//   } else {
//     return <h1 className="main-title">Your Cart Is Currently Empty</h1>;
//   }
// }
