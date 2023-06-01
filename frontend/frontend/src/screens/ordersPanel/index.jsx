import React from "react";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams } from "react-router-dom";

import { listDishes } from "../../actions/dishActions";
import {
  getOrderDetails,
  changeDishQty,
  addToOrder,
  removeFromOrder,
  deleteFromOrder,
  increaseDishQty,
} from "../../actions/ordersActions";
import { listCategories } from "../../actions/categoriesActions";

import NavbarOrders from "../../components/navbars/NavbarOrders";
import { BsCheckLg } from "react-icons/bs";

const OrdersPanel = () => {
  const dispatch = useDispatch();
  let { id } = useParams();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { error, loading, orderDetail } = orderDetails;

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
  //set first state of clicked dish in order - in case of cancel changes
  const [oldDishQty, setOldDishQty] = useState(0);
  // First states of SECTION:  Change order QTY ==  END ==

  //First state of active category and dish
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeCategoryColour, setActiveCategoryColour] = useState("white");
  const [activeDish, setActiveDish] = useState("");

  // Setting states of dish to display in SECTION:  Change order QTY
  const setDishToDisplay = (filteredDish) => {
    console.log(filteredDish);

    if (filteredDish.dish) {
      const dishToDisplayArr = dishList.dishes.filter(
        (dishToDisplay) => dishToDisplay.id == filteredDish.dish
      );
      const dishToDisplay = dishToDisplayArr[0];

      setDishNameToDisplay(dishToDisplay);
      setdishToChange(filteredDish);
      setDishQty(filteredDish.qty);
      setOldDishQty(filteredDish.qty);
    } else {
      const dishToDisplay = filteredDish;
      setDishNameToDisplay(dishToDisplay);
      setDishQty(1);
    }
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

  //Send chenged dish Qty to backend
  const sendDishQty = () => {
    dispatch(changeDishQty(dishToChange, dishQty));
  };

  useEffect(() => {
    dispatch(listDishes());
    dispatch(listCategories());

    dispatch(getOrderDetails(id));
  }, [dispatch]);
  

  return loading ? (
    <CircularProgress color="secondary" />
  ) : error ? (
    <div>Something went wrong</div>
  ) : (
    <>
      <NavbarOrders id={id} />
      <main className="grid bg-secondary-bg-color border md:grid-cols-2 md:h-[93vh]">
        <div className="md:flex md:flex-col md:h-full border-r-2 border-secondary-gray">
          <section className="flex justify-between bg-gray-light text-secondary-gray text-sm font-semibold border-b px-2 py-1">
            <div className="flex gap-2">
              <span>#66</span> <span>Table 6</span>
            </div>
            <p>Name of waiter</p>
          </section>
          <section className="grid grid-cols-5 border-b-2 border-gray-light py-1  bg-[#e2e8f0] ">
            {/* <section className="flex justify-between px-2 text-sm font-bold border-b-2 border-gray-light py-1"> */}
            <span className="col-start-1 col-end-3 font-bold pl-2">Name</span>
            {/* <span className="w-half col-start-1 col-end-3 ">Name</span> */}

            <span className="text-center font-bold">QTY</span>
            <span className="text-center font-bold">EACH</span>
            <span className="text-center font-bold">TOTAL</span>
          </section>
          {/* // ============= SECTION: Display ordered dishes ================ */}
          {orderDishes ? (
            <section className="grid grid-cols-1 grid-flow-row gap-1 auto-rows-max justify-between min-h-[300px] text-sm font-bold border-b-2 border-gray-light py-1  bg-white md:h-full">
              {orderDishes.map((filteredDish) => (
                <div
                  key={filteredDish.id}
                  className=" grid grid-cols-5 border-b-2 border-gray-light pb-1"
                  // className=" flex justify-between items-center w-full bg-secondary-bg-color border  px-2"
                  onClick={() => {
                    setDishToDisplay(filteredDish);
                  }}
                >
                  <span className="text-ellipsis whitespace-nowrap overflow-hidden col-start-1 col-end-3 pl-2 flex flex-wrap max-w-full">
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

                  <span className="text-center">{filteredDish.qty}</span>
                  {dishList.dishes
                    .filter(
                      (dishToDisplay) => dishToDisplay.id == filteredDish.dish
                    )
                    .map((filteredDishToDisplay) => (
                      <span
                        className="text-center"
                        key={filteredDishToDisplay.id}
                      >
                        {filteredDishToDisplay.price}
                      </span>
                    ))}
                  {dishList.dishes
                    .filter(
                      (dishToDisplay) => dishToDisplay.id == filteredDish.dish
                    )
                    .map((filteredDishToDisplay) => (
                      <span
                        className="text-center"
                        key={filteredDishToDisplay.id}
                      >
                        {(
                          filteredDishToDisplay.price * filteredDish.qty
                        ).toFixed(2)}
                      </span>
                    ))}
                </div>
              ))}
            </section>
          ) : (
            <CircularProgress color="secondary" />
          )}

          {/* // ============= END SECTION: Display ordered dishes ================ */}
          <section className="flex justify-center py-2 bg-gray-light gap-2 border-b">
            <button className="w-[90px] bg-primary-gray font-bold border-b py-1">
              Tab
            </button>
            <button className="w-[90px] bg-primary-gray font-bold  py-1">
              Item +
            </button>
            <button className="w-[90px] bg-primary-gray font-bold border-b py-1">
              Split
            </button>
          </section>
          <section className="flex justify-between bg-white p-2 border-b ">
            <div className="flex flex-wrap justify-between items-center font-bold gap-4 ">
              <span className="text-sm ">Balance Due:</span>
              <span className="text-2xl text-red-300">
                ${orderDetails.order.totalPrice}
              </span>
            </div>
            <div className="flex flex-wrap  justify-between items-center font-bold gap-4">
              <span className="text-sm">Total: </span>
              <span className="text-2xl">${orderDetails.order.totalPrice}</span>
            </div>
          </section>
        </div>
        <div className="md:flex md:flex-col ">
          <section className="flex flex-nowrap justify-between items-center gap-2 px-1 py-2 border-b bg-secondary-bg-color  border-x-1 md:bg-white">
            <div className="flex gap-2">
              <button
                className="w-[25px] md:w-[60px] font-bold bg-primary-gray border-b-2"
                onClick={() => {
                  decrementDishQty();
                }}
              >
                -
              </button>
              {/* // ============= SECTION: Display QTY of selected dish ================ */}

              <button
                className="w-[25px] md:w-[60px] font-bold bg-primary-gray border-b-2"
                type=""
              >
                {dishQty}
              </button>

              {/* // ============= END SECTION: Display QTY of selected dish ================ */}

              <button
                className="w-[25px] md:w-[60px] font-bold bg-primary-gray border-b-2"
                onClick={() => {
                  incrementDishQty();
                }}
              >
                +
              </button>
            </div>
            <span className="text-xs font-bold">
              {dishNameToDisplay.title ? (
                <div>{dishNameToDisplay.title}</div>
              ) : (
                <div>dish name</div>
              )}
            </span>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setDishQty(oldDishQty);
                }}
                className="font-bold text-base bg-primary-gray p-1 rounded border "
              >
                Cancel
              </button>
              <button
                className="font-bold text-base bg-primary-bg-color text-white py-1 px-2 rounded border"
                onClick={() => {
                  console.log(dishToChange);
                  if (dishToChange != "-") {
                    sendDishQty();
                  } else {
                    console.log(dishNameToDisplay);
                    console.log(dishQty);
                    console.log(id);
                    dispatch(addToOrder(dishNameToDisplay, id, dishQty));
                  }
                  //sendDishQty();
                  // set doubledDish - if order contains clicked dish
                  // const doubledDish = orderDishes.filter(
                  //   (dishToCheck) => dishToCheck.dish == dishToDisplay.id
                  // );
                  // // if clicked dish exist in order, change qty +1
                  // if (doubledDish.length > 0) {
                  //   let doubledDishQty = doubledDish[0].qty + 1;
                  //   dispatch(changeDishQty(doubledDish[0], doubledDishQty));
                  //   // if doesn`t - add dish to order (and also to database)
                  // } else if (doubledDish.length == 0) {
                  //   dispatch(addToOrder(dishToDisplay, id));
                  // }
                }}
              >
                Done
              </button>
            </div>
          </section>

          {/* <section className="grid grid-cols-3 grid-flow-row px-2 py-4 bg-secondary-bg-color gap-2  "> */}
          {/* <section className="grid auto-cols-[calc(30%_-_4rem)]  grid-flow-col gap-4 overflow-x-auto  "> */}
          <section className="relative flex items-center ">
            {/* // ============= SECTION: Display Categories ================ */}
                <div className="w-screen h-full  overflow-scroll whitespace-nowrap scroll-smooth py-4 md:grid md:grid-cols-4 gap-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`uppercase text-sm w-[100px] md:w-auto inline-block mx-1  ${
                  activeCategory == category.id ? "border-b-4" : ""
                } shadow-lg font-bold text-center  h-[60px] text-ellipsis whitespace-nowrap  px-2 hover:opacity-70 `}
                style={{
                  backgroundColor: `${category.colour}`,
                  borderColor: "white",
                }}
                onClick={() => {
                  setActiveCategory(category.id);
                  setActiveCategoryColour(category.colour);
                }}
              >
                {category.title}
              </button>
            ))}
</div>
            {/* // ============= END SECTION: Display Categories ================ */}
          </section>

          <section className="grid grid-cols-4 grid-flow-row px-2 py-4 bg-secondary-bg-color gap-2 border-b ">
            {/* // ============= SECTION: Display Dish From active Category ================ */}
            {dishList.dishes
              .filter(
                (filteredDishes) => filteredDishes.category == activeCategory
              )
              .map((dishToDisplay) => (
                <button
                  style={{
                    backgroundColor: `${activeCategoryColour}`,
                    borderColor: "white",
                  }}
                  onClick={() => {
                    setdishToChange("-");
                    setActiveDish(dishToDisplay);
                    setDishToDisplay(dishToDisplay);
                  }}
                  key={dishToDisplay.id}
                  className={`${
                    activeDish == dishToDisplay ? "border-b-4" : ""
                  } uppercase shadow-xl text-sm font-bold text-center min-w-[80px] h-[60px]  text-ellipsis whitespace-nowrap overflow-hidden px-2 hover:opacity-70`}
                >
                  {dishToDisplay.title}
                </button>
              ))}
            {/* // ============= END SECTION: Display Dish From active Category ================ */}
          </section>
        </div>
      </main>
    </>
  );
};
//
export default OrdersPanel;
