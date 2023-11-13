import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProductID: [],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log(
        "cartProductID: ",
        state.cartProductID,
        "action.payload: ",
        action.payload
      );
      state.cartProductID = [action.payload, ...state.cartProductID];
    },
    removeFromCart: (state, action) => {
      console.log(
        "cartProductID: ",
        state.cartProductID,
        "action.payload: ",
        action.payload
      );
      state.cartProductID.splice(indexOfId, 1);
    },
    clearAllItems: (state) => {
      state.cartProductID = [];
    },
  },
});
const { actions: cartActions } = cartSlice;
export { cartActions, cartSlice as default };
