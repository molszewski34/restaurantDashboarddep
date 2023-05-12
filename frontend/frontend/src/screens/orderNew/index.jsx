import React from "react";
import "./styles.css";
import OrderDetails from "./../../components/orderComponents/OrderDetails";

const OrderNew = () => {
  return (
    <div
      className="order-new"
      style={{
        marginTop: "30px",
      }}
    >
      <OrderDetails />
      <div className="dish">dish</div>
    </div>
  );
};

export default OrderNew;
