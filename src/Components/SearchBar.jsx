import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../FetchingApi/API/FetchCategories";
import { fetchItems } from "../FetchingApi/API/FetchItems";
import Select from "react-select";
import { useLocation, useNavigate } from "react-router-dom";

const SearchBar = () => {
  // Routing
  const location = useLocation();
  const navigate = useNavigate();

  //Get Data from Redux Store
  const categoriesList = useSelector(
    (state) => state.categories.categoriesItem
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleSelectChange = (selectedItem) => {
    dispatch(fetchItems(selectedItem.value));
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  const options = categoriesList.map((category) => ({
    value: category,
    label: category,
  }));

  return (
    <Select
      options={options}
      placeholder="Search..."
      noOptionsMessage={() => "Product Not Found"}
      onChange={handleSelectChange}
    />
  );
};

export default SearchBar;
