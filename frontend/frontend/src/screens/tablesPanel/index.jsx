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
      <section className="grid grid-cols-4 grid-rows-layout-tablesPanel place-content-center gap-1 gap-y-3 mt-5 p-2  bg-secondary-bg-color grid-flow-row">
        {tables.map((table) => (
          <button
            key={table.id}
            className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow"
          >
            <span className="text-3xl">
              {" "}
              {rooms
                .filter((room) => room.id == table.room)
                .map((filteredRoom) => (
                  <div key={filteredRoom.id}>{filteredRoom.name}</div>
                ))}{" "}
              #{table.tableNumber}
            </span>{" "}
            <span>1-{table.numberOfPersons}</span>
          </button>
        ))}

        {/* <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border border-primary-bg-color rounded shadow">
          <span className="text-3xl">123</span> <span>1-4</span>
        </button> */}
      </section>
    </main>
  );
};

export default TablesPanel;
