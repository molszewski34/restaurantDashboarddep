import React from "react";
import NavbarTop from "../../components/NavbarTop";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listTables, listRooms } from "../../actions/tablesActions";
import { listOrders } from "../../actions/ordersActions";
import CircularProgress from "@mui/material/CircularProgress";

const TablesPanel = () => {
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { error, loading, orders } = orderList;

  const tableList = useSelector((state) => state.tableList);
  const {
    error: tableListError,
    loading: tableListLoading,
    tables,
  } = tableList;

  const roomsList = useSelector((state) => state.roomsList);
  const { error: roomsListError, loading: roomsListLoading, rooms } = roomsList;

  console.log(tables);

  const userLogin = useSelector((state) => state.userLogin);
  const {
    error: userLoginError,
    loading: userLoginLoading,
    userInfo,
  } = userLogin;

  useEffect(() => {
    dispatch(listTables());
    dispatch(listRooms());
    dispatch(listOrders());
  }, []);

  return loading ? (
    <CircularProgress color="secondary" />
  ) : error ? (
    <div>Something went wrong</div>
  ) : (
    <main className="bg-secondary-bg-color h-screen">
      <NavbarTop />
      {rooms.map((room) => (
        <section
          key={room.id}
          className="grid grid-cols-4 grid-rows-layout-tablesPanel place-content-center gap-1 gap-y-3 mt-5 p-2  bg-secondary-bg-color grid-flow-row"
        >
          {/* TUTAJ JEST DIV Z NAZWĄ POKOJU */}
          <div>{room.name}</div>
          {tables
            .filter((table) => table.room == room.id)
            .map((filderedTable) => (
              <button
                key={filderedTable.id}
                className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow"
              >
                <span className="text-3xl"> #{filderedTable.tableNumber}</span>{" "}
                <span>1-{filderedTable.numberOfPersons}</span>
              </button>
            ))}
        </section>
      ))}
    </main>
  );
};

export default TablesPanel;
