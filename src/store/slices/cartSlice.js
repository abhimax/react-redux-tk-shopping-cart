import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProductIDs: [],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log(
        "cartProductIDs: ",
        state.cartProductIDs,
        "action.payload: ",
        action.payload
      );
      state.cartProductIDs = [action.payload, ...state.cartProductIDs];
    },
    removeFromCart: (state, action) => {
      console.log(
        "cartProductIDs: ",
        state.cartProductIDs,
        "action.payload: ",
        action.payload
      );
      const indexOfId = state.cartProductIDs.indexOf(action.payload);
      state.cartProductIDs.splice(indexOfId, 1);
    },
    clearAllItems: (state) => {
      state.cartProductIDs = [];
    },
  },
});
const { actions: cartActions } = cartSlice;
export { cartActions, cartSlice as default };
