import React, { useRef } from "react";
import { Input, Button } from "antd";
import StepsBar from "./Steps";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { shippingDetail } from "../FetchingApi/Slice/userSlice";

const Shipping = () => {
  const [shippingInfo, setShippingInfo] = React.useState({
    address: "",
    city: "",
    phone: "",
    postalCode: "",
    country: "",
    state: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addressRef = useRef(null);
  const cityRef = useRef(null);
  const phoneRef = useRef(null);
  const postalCodeRef = useRef(null);
  const countryRef = useRef(null);
  const stateRef = useRef(null);

  //change focus to the next input filed
  const handleKeyDown = (e, nextRef) => {
    if (nextRef === null) return;

    if (e.key === "Enter") {
      e.preventDefault();
      nextRef.current.focus();
    }
  };

  const handleSubmit = () => {
    // Check if all fields are filled
    if (
      !shippingInfo.address ||
      !shippingInfo.city ||
      !shippingInfo.phone ||
      !shippingInfo.postalCode ||
      !shippingInfo.country ||
      !shippingInfo.state
    ) {
      alert("Please fill in all fields");
      return;
    } else {
      dispatch(shippingDetail(shippingInfo));

      navigate("/conformOrder");
    }
  };

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
      <StepsBar currentValue={0} />

      <div
        className=" p-4 border rounded mt-5 mx-auto"
        style={{
          maxWidth: "25rem",
          boxShadow: "2px -1px 20px -4px rgba(0,0,0,0.75)",
        }}
      >
        <h3 className="mt-3">Shipping Info</h3>

        <label className="mt-2">Address</label>
        <Input
          className="mt-2"
          onChange={(event) => {
            setShippingInfo({
              ...shippingInfo,
              address: event.target.value,
            });
          }}
          ref={addressRef}
          onKeyDown={(e) => handleKeyDown(e, cityRef)}
        />

        <label className="mt-3">City</label>
        <Input
          className="mt-2"
          onChange={(event) => {
            setShippingInfo({ ...shippingInfo, city: event.target.value });
          }}
          ref={cityRef}
          onKeyDown={(e) => handleKeyDown(e, phoneRef)}
        />

        <label className="mt-3">Phone No</label>
        <Input
          type="number"
          className="mt-2"
          onChange={(event) => {
            setShippingInfo({ ...shippingInfo, phone: event.target.value });
          }}
          ref={phoneRef}
          onKeyDown={(e) => handleKeyDown(e, postalCodeRef)}
        />

        <label className="mt-3">Postal Code</label>
        <Input
          type="number"
          className="mt-2"
          onChange={(event) => {
            setShippingInfo({
              ...shippingInfo,
              postalCode: event.target.value,
            });
          }}
          ref={postalCodeRef}
          onKeyDown={(e) => handleKeyDown(e, countryRef)}
        />

        <label className="mt-3">Country</label>
        <Input
          className="mt-2"
          onChange={(event) => {
            setShippingInfo({
              ...shippingInfo,
              country: event.target.value,
            });
          }}
          ref={countryRef}
          onKeyDown={(e) => handleKeyDown(e, stateRef)}
        />

        <label className="mt-3">State</label>
        <Input
          className="mt-2"
          onChange={(event) => {
            setShippingInfo({ ...shippingInfo, state: event.target.value });
          }}
          ref={stateRef}
          onKeyDown={(e) => handleKeyDown(e, null)}
        />

        <Button
          type="primary"
          className=" mt-3 w-100"
          onClick={() => handleSubmit()}
        >
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

export default Shipping;
