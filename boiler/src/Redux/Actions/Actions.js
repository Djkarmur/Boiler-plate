import API from "../../Axios/api";

//////   fetch product data
export const add = (data) => {
  return {
    type: "ADD",
    payload: data,
  };
};
///// thunk middleware
// export const fetchProduct = () => {
//   return async (dispatch, getstate) => {
//     try {
//         dispatch(loader(true))
//       const { data } = await API.get("/");
//       dispatch(add(data.products));
//       dispatch(loader(false))
//     } catch (error) {
//       console.log("error occured in data fetching :", error);
//     }
//   };
// };

/////// add to cart actions
export const addToCart = (payload) => {
  return {
    type: "ADD_TO_CART",
    payload: payload,
  };
};





///// remove from cart
export const removeFromCart = (payload) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: payload,
  };
};

///  checkout all orders

export const checkout = () => {
  return {
    type: "CHECKOUT",
  };
};
////   loader for global app

export const loader = (payload) => {
  return { type: "LOADER", payload: payload };
};
