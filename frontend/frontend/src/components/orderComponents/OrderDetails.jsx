import React from "react";
import { useState, useEffect } from "react";
import "./order.css";

const OrderDetails = ({ orderDishes, dishList }) => {
  const orderButtons = [
    {
      name: "+item",
    },
  ];

  // First states of SECTION:  Change order QTY
  const [dishToChange, setdishToChange] = useState("-");
  const [dishNameToDisplay, setDishNameToDisplay] = useState("-");
  // First states of SECTION:  Change order QTY ==  END ==

  // Setting states of dish to display in SECTION:  Change order QTY
  const setDishToDisplay = (filteredDish) => {
    const dishToDisplay = dishList.dishes.filter(
      (dishToDisplay) => dishToDisplay.id == filteredDish.dish
    );

    setDishNameToDisplay(dishToDisplay);
    setdishToChange(filteredDish);
  };

  // Setting states of dish to display in SECTION:  Change order QTY ==  END ==

  return (
    //  Section with order details:
    //  - Table with dishes (qty, each, total)
    //  - Add item button
    //  - Change qty <section>
    //   - Balance section
    <section className="order">
      <div className="table-and-user">
        <div className="table-info">Table : #5</div>
        <div className="user-info">Michael Jordan</div>
      </div>
      <table className="order-details">
        <thead className="order-table">
          <tr>
            <th className="first-element">Name</th>
            <th>Qty</th>
            <th>Each</th>
            <th>Total</th>
          </tr>

          {orderDishes.map((filteredDish) => (
            <tr
              key={filteredDish.id}
              className="dish-tr"
              onClick={() => {
                setDishToDisplay(filteredDish);
              }}
            >
              <td className="first-element">
                {" "}
                {dishList.dishes
                  .filter(
                    (dishToDisplay) => dishToDisplay.id == filteredDish.dish
                  )
                  .map((filteredDishToDisplay) => (
                    <div key={filteredDishToDisplay.id}>
                      {filteredDishToDisplay.title}
                    </div>
                  ))}
              </td>
              <td>{filteredDish.qty}</td>

              <td>
                {" "}
                {dishList.dishes
                  .filter(
                    (dishToDisplay) => dishToDisplay.id == filteredDish.dish
                  )
                  .map((filteredDishToDisplay) => (
                    <div key={filteredDishToDisplay.id}>
                      {filteredDishToDisplay.price}
                    </div>
                  ))}
              </td>
              <td>
                {dishList.dishes
                  .filter(
                    (dishToDisplay) => dishToDisplay.id == filteredDish.dish
                  )
                  .map((filteredDishToDisplay) => (
                    <div key={filteredDishToDisplay.id}>
                      {(filteredDishToDisplay.price * filteredDish.qty).toFixed(
                        2
                      )}
                    </div>
                  ))}
              </td>
            </tr>
          ))}
        </thead>
      </table>
      <div className="order-details-buttons">
        {orderButtons.map((button, index) => (
          <button className="orderButton" key={button.name} type="">
            {button.name}
          </button>
        ))}
      </div>
      {/* // ============= SECTION: Change order QTY ================ */}
      <div className="order-balance" style={{ display: "flex" }}>
        <div>
          <button type="">-</button>
          {dishToChange.qty ? (
            <button type="">{dishToChange.qty}</button>
          ) : (
            <button type="">0</button>
          )}
          <button type="">+</button>
        </div>
        <div>
          {dishNameToDisplay[0].title ? (
            <div>{dishNameToDisplay[0].title}</div>
          ) : (
            <div>dish name</div>
          )}
        </div>
      </div>
      {/* ============= SECTION: Change order QTY ================ END == */}
      <div className="order-balance">balance</div>
      <div className="order-details-buttons">buttons</div>
    </section>
  );
};

export default OrderDetails;
