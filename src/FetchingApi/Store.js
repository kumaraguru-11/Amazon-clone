import { configureStore } from "@reduxjs/toolkit";
import FetchProduct from "./API/FetchProduct";
// import FetchCategories from "./API/FetchCategories";
import FetchItems from "./API/FetchItems";
import FetchSingleProduct from "./API/FetchSingleProduct";
import userReducer from "./Slice/userSlice";

const store = configureStore({
  reducer: {
    products: FetchProduct,
    // categories: FetchCategories,
    items: FetchItems,
    singleProduct: FetchSingleProduct,
    user: userReducer,
  },
});

export default store;
