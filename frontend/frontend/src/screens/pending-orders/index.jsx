import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import NavbarTop from "../../components/navbars/NavbarTop";
import {
  listOrderDishes,
  listActiveOrderDishes,
  listDishes,
} from "../../actions/dishActions";
import { listOrders } from "../../actions/ordersActions";

const PendingOrders = () => {
  let dispatch = useDispatch();
  const orderList = useSelector((state) => state.orderList);
  const { error, loading, orders } = orderList;

  const orderActiveDishes = useSelector((state) => state.orderActiveDishes);
  const {
    error: errorActiveDishes,
    loading: loadingActiveDishes,
    activeDishes,
  } = orderActiveDishes;

  const dishList = useSelector((state) => state.dishList);
  const { error: dishListError, loading: dishListloading, dishes } = dishList;

  const [selectedButton, setSelectedButton] = useState("all");

  const [actionsButtonsActive, setActionsButtonsActive] = useState(false);

  useEffect(() => {
    dispatch(listOrders());
    dispatch(listActiveOrderDishes());
    dispatch(listDishes());
  }, []);

  return loading ? (
    <CircularProgress color="secondary" />
  ) : error ? (
    <div>Something went wrong</div>
  ) : (
    <main>
      <NavbarTop />
      <div className="flex flex-col justify-center items-center mb-4 relative w-[calc(100%_-_50px)]">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 px-2 max-w-[1600px]">
          {orders.map((order) => {
            return (
              <div
                key={order.id}
                className="flex flex-col max-w-[300px] self-start mt-4 rounded-b-lg bg-[none]"
              >
                <div className="flex justify-between gap-8 font-bold border border-[#d1d5db] p-2">
                  <div className="flex flex-col w-full">
                    <span className="text-xs">10:33</span>
                    <span className="text-sm">{`${order.table} #${order.table}`}</span>
                  </div>
                  <div className="flex flex-col ">
                    <span
                      className={`text-xs ${
                        order.user.length < 6 ? "" : "break-all"
                      }`}
                    >
                      {order.user}
                    </span>
                    <span className="">{`#${order.id}`}</span>
                  </div>
                </div>

                <div className="flex flex-col ">
                  <div className="flex flex-col  gap-1">
                    {activeDishes ? (
                      <div>
                        {activeDishes
                          .filter(
                            (dishToDisplay) => dishToDisplay.order == order.id //find dish in restaurant to get price
                          )
                          .map(
                            (
                              item // get all active dishes
                            ) => (
                              <div
                                key={item.id}
                                className={`flex flex-col p-2 border-b-2 border-[#d1d5db] rounded-b-lg last:border-b-0 last:rounded-b-lg last:shadow-lg text-[#4b5563] cursor-pointer bg-[#fca5a5]`}
                              >
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-bold">{`Qty: ${item.qty}`}</span>
                                </div>
                                <div className="flex justify-between">
                                  <div className="font-bold text-sm text-right">
                                    {dishes ? (
                                      <div>
                                        {dishList.dishes
                                          .filter(
                                            (dishToDisplay) =>
                                              dishToDisplay.id == item.dish //find dish in restaurant to get price
                                          )
                                          .map((filteredDishToDisplay) => (
                                            <div key={filteredDishToDisplay.id}>
                                              {" "}
                                              <div>
                                                {" "}
                                                {filteredDishToDisplay.title}
                                              </div>
                                            </div>
                                          ))}
                                      </div>
                                    ) : (
                                      <CircularProgress color="secondary" />
                                    )}
                                  </div>
                                </div>
                                {/* =========== Buttons - Ready to go / Close ============== */}
                                {actionsButtonsActive ? (
                                  <div className="flex justify-between">
                                    {" "}
                                    <button
                                      className="font-bold text-sm text-left text-white"
                                      style={{ backgroundColor: "green" }}
                                    >
                                      Ready to go!
                                    </button>
                                    <button
                                      className="font-bold text-sm text-right text-white"
                                      style={{ backgroundColor: "red" }}
                                    >
                                      Close
                                    </button>
                                  </div>
                                ) : (
                                  <></>
                                )}

                                {/* ===========  Buttons - Ready to go / Close ==============  ====== END */}
                              </div>
                            )
                          )}
                      </div>
                    ) : (
                      <CircularProgress color="secondary" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};
export default PendingOrders;
