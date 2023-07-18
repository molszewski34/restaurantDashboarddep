import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import NavbarTop from "../../components/navbars/NavbarTop";
import { listOrderDishes } from "../../actions/dishActions";
import { listOrders } from "../../actions/ordersActions";

import data from "./data.json";

const PendingOrders = () => {
  let dispatch = useDispatch();
  const orderList = useSelector((state) => state.orderList);
  const { error, loading, orders } = orderList;

  const orderDishList = useSelector((state) => state.orderDishList);
  const {
    error: errorDishList,
    loading: loadingDishList,
    orderDishes,
  } = orderDishList;

  console.log(orders);
  console.log(orderDishes);

  const [selectedButton, setSelectedButton] = useState("all");

  useEffect(() => {
    dispatch(listOrders());
    dispatch(listOrderDishes());
  }, []);

  return loading ? (
    <CircularProgress color="secondary" />
  ) : error ? (
    <div>Something went wrong</div>
  ) : (
    <main>
      <NavbarTop />
      <div className="flex flex-col justify-center items-center mb-4 relative w-[calc(100%_-_50px)]">
        <div className="flex flex-col items-center gap-3 my-4 text-sm font-bold fixed top-10 right-0 mr-1 ">
          <button
            // className={`rounded shadow p-2 bg-white border uppercase  ${
            //   selectedButton === "all"
            //     ? " border-[#64748b] border-2"
            //     : "border-[#e2e8f0]"
            // }`}
            className="rounded shadow p-2 bg-white border uppercase"
            // onClick={() => setSelectedButton("all")}
            style={{ writingMode: "vertical-lr" }}
          >
            All
          </button>
          <button
            // className={`rounded shadow border p-2 bg-[#fca5a5] uppercase ${
            //   selectedButton === "new"
            //     ? " border-[#ef4444]  border-2"
            //     : "border-[#fca5a5]"
            // }`}
            className="rounded shadow p-2 bg-white border uppercase"
            // onClick={() => setSelectedButton("new")}
            style={{ writingMode: "vertical-lr" }}
          >
            New
          </button>
          <button
            // className={`rounded shadow p-2 bg-[#a5f3fc] border uppercase align-middle ${
            //   selectedButton === "accepted"
            //     ? "border-[#06b6d4]  border-2"
            //     : "border-[#a5f3fc]"
            // }`}
            className="rounded shadow p-2 bg-white border uppercase"
            // onClick={() => setSelectedButton("accepted")}
            style={{ writingMode: "vertical-lr" }}
          >
            Accepted
          </button>
          <button
            // className={`rounded shadow p-2 border bg-[#fde68a] uppercase ${
            //   selectedButton === "ready"
            //     ? "border-[#f59e0b]  border-2"
            //     : "border-[#fde68a]"
            // }`}
            className="rounded shadow p-2 bg-white border uppercase"
            // onClick={() => setSelectedButton("ready")}
            style={{ writingMode: "vertical-lr" }}
          >
            Ready
          </button>
          <button
            // className={`rounded shadow p-2 bg-[#e2e8f0] border uppercase align-baseline ${
            //   selectedButton === "complete"
            //     ? "border-[#64748b] border-2"
            //     : "border-[#e2e8f0]"
            // }`}
            className="rounded shadow p-2 bg-white border uppercase"
            // onClick={() => setSelectedButton("complete")}
            style={{ writingMode: "vertical-lr" }}
          >
            Completed
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 px-2 max-w-[1600px]">
          {data.orders.map((order) => {
            //Remove not needed statutes from filtering. Please notice, filtering is connected to filtering buttons at the top of file.

            if (order.items.length > 0) {
              const filteredItems = order.items.filter((item) => {
                if (selectedButton === "all") {
                  return !item.isComplete;
                } else if (selectedButton === "new" && item.isNew) {
                  return true;
                } else if (selectedButton === "accepted" && item.isAccepted) {
                  return true;
                } else if (selectedButton === "ready" && item.isReady) {
                  return true;
                } else if (selectedButton === "complete" && item.isComplete) {
                  return true;
                } else {
                  return false;
                }
              });
              if (filteredItems.length === 0) {
                return null;
              }
              return (
                <div
                  key={order.id}
                  className="flex flex-col max-w-[300px] self-start mt-4 rounded-b-lg bg-[none]"
                >
                  {order.items.length > 0 && (
                    <div className="flex justify-between gap-8 font-bold border border-[#d1d5db] p-2">
                      <div className="flex flex-col w-full">
                        <span className="text-xs">
                          {new Date(order.order_time).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: false,
                          })}
                        </span>
                        <span className="text-sm">{`${order.room_name} #${order.table_number}`}</span>
                      </div>
                      <div className="flex flex-col ">
                        <span
                          className={`text-xs ${
                            order.waiter_name.length < 6 ? "" : "break-all"
                          }`}
                        >
                          {order.waiter_name}
                        </span>
                        <span className="">{`#${order.order_number}`}</span>
                      </div>
                    </div>
                  )}
                  <div className="flex flex-col ">
                    <div className="flex flex-col  gap-1">
                      {filteredItems.map((item) => (
                        <div
                          key={item.id}
                          // onMouseDown={() => {
                          //   if (item.isReady) {
                          //     handleOnMouseDown(item.id);
                          //   }
                          // }}
                          // onMouseUp={handleOnMouseUp}
                          className={`flex flex-col p-2 border-b-2 border-[#d1d5db] rounded-b-lg last:border-b-0 last:rounded-b-lg last:shadow-lg text-[#4b5563] cursor-pointer ${
                            item.isNew
                              ? "bg-[#fca5a5]"
                              : item.isAccepted
                              ? "bg-[#a5f3fc]"
                              : item.isReady
                              ? "bg-[#fde68a]"
                              : item.isComplete
                              ? "bg-[#e2e8f0]"
                              : ""
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold">{`x${item.quantity}`}</span>
                            <span className="font-bold text-sm">
                              {item.dish_name}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <div className="font-bold text-right"></div>
                            <div className="font-bold text-right">{`${item.price} $`}</div>
                          </div>
                          {/* {cancelIndex === item.id && item.isReady && (
                            <button
                              className="font-bold bg-[#d1d5db] mt-2"
                              onClick={() => handleCancel(item.id)}
                            >
                              Cancel
                            </button>
                          )} */}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </main>
  );
};
export default PendingOrders;
