import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productloading: false,
  products: [],
  producterror: "",
};

export const fetchProducts = createAsyncThunk(
  "products / fetchProducts",
 async () => {
    return await axios
      .get("https://fakestoreapi.com/products")
      .then((response) => response.data);
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers:{
    restocked:(state,action)=>{
      state.products=action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.productloading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.productloading = false;
      state.products = action.payload;
      state.producterror = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.productloading = false;
      state.products = [];
      state.producterror = action.error.message;
    });
  },
});

export default productSlice.reducer;
export const { restocked } = productSlice.actions;

