import React from "react";
import NavbarTop from "../../components/NavbarTop";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listTables, listRooms } from "../../actions/tablesActions";
import { listOrders } from "../../actions/ordersActions";
import CircularProgress from "@mui/material/CircularProgress";
import {MdTableBar} from 'react-icons/md'
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
      <h1 className="font-bold text-[#374151] text-3xl text-center pl-2 my-4 ml-2 ">Tables</h1>
      {rooms.map((room) => (
   <section className="p-2">
         <header className=" flex items-center text-lg text-[#374151] mb-2">
          <MdTableBar className="text-lg text-white bg-[#ea580c] rounded-full p-1 w-6 h-6 mr-2 border border-white shadow"/>
          {room.name}
          </header>
        <div
          key={room.id}
          className="grid grid-cols-4 place-content-center gap-1 gap-y-3 mb-5 bg-secondary-bg-color grid-flow-row"
        >
          {/* TUTAJ JEST DIV Z NAZWĄ POKOJU */}
     
          {tables
            .filter((table) => table.room == room.id)
            .map((filderedTable) => (
              <button
                key={filderedTable.id}
                className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border-2 border-primary-bg-color rounded shadow"
                // disabled= {true}
              >
                
                <span className="text-3xl"> #{filderedTable.tableNumber}</span>{" "}
                <span>1-{filderedTable.numberOfPersons}</span>
              </button> 
            ))}
        </div>
        </section>
      ))}
    </main>
  );
};

export default TablesPanel;
