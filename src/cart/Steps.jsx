import React from "react";
import { Steps } from "antd";

const StepsBar = ({currentValue}) => {
  return (
    <div className="mt-2 p-2">
      <Steps
        progressDot
        current={currentValue}
        items={[
          {
            title: "Shipping",
          },
          {
            title: "Conform Order",
          },
          {
            title: "Payment",
          },
        ]}
      />
    </div>
  );
};

export default StepsBar;
