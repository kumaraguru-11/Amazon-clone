import React, { useState } from "react";
import { Button, Drawer, Col, InputNumber, Row, Slider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { restocked } from "../FetchingApi/API/FetchProduct";
import { fetchItems } from "../FetchingApi/API/FetchItems";

const Filter = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(0);

  const [modifiedData, setModifiedData] = useState([]);
  const [category, setCategory] = useState("");
  const [btnstyle, setBtnStyle] = useState({ btn1: false, btn2: false });
  const Data = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  //  antd Inbuild Function
  const onChange = (newValue) => {
    setInputValue(newValue);
    let temp = JSON.parse(JSON.stringify(Data));
    let filterTemp= temp.filter((product)=>{return product.price <= newValue })
    setModifiedData(filterTemp);
  };

  const showDrawer = () => {
    setOpen(true);
    setBtnStyle({ btn1: false, btn2: false });
    setCategory('')
    setInputValue(0)
  };

  const onClose = () => {
    setOpen(false);
    setModifiedData([]);
    setCategory("");
    setInputValue(0)
  };

  //custom Functions
  const onCloseDrawer = () => {
    category && dispatch(fetchItems(category.toLowerCase()));
    modifiedData.length > 0 && dispatch(restocked(modifiedData));
    setOpen(false);
  };

  const handleLowToHigh = () => {
    setBtnStyle({ btn1: true, btn2: false });
    let temp = JSON.parse(JSON.stringify(Data));
    temp.sort((a, b) => {
      return parseFloat(a.price) - parseFloat(b.price);
    });
    setModifiedData(temp);
  };

  const handleHighToLow = () => {
    setBtnStyle({ btn1: false, btn2: true });
    let temp = JSON.parse(JSON.stringify(Data));
    temp.sort((a, b) => {
      return parseFloat(b.price) - parseFloat(a.price);
    });
    setModifiedData(temp);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Filter
      </Button>

      <Drawer title="Filter" onClose={onClose} open={open}>
        {/* Slider */}

        <h6>Price Range</h6>
        <Row>
          <Col span={12}>
            <Slider
              min={10}
              max={1000}
              onChange={onChange}
              value={typeof inputValue === "number" ? inputValue : 0}
            />
          </Col>
          <Col span={4}>
            <InputNumber
              min={10}
              max={20}
              style={{ margin: "0 16px" }}
              value={inputValue}
              onChange={onChange}
            />
          </Col>
        </Row>

        <hr />

        <h5>Categories</h5>
        <ul
          style={{ listStyleType: "none" }}
          onClick={(e) => setCategory(e.target.innerText)}
        >
          <li className="my-1 fs-6">
            <Button
              type={category === "ELECTRONICS" ? "primary" : "text"}
              style={{ cursor: "pointer", textTransform: "uppercase" }}
            >
              electronics
            </Button>
          </li>
          <li className="my-1 fs-6">
            <Button
              type={category === "JEWELERY" ? "primary" : "text"}
              style={{ cursor: "pointer", textTransform: "uppercase" }}
            >
              jewelery
            </Button>{" "}
          </li>
          <li
            className="my-1 fs-6"
            style={{ cursor: "pointer", textTransform: "uppercase" }}
          >
            <Button
              type={category === "MEN'S CLOTHING" ? "primary" : "text"}
              style={{ cursor: "pointer", textTransform: "uppercase" }}
            >
              men's clothing
            </Button>
          </li>
          <li
            className="my-1 fs-6"
            style={{ cursor: "pointer", textTransform: "uppercase" }}
          >
            <Button
              type={category === "WOMEN'S CLOTHING" ? "primary" : "text"}
              style={{ cursor: "pointer", textTransform: "uppercase" }}
            >
              {" "}
              women's clothing
            </Button>
          </li>
        </ul>

        <hr />

        <h5>Price</h5>
        <Button
          onClick={() => handleLowToHigh()}
          type={btnstyle.btn1 ? "primary" : "default"}
        >
          Low To High
        </Button>
        <Button
          className="ms-3"
          type={btnstyle.btn2 ? "primary" : "default"}
          onClick={() => handleHighToLow()}
        >
          High To Low
        </Button>

        <div className="my-5 d-flex justify-content-center">
          <Button onClick={() => onCloseDrawer()} type="primary">
            OK
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default Filter;
