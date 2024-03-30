import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  itemloading: false,
  item: [],
  itemerror: "",
};

export const fetchItems = createAsyncThunk(
  "items/fetchItems",
  async (category) => {
    return await axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => response.data);
  }
);

const itemSlice = createSlice({
  name: "items",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.itemloading = true;
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.itemloading = false;
      state.item = action.payload;
      state.itemerror = "";
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.itemloading = false;
      state.item = [];
      state.itemerror = action.error.message;
    });
  },
});

export default itemSlice.reducer;
