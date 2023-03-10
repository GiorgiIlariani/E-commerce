// import React from "react";
// import { useGlobalContext } from "./context";
// import SingleCart from "../components/SingleCart";
// import Modal from "../components/Modal";

// export default function Home() {
//   const { isModalOpen, cart } = useGlobalContext();
//   return (
//     <main>
//       {isModalOpen && <Modal />}
//       <h1 className="main-title">
//         Our <span>Products</span>
//       </h1>
//       <section className="section-center">
//         {cart.map((item) => {
//           return <SingleCart {...item} key={item.id}  />;
//         })}
//       </section>
//     </main>
//   );
// }
