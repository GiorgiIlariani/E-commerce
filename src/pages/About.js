// import React from "react";
// import { useGlobalContext } from "./context";
// import { Link } from "react-router-dom";

// export default function About() {
//   const { aboutContent } = useGlobalContext();

//   const { title, img, company, info, price } = aboutContent;

//   return (
//     <>
//       <h2 className="about-title">{title}</h2>
//       <div className="about">
//         <div className="left-side">
//           <img src={img} alt={title} />
//         </div>
//         <div className="right-side">
//           <h3 className="model-name">Model: {title}</h3>
//           <span className="made-by">made By : {company}</span>
//           <h5 className="price">Price: ${price}</h5>
//           <label>Some Info About Product : </label>
//           <p>{info}</p>
//           <div className="about-btn-container">
//             <Link to="/">
//               <button className="btn btn-continue">Continue Shopping</button>
//             </Link>
//             <Link to="/carts">
//               <button className="btn btn-cart">Go To Cart</button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
