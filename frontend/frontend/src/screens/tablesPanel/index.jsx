import React, { useState } from "react";
import NavbarTop from "../../components/navbars/NavbarTop";
import ModalTablesPanel from "../../components/modals/ModalTablesPanel";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listTables, listRooms } from "../../actions/tablesActions";
import { listOrders } from "../../actions/ordersActions";
import CircularProgress from "@mui/material/CircularProgress";
import { MdTableBar } from "react-icons/md";

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

  const [modalOpen, setModalOpen] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [selectedMaxNumOfGuests, setSelectedMaxNumOfGuests] = useState(null);

  return loading ? (
    <CircularProgress color="secondary" />
  ) : error ? (
    <div>Something went wrong</div>
  ) : (
    <main className="bg-secondary-bg-color h-screen relative">
      <NavbarTop />
      <h1 className="font-bold text-[#374151] text-3xl text-center pl-2 my-4 ml-2 ">
        Tables
      </h1>
      {rooms.map((room) => (
        <section key={room.id} className="p-2">
          <header className=" flex items-center text-lg text-[#374151] mb-2">
            <MdTableBar className="text-lg text-white bg-[#ea580c] rounded-full p-1 w-6 h-6 mr-2 border border-white shadow" />
            {room.name}
          </header>
          <div className="grid grid-cols-4 place-content-center gap-1 gap-y-3 mb-5 bg-secondary-bg-color grid-flow-row">
            {/* TUTAJ JEST DIV Z NAZWĄ POKOJU */}

            {tables
              .filter((table) => table.room == room.id)
              .map((filderedTable) => (
                <button
                  key={filderedTable.id}
                  onClick={() => {
                    setSelectedMaxNumOfGuests(filderedTable.numberOfPersons);
                    setModalOpen(true);
                    setOverlay(true);
                  }}
                  className="flex flex-col items-center justify-center bg-white hover:bg-gray-light  duration-200 font-bold border-2 border-primary-bg-color rounded shadow"
                  style={
                    filderedTable.isOccupied ? { backgroundColor: "red" } : {}
                  }
                >
                  <span className="text-3xl">
                    {" "}
                    #{filderedTable.tableNumber}
                  </span>{" "}
                  <span>1-{filderedTable.numberOfPersons}</span>
                </button>
              ))}
          </div>
        </section>
      ))}
      {modalOpen && (
        <div className="fixed z-20 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <ModalTablesPanel
            maxNumOfGuests={selectedMaxNumOfGuests}
            closeModal={() => setModalOpen(false)}
            closeOverlay={() => setOverlay(false)}
          />
        </div>
      )}
      {overlay && (
        <div className="absolute z-10 top-0 bottom-0 left-0 right-0 bg-[#000] opacity-40"></div>
      )}
    </main>
  );
};

export default TablesPanel;
