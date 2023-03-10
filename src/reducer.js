// const reducer = (state, action) => {
//   if (action.type === "SHOW_CARTS") {
//     return { ...state, cart: action.payload };
//   }

//   if (action.type === "OPEN_MODAL") {
//     return {
//       ...state,
//       isModalOpen: true,
//       modalContent: state.cart.find((item) => item.id === action.payload),
//     };
//   }
//   if (action.type === "CLOSE_MODAL") {
//     return { ...state, isModalOpen: false };
//   }
//   if (action.type === "ABOUT") {
//     return {
//       ...state,
//       aboutContent: state.cart.find((item) => item.id === action.payload),
//     };
//   }

//   if (action.type === "GET_CARTS") {
//     let storage = JSON.parse(localStorage.getItem("eachCart"));
//     let newCart = state.cart.find((item) => item.id === action.payload);

//     newCart.inCart = true;
//     newCart.amount = 1;
//     newCart.eachTotal = newCart.price;
//     storage.push(newCart);
//     return {
//       ...state,
//       cartsContent: storage,
//     };
//   }

//   if (action.type === "REMOVE_CART") {
//     action.payload.map((item) => {
//       if (item.id === action.id) {
//         item.inCart = false;
//       }
//     });
//     let removedProduct = state.cartsContent.find(
//       (item) => item.id === action.id
//     );
//     removedProduct.inCart = false;
//     return {
//       ...state,
//       cartsContent: state.cartsContent.filter((item) => item.id !== action.id),
//     };
//   }

//   if (action.type === "INCREASE") {
//     let newCart = state.cartsContent.map((item) => {
//       if (item.id === action.payload) {
//         item.amount += 1;
//         let eachTotal = item.amount * item.price;
//         return {
//           ...item,
//           eachTotal,
//         };
//       }

//       return item;
//     });
//     return { ...state, cartsContent: newCart };
//   }

//   if (action.type === "DECREASE") {
//     const removedProduct = state.cart.find(
//       (item) => item.id === action.payload
//     );

//     let newCart = state.cartsContent
//       .map((item) => {
//         if (item.id === action.payload) {
//           item.amount -= 1;
//           let eachTotal = item.amount * item.price;
//           if (item.amount === 0) {
//             removedProduct.inCart = false;
//           }
//           return { ...item, eachTotal };
//         }
//         return item;
//       })
//       .filter((item) => item.amount !== 0);
//     return { ...state, cartsContent: newCart };
//   }

//   // if (action.type === "GET_TOTALS") {
//   //   let { total, amount } = state.cartsContent.reduce(
//   //     (cartTotal, cartItem) => {
//   //       const { price, amount } = cartItem;
//   //       const itemTotal = price * amount;
//   //       cartTotal.total += itemTotal;
//   //       cartTotal.amount += amount;
//   //       return cartTotal;
//   //     },
//   //     {
//   //       total: 0,
//   //       amount: 0,
//   //     }
//   //   );

//   //   return { ...state, total, amount };
//   // }

//   // if (action.type === "IS_IN_CART") {
//   //   action.payload.map((item) => {
//   //     if (item.id === action.id) {
//   //       item.inCart = true;
//   //     }
//   //   });
//   // }

//   if (action.type === "CLEAR_ALL") {
//     action.payload.map((item) => {
//       item.inCart = false;
//     });
//     state.cartsContent.map((item) => {
//       item.inCart = false;
//     });

//     return { ...state, cartsContent: [] };
//   }

//   return state;
// };

// export default reducer;
