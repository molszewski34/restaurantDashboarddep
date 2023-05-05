import React from "react";
import "./styles.css";

const OrderNew = () => {
  return (
    <div
      className="order-new"
      style={{
        marginTop: "30px",
      }}
    >
      <div className="order">
        <div className="table-and-user">table and user</div>
        <div className="order-details">
          <table className="order-table">
            <tr>
              <th className="first-element">Name</th>
              <th>Qty</th>
              <th>Each</th>
              <th>Total</th>
            </tr>
            <tr>
              <td className="first-element">Cheesburger</td>
              <td>5</td>
              <td>$4</td>
              <td>$20</td>
            </tr>
          </table>
          order details
        </div>
        <div className="order-details-buttons">buttons</div>
        <div className="order-balance">balance</div>
        <div className="order-details-buttons">buttons</div>
      </div>
      <div className="dish">dish</div>
    </div>
  );
};

export default OrderNew;
