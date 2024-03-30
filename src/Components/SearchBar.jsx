import React from "react";
import { useDispatch } from "react-redux";
import { fetchItems } from "../FetchingApi/API/FetchItems";
import Select from "react-select";
import { useLocation, useNavigate } from "react-router-dom";

const SearchBar = () => {
  // Routing
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSelectChange = (selectedItem) => {
    dispatch(fetchItems(selectedItem.value.toLowerCase()));
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  const options = [
    { value: "ELECTRONICS", label: "ELECTRONICS" },
    { value: "JEWELERY", label: "JEWELERY" },
    { value: "MEN'S CLOTHING", label: "MEN'S CLOTHING" },
    { value: "WOMEN'S CLOTHING", label: "WOMEN'S CLOTHING" },
  ];

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
