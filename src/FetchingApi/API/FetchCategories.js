import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categoriesloading: false,
  categoriesItem: [],
  categorieserror: "",
};

export const fetchCategories = createAsyncThunk(
 ' categories / fetchCategories',
  async () => {
   return await axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => response.data);
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers:(builder)=>{
    builder.addCase(fetchCategories.pending,state=>{
        state.categoriesloading=true;
    })
    builder.addCase(fetchCategories.fulfilled,(state,action)=>{
        state.categoriesloading=false;
        state.categoriesItem=action.payload;
        state.categorieserror=''
    })
    builder.addCase(fetchCategories.rejected,(state,action)=>{
        state.categoriesloading=false;
        state.categoriesItem=[];
        state.categorieserror=action.error.message
    })
  }
});

export default categoriesSlice.reducer;