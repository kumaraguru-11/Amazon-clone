import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productloading: false,
  product: {},
  multipleProduct:[],
  producterror: "",
};

export const fetchSingleProducts = createAsyncThunk(
  "singleProducts / fetchSingleProducts",
  async (id) => {
    return await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.data);
  }
);

const singleProductSlice = createSlice({
  name: "singleProducts",
  initialState,
  reducers:{
    removeItem:(state,action)=>{
 state.multipleProduct = state.multipleProduct.filter(
   (item) => item.id !== action.payload
 );    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProducts.pending, (state) => {
      state.productloading = true;
    });
    builder.addCase(fetchSingleProducts.fulfilled, (state, action) => {
      state.productloading = false;
      state.product = action.payload;

       const existingProductIndex = state.multipleProduct.findIndex(
         (product) => product.id === action.payload.id
       );
       if (existingProductIndex !== -1) {
         // Update existing product if it already exists
         state.multipleProduct[existingProductIndex] = action.payload;
       } else {
         // Otherwise, push the new product
         state.multipleProduct.push(action.payload);
       }

      state.producterror = "";
    });
    builder.addCase(fetchSingleProducts.rejected, (state, action) => {
      state.productloading = false;
      state.product = {};
      state.multipleProduct=[];
      state.producterror = action.error.message;
    });
  },
});

export default singleProductSlice.reducer;
export const {removeItem} = singleProductSlice.actions;
