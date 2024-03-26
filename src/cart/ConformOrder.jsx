import React from "react";
import StepsBar from "./Steps";
import { useSelector } from "react-redux";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const ConformOrder = () => {
  const shippingData = useSelector((state) => state.user.shippingInfo);
  const user = useSelector((state) => state.user.user);
  const product = useSelector((state) => state.singleProduct.multipleProduct);
  const quantity=useSelector((state)=>state.user.cartQty);

  const { address, city, phone, postalCode, country, state } = shippingData;
  const navigate = useNavigate();

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

  return (
    <div
      style={{
        minHeight: "91vh",
        height: "100%",
        overflowY: "scroll",
        width: "100vw",
      }}
      className="p-4 d-flex flex-column"
    >
      <StepsBar currentValue={1} />

      <div className="mt-4">
        {/*-----GREETINGS-----*/}
        <h4 className="text-warning container">
          Hi{" "}
          {
            user.find((user) => {
              return user.isAuthentication === true;
            }).name
          }
          ,
        </h4>
        <p className="container">Thank you for Shopping with us.</p>

        <hr />

        {/*-----USER DETAILS-----*/}
        <div className="container">
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
            {phone}
          </p>
          <p className="mx-4">
            <span className="fw-bold">Address:</span>
            {`${address},${
              city[0].toUpperCase() + city.substring(1)
            },${postalCode},${state[0].toUpperCase() + state.substring(1)},${
              country[0].toUpperCase() + country.substring(1)
            }`}
          </p>
        </div>

        <hr />

        {/* -----PAYMENT DETIAL----- */}
        <div className="container payment-detail">
          <div style={{ width: "10rem" }}>
            <div
              style={{ opacity: ".5" }}
              className="d-flex justify-content-between"
            >
              Sub-Total <span>${Total}</span>
            </div>
            <div
              style={{ opacity: ".5" }}
              className="d-flex justify-content-between"
            >
              Tax <span>${Tax}</span>
            </div>

            <div className="d-flex justify-content-between fw-bolder">
              Total <span>${Total + Tax}</span>
            </div>
          </div>
          <div className="my-auto">
            <Button type="primary" onClick={() => navigate("/payment")}>
              Proceed Payment
            </Button>
          </div>
        </div>

        <hr />

        {/*PRODUCT DETAIL*/}
        <div className="container my-4">
          <h4>Your Cart Items:</h4>

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
                  <div>{`${
                    quantity &&
                    quantity.find((qty) => {
                      return qty.productId === product.id;
                    }).quantity
                  }X $${product.price} = $${
                    quantity &&
                    parseInt(
                      quantity.find((qty) => {
                        return qty.productId === product.id;
                      }).quantity * product.price
                    )
                  } `}</div>
                </div>
              );
            })}
        </div>


      </div>
    </div>
  );
};

export default ConformOrder;
