import React from "react";
import { useSelector } from "react-redux";
import { Empty } from "antd";

const Orders = () => {
  const shippingData = useSelector((state) => state.user.shippingInfo);
  const quantity = useSelector((state) => state.user.cartQty);
  const user = useSelector((state) => state.user.user);
  const product = useSelector((state) => state.singleProduct.multipleProduct);

  // const { address, city, phone, postalCode, country, state } = shippingData;

  const Total =
    quantity &&
    quantity.reduce((acc, curr) => {
      // Find the matching item in quantity
      const item = product.find((item) => item.id === curr.productId);
      // Calculate the cost for the current product
      const cost = item ? item.price * curr.quantity : 0;

      // Add the cost to the accumulator
      return parseInt(acc + cost);
    }, 0);

  const Tax = parseInt(Number(0.08 * Total));

  if (!shippingData) {
    return (
      <div
        style={{
          minHeight: "91vh",
          height: "100%",
          overflowY: "scroll",
          width: "100vw",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Empty />
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="container">Orders</h1>
      <div className="container mt-4">
        <h4>Shipping Info</h4>

        <p className="mx-4">
          <span className="fw-bold">Name:</span>
          {
            user.find((user) => {
              return user.isAuthentication === true;
            }).name
          }
        </p>
        <p className="mx-4">
          <span className="fw-bold">Phone:</span>
          {shippingData.phone}
        </p>
        <p className="mx-4">
          <span className="fw-bold">Address:</span>
          {`${shippingData.address},${
            shippingData.city[0].toUpperCase() + shippingData.city.substring(1)
          },${shippingData.postalCode},${
            shippingData.state[0].toUpperCase() +
            shippingData.state.substring(1)
          },${
            shippingData.country[0].toUpperCase() +
            shippingData.country.substring(1)
          }`}
        </p>
        <p className="mx-4">
          <span className="fw-bold">Amount:</span> {Total + Tax}
        </p>
      </div>{" "}
      <div className="container mt-4">
        <h3>Payment</h3>
        <p className="text-success fw-bold">PAID</p>
      </div>
      <div className="container mt-4">
        <h3>Order Status</h3>
        <p className="text-danger fw-bold">PROCESSING</p>
      </div>
      <div className="container my-4">
        <h4>Order Items:</h4>
        <hr />
        {product &&
          product.map((product) => {
            return (
              <div
                className="d-flex justify-content-between my-4"
                key={product.id}
              >
                <div className="d-flex align-items-center w-50">
                  <img src={product.image} alt="img" height={50} width={40} />
                  <p className="ms-4 text-truncate">{product.title}</p>
                </div>
                <div>${product.price}</div>
                <div>
                  {quantity &&
                    quantity.find((qty) => {
                      return qty.productId === product.id;
                    }).quantity}
                  Piece(s)
                </div>
              </div>
            );
          })}
        <hr />
      </div>
    </div>
  );
};

export default Orders;
