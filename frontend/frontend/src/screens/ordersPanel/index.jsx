import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams } from "react-router-dom";

import { listOrderDishes } from "../../actions/dishActions";
import { listDishes } from "../../actions/dishActions";
import {
  getOrderDetails,
  addToOrder,
  removeFromOrder,
  deleteFromOrder,
  increaseDishQty,
} from "../../actions/ordersActions";
import { listCategories } from "../../actions/categoriesActions";

import NavbarOrders from "../../components/NavbarOrders";
const OrdersPanel = () => {
  const dispatch = useDispatch();
  let { id } = useParams();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { error, loading, orderDetail } = orderDetails;

  console.log(orderDetails.order);

  const orderDishList = useSelector((state) => state.orderDishList);
  const {
    error: errorDishList,
    loading: loadingDishList,
    orderDishes,
  } = orderDishList;

  const dishList = useSelector((state) => state.dishList);
  const { error: dishListError, loading: dishListloading, dishes } = dishList;

  const categoriesList = useSelector((state) => state.categoriesList);
  const { categoriesError, categoriesLoading, categories } = categoriesList;

  const userLogin = useSelector((state) => state.userLogin);
  const {
    error: userLoginError,
    loading: userLoginLoading,
    userInfo,
  } = userLogin;
  // First states of SECTION:  Change order QTY
  const [dishToChange, setdishToChange] = useState("-");
  const [dishNameToDisplay, setDishNameToDisplay] = useState("-");
  const [dishQty, setDishQty] = useState(0);
  // First states of SECTION:  Change order QTY ==  END ==

  //First state of active category
  const [activeCategory, setActiveCategory] = useState(0);

  // Setting states of dish to display in SECTION:  Change order QTY
  const setDishToDisplay = (filteredDish) => {
    const dishToDisplay = dishList.dishes.filter(
      (dishToDisplay) => dishToDisplay.id == filteredDish.dish
    );

    setDishNameToDisplay(dishToDisplay);
    setdishToChange(filteredDish);
    setDishQty(filteredDish.qty);
  };

  // Increment dish QTY
  const incrementDishQty = () => {
    setDishQty(dishQty + 1);
  };

  //Decrement dish QTY

  const decrementDishQty = () => {
    if (dishQty > 0) {
      setDishQty(dishQty - 1);
    } else {
      setDishQty(0);
    }
  };

  useEffect(() => {
    dispatch(listDishes());
    dispatch(listOrderDishes(id));
    dispatch(listCategories());

    dispatch(getOrderDetails(id));
  }, [dispatch, id]);

  return loading ? (
    <CircularProgress color="secondary" />
  ) : error ? (
    <div>Something went wrong</div>
  ) : (
    <main>
      <NavbarOrders />
      <section className="flex justify-between bg-gray-light text-secondary-gray text-sm font-semibold border-b px-2 py-1">
        <div className="flex gap-2">
          <span>#66</span> <span>Table 6</span>
        </div>
        <p>Name of waiter</p>
      </section>
      <section className="flex justify-between px-2 text-sm font-bold border-b-2 border-gray-light py-1">
        <span className="w-half">Name</span>
        <div className="flex gap-8">
          <span>QTY</span>
          <span>EACH</span>
          <span>TOTAL</span>
        </div>
      </section>
      {/* // ============= SECTION: Display ordered dishes ================ */}
      <section className="grid grid-cols-1 grid-flow-row gap-1 auto-rows-max justify-between min-h-[300px] text-sm font-bold border-b-2 border-gray-light py-1">
        {orderDishes.map((filteredDish) => (
          <div
            key={filteredDish.id}
            className=" flex justify-between items-center w-full bg-secondary-bg-color border  px-2"
            onClick={() => {
              setDishToDisplay(filteredDish);
            }}
          >
            <span className="text-ellipsis whitespace-nowrap overflow-hidden">
              {dishList.dishes
                .filter(
                  (dishToDisplay) => dishToDisplay.id == filteredDish.dish
                )
                .map((filteredDishToDisplay) => (
                  <div key={filteredDishToDisplay.id}>
                    {filteredDishToDisplay.title}
                  </div>
                ))}
            </span>
            <div className="flex gap-8">
              <span>{filteredDish.qty}</span>
              {dishList.dishes
                .filter(
                  (dishToDisplay) => dishToDisplay.id == filteredDish.dish
                )
                .map((filteredDishToDisplay) => (
                  <span key={filteredDishToDisplay.id}>
                    {filteredDishToDisplay.price}
                  </span>
                ))}
              {dishList.dishes
                .filter(
                  (dishToDisplay) => dishToDisplay.id == filteredDish.dish
                )
                .map((filteredDishToDisplay) => (
                  <span key={filteredDishToDisplay.id}>
                    {(filteredDishToDisplay.price * filteredDish.qty).toFixed(
                      2
                    )}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </section>
      {/* // ============= END SECTION: Display ordered dishes ================ */}
      <section className="flex justify-center py-2 bg-gray-light gap-2 border-b">
        <button className="w-[90px] bg-primary-gray font-bold border-b py-1">
          Tab
        </button>
        <button className="w-[90px] bg-primary-gray font-bold border-b py-1">
          Item +
        </button>
        <button className="w-[90px] bg-primary-gray font-bold border-b py-1">
          Split
        </button>
      </section>

      <section className="flex flex-wrap justify-between items-center gap-2 px-1 py-2 border-b bg-secondary-bg-color">
        <div className="flex gap-2">
          <button
            className="w-[25px] font-bold bg-primary-gray border-b-2"
            onClick={() => {
              decrementDishQty();
            }}
          >
            -
          </button>
          {/* // ============= SECTION: Display QTY of selected dish ================ */}

          <button
            className="w-[25px] font-bold bg-primary-gray border-b-2"
            type=""
          >
            {dishQty}
          </button>

          {/* // ============= END SECTION: Display QTY of selected dish ================ */}

          <button
            className="w-[25px] font-bold bg-primary-gray border-b-2"
            onClick={() => {
              incrementDishQty();
            }}
          >
            +
          </button>
        </div>
        <span className="text-xs font-bold">
          {dishNameToDisplay[0].title ? (
            <div>{dishNameToDisplay[0].title}</div>
          ) : (
            <div>dish name</div>
          )}
        </span>
        <div className="flex gap-2">
          <button className="font-bold text-base bg-primary-gray p-1 rounded border ">
            Cancel
          </button>
          <button className="font-bold text-base bg-primary-bg-color text-white p-1 rounded border">
            Done
          </button>
        </div>
      </section>
      <section className="flex justify-between bg-white p-2 border-b">
        <div className="flex flex-wrap justify-between items-center font-bold gap-4">
          <span className="text-base">Balance Due:</span>
          <span className="text-3xl text-red-300">
            ${orderDetails.order.totalPrice}
          </span>
        </div>
        <div className="flex flex-wrap  justify-between items-center font-bold gap-4">
          <span>Total: </span>
          <span className="text-3xl">${orderDetails.order.totalPrice}</span>
        </div>
      </section>

      <section className="grid grid-cols-3 grid-flow-row px-2 py-4 bg-secondary-bg-color gap-2 border-b">
        {/* // ============= SECTION: Display Categories ================ */}

        {categories.map((category) => (
          <button
            key={category.id}
            className="uppercase text-sm font-bold text-center min-w-[80px] h-[60px] border rounded bg-white text-ellipsis whitespace-nowrap overflow-hidden px-2"
            onClick={() => {
              setActiveCategory(category.id);
              console.log(category.id);
              console.log(activeCategory);
            }}
          >
            {category.title}
          </button>
        ))}

        {/* // ============= END SECTION: Display Categories ================ */}
      </section>

      <section className="grid grid-cols-3 grid-flow-row px-2 py-4 bg-secondary-bg-color gap-2 border-b">
        {dishList.dishes
          .filter((filteredDishes) => filteredDishes.category == activeCategory)
          .map((dishToDisplay) => (
            <button
              key={dishToDisplay.id}
              className="uppercase text-sm font-bold text-center min-w-[80px] h-[60px] border rounded bg-white text-ellipsis whitespace-nowrap overflow-hidden px-2"
            >
              {dishToDisplay.title}
            </button>
          ))}

        {/* <button className="uppercase text-sm font-bold text-center min-w-[80px] h-[60px] border rounded bg-white text-ellipsis whitespace-nowrap overflow-hidden px-2">
          Lorem dishum dolor sit amet consectetur adipisicing elit.
        </button>
        <button className="uppercase text-sm font-bold text-center min-w-[80px] h-[60px] border rounded bg-white text-ellipsis whitespace-nowrap overflow-hidden px-2">
          Lorem dishum dolor sit amet consectetur adipisicing elit.
        </button>
        <button className="uppercase text-sm font-bold text-center min-w-[80px] h-[60px] border rounded bg-white text-ellipsis whitespace-nowrap overflow-hidden px-2">
          Lorem dishum dolor sit amet consectetur adipisicing elit.
        </button> */}
      </section>
    </main>
  );
};

export default OrdersPanel;
