import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../FetchingApi/API/FetchProduct";
import { restocked } from "../FetchingApi/API/FetchProduct";
import { addUser } from "../FetchingApi/Slice/userSlice";
import ProductList from "../Components/ProductList";
import Filter from "../Components/Filter";

const Home = () => {
  const dispatch = useDispatch();
  const fullProductList = useSelector((state) => state.products.products);
  const selectedData = useSelector((state) => state.items.item);


  useEffect(() => {
    // access localstorage data
    let user = JSON.parse(localStorage.getItem("users")) || [];
    dispatch(addUser(user))
  }, [dispatch]);

  useEffect(() => {
    if (selectedData.length>0) {
      dispatch(restocked(selectedData));
    }else {
          dispatch(fetchProducts());
    }
  }, [dispatch, selectedData]);

  return (
    <div>
      <div className="d-flex justify-content-between m-3">
        <h2 className="ps-5">Latest Product:</h2>
        <span className="me-5">
          <Filter />
        </span>
      </div>
      {fullProductList && <ProductList productList={fullProductList} />}
    </div>
  );
};

export default Home;
