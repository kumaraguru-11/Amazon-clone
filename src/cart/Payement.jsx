import React, { useState, useRef } from "react";
import StepsBar from "./Steps";
import { Input, Button, Modal } from "antd";
import { useSelector } from "react-redux";
import Loader from "../Components/Loading";
import { useNavigate } from "react-router-dom";

const Payement = () => {
  const cartQty = useSelector((state) => state.user.cartQty);
  const product = useSelector((state) => state.singleProduct.multipleProduct);

  const Total =
    cartQty &&
    cartQty.reduce((acc, curr) => {
      // Find the matching item in quantity
      const item = product.find((item) => item.id === curr.productId);
      // Calculate the cost for the current product
      const cost = item ? item.price * curr.quantity : 0;

      // Add the cost to the accumulator
      return parseInt(acc + cost);
    }, 0);

  const Tax = parseInt(Number(0.08 * Total));

  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cardnumber = useRef(null);
  const cardexpiry = useRef(null);
  const cardcvc = useRef(null);

  const navigate = useNavigate();

  //change focus to the next input filed
  const handleKeyDown = (e, nextRef) => {
    if (nextRef === null) return;

    if (e.key === "Enter") {
      e.preventDefault();
      nextRef.current.focus();
    }
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value;
    // Format card number as XXXX XXXX XXXX XXXX
    value = value.replace(/\D/g, "").substring(0, 16);
    value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(value);
  };

  const handleCardExpiryChange = (e) => {
    let value = e.target.value;
    // Format card expiry as MM/YY
    value = value.replace(/\D/g, "").substring(0, 4);
    value = value.replace(/(\d{2})(?=\d)/g, "$1/");
    setCardExpiry(value);
  };

  const handleCardCvcChange = (e) => {
    let value = e.target.value;
    // Format card CVC as CVC
    setCardCvc(value);
  };

  const handlePayment = async () => {
   if(cardNumber && cardExpiry && cardCvc){
     setIsModalOpen(true);

     await new Promise((resolve) => {
       setTimeout(() => {
         setIsModalOpen(false);
         resolve();
       }, 2000);
     });

     //navigate after 2sec
     navigate("/payment/success");
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
      <StepsBar currentValue={2} />
      <div
        className=" p-4 border rounded mt-5 mx-auto"
        style={{
          maxWidth: "25rem",
          boxShadow: "2px -1px 20px -4px rgba(0,0,0,0.75)",
        }}
      >
        <h3 className="mt-3">Card Info</h3>

        <label className="mt-3">Card Number</label>
        <Input
          className="mt-2"
          placeholder="XXXX XXXX XXXX"
          value={cardNumber}
          onChange={handleCardNumberChange}
          ref={cardnumber}
          onKeyDown={(e) => handleKeyDown(e, cardexpiry)}
        />

        <label className="mt-3">Card Expiry</label>
        <Input
          className="mt-2"
          placeholder="MM/YY"
          value={cardExpiry}
          onChange={handleCardExpiryChange}
          ref={cardexpiry}
          onKeyDown={(e) => handleKeyDown(e, cardcvc)}
        />

        <label className="mt-3">Card CVC</label>
        <Input
          className="mt-2"
          placeholder="CVC"
          value={cardCvc}
          onChange={handleCardCvcChange}
          ref={cardcvc}
          onKeyDown={(e) => handleKeyDown(e, null)}
        />

        <Button
          type="primary"
          className=" mt-3 w-100"
          size="large"
          onClick={() => handlePayment()}
        >
          {`Pay - ${Total + Tax}`}
        </Button>
      </div>
      {/* FAKE PAYMENT LOADING  */}
      <Modal
        open={isModalOpen}
        cancelText
        footer={null}
        style={{ height: "10px" }}
      >
        <Loader />
      </Modal>
    </div>
  );
};

export default Payement;
