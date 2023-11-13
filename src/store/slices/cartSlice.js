import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProductID: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartProductID = [action.payload, ...state.cartProductID];
    },
    removeFromCart: (state, action) => {
      const indexOfId = state.cartProductID.indexOf(action.payload);
      state.cartProductID.splice(indexOfId, 1);
    },
    clearAllItems: (state) => {
      state.cartProductID = [];
    },
  },
});
