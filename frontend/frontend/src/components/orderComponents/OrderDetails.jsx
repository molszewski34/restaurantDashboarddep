import React from "react";
import "./order.css";

const OrderDetails = ({ orderDishes, dishList }) => {
  console.log(orderDishes);
  console.log(dishList);

  const orderButtons = [
    {
      name: "+item",
    },
  ];
  return (
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
            <tr className="dish-tr">
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
      <div className="order-balance">balance</div>
      <div className="order-details-buttons">buttons</div>
    </section>
  );
};

export default OrderDetails;
