import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchSingleProducts,
  removeItem,
} from "../FetchingApi/API/FetchSingleProduct";
import { Button, Empty, List, Image } from "antd";
import { useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

const Cart = () => {
  const [quantity, setQuantity] = useState([]);
  const product = useSelector((state) => state.singleProduct.multipleProduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    setQuantity(cart);
    cart.length > 0 &&
      cart.map((el) => dispatch(fetchSingleProducts(el.product)));
  }, [dispatch]);


  const handleDeleteCart = (id) => {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const deleteItem = cartItems.filter((item) => {
      return item.product !== id;
    });
    localStorage.setItem("cart", JSON.stringify(deleteItem));
    dispatch(removeItem(id));
    setQuantity(cartItems)
  };

  const handleModifieCart = (id, action) => {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    let index = cartItems.findIndex((item) => item.product === id);
    if (index !== -1) {
      if (action === "increment") {
        cartItems[index].quantity += 1;
      } else if (action === "decrement" && cartItems[index].quantity > 0) {
        cartItems[index].quantity -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(cartItems));

      setQuantity(cartItems);
    }
  };

  return (
    <div style={{ height: "91vh" }}>
      {product.length > 0 ? (
        <div style={{ display: "flex" }} className="cartPage">
          {/* ---------- CART LIST ------------- */}
          <div className="cartPage-list">
            <h2>{`Your Cart: ${quantity.length} Items`}</h2>
            {
              <List
                itemLayout="horizontal"
                size="large"
                bordered
                dataSource={product}
                className="cartList"
                renderItem={(item) => (
                  <div className="row gx-3 align-items-center">
                    <List.Item className="cartList-item">
                      <div className="col-2 col-md-1">
                        <Image
                          src={item.image}
                          height={70}
                          preview={false}
                          className="cartPage-cartlist-img"
                        />
                      </div>

                      <div className="col-4 col-md-3">
                        <h5 className="text-truncate">{item.title}</h5>
                      </div>

                      <div className="col-2 col-md-2">
                        <h5>{`$ ${item.price}`}</h5>
                      </div>

                      <div className="col-3 col-md-2">
                        <Button
                          className="bg-danger text-light"
                          onClick={() =>
                            handleModifieCart(item.id, "decrement")
                          }
                        >
                          -
                        </Button>
                        <span className="mx-3">
                          {quantity.find((el) => el.product === item.id)
                            ?.quantity || 1}
                        </span>
                        <Button
                          type="primary"
                          onClick={() =>
                            handleModifieCart(item.id, "increment")
                          }
                        >
                          +
                        </Button>
                      </div>

                      <span className="col-auto col-md-1">
                        <MdDeleteForever
                          className="text-danger fs-4"
                          style={{ cursor: "pointer" }}
                          onClick={() => handleDeleteCart(item.id)}
                        />
                      </span>
                    </List.Item>
                  </div>
                )}
              />
            }
          </div>
          {/* -------- ORDER SUMMERY ---------- */}
          <div className="cartPage-orderSummary">
            <div className="orderSummary-card">
              <h4>Order Summary</h4>
              <hr />
              <p className="d-flex justify-content-between">
                subTotal:
                <span className="fw-bolder">
                  {quantity.reduce((acc, item) => acc + item.quantity, 0)}
                  (Units)
                </span>
              </p>
              <p className="d-flex justify-content-between">
                Est.Total:
                <span className="fw-bolder">
                  $
                  {quantity.reduce((acc, curr) => {
                    // Find the matching item in quantity
                    const item = product.find(
                      (item) => item.id === curr.product
                    );
                    // Calculate the cost for the current product
                    const cost = item ? item.price * curr.quantity : 0;

                    // Add the cost to the accumulator
                    return parseInt(acc + cost);
                  }, 0)}
                </span>
              </p>
              <hr />
              <Button className="fw-bolder w-100" type="primary" onClick={()=>{}}>
                Check out
              </Button>
            </div>
          </div>
        </div>
      ) : (
        // ---- EMPTY CART -------
        <div
          style={{
            display: "grid",
            placeItems: "center",
            height: "100%",
          }}
        >
          <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{ height: 60 }}
            description={<span>No Cart</span>}
          >
            <Button type="primary" onClick={() => navigate("/")}>
              Add Cart
            </Button>
          </Empty>
        </div>
      )}
    </div>
  );
};

export default Cart;
