import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("users")) || [],
  shippingInfo: undefined,
  cartQty: JSON.parse(localStorage.getItem("cart")) || [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    shippingDetail: (state, action) => {
      state.shippingInfo = action.payload;
    },
    updateCart: (state, action) => {
      state.cartQty = action.payload;
    },
  },
});

export const { addUser, shippingDetail, updateCart } = userSlice.actions;
export default userSlice.reducer;
