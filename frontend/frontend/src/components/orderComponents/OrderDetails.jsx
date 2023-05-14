import React from "react";
import { useState, useEffect } from "react";
import "./order.css";

const OrderDetails = ({ orderDishes, dishList }) => {
  const orderButtons = [
    {
      name: "+item",
    },
  ];
  console.log("Ordered first: ", orderDishes[0]);
  const orderedDishFirstName = dishList.dishes.filter(
    (dishToDisplay) => dishToDisplay.id == orderDishes[0].dish
  );
  console.log("Ordered first NAME: ", orderedDishFirstName[0]);
  const [dishToChange, setdishToChange] = useState(orderDishes[0]);
  const [dishNameToDisplay, setDishNameToDisplay] = useState(
    orderedDishFirstName[0]
  );

  const setDishToDisplay = (filteredDish) => {
    const dishToDisplay = dishList.dishes.filter(
      (dishToDisplay) => dishToDisplay.id == filteredDish.dish
    );
    setDishNameToDisplay(dishToDisplay);
    console.log("dishNameToDisplay: :", dishNameToDisplay[0].title);
    setdishToChange(filteredDish);
  };

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

                console.log("DishTpCHange: ", dishToChange);
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
      <div className="order-balance">
        <div>
          <button type="">-</button>
          <button type="">{dishToChange.qty}</button>
          <button type="">+</button>
          <div>{orderedDishFirstName[0].title}</div>
        </div>
      </div>
      <div className="order-balance">balance</div>
      <div className="order-details-buttons">buttons</div>
    </section>
  );
};

export default OrderDetails;
