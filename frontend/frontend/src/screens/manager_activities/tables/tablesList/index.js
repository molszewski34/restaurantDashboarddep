import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import NavbarManagmentPanel from "../../../../components/navbars/NavbarManagmentPanel";
import NavbarManagmentPanelSide from "../../../../components/navbars/NavbarManagmentPanelSide";
import CircularProgress from "@mui/material/CircularProgress";
import { listTables, listRooms } from "../../../../actions/tablesActions";
import { createRoom } from "../../../../actions/roomsActions";

const TablesList = () => {
  const roomsList = useSelector((state) => state.roomsList);
  const { error, loading, rooms } = roomsList;
  const tableList = useSelector((state) => state.tableList);
  const {
    error: tableListError,
    loading: tableListLoading,
    tables,
  } = tableList;

  const [newRoomName, setNewRoomName] = useState("");
  const [addRoomIsActive, setAddRoomIsActive] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listTables());
    dispatch(listRooms());
  }, []);
  return loading ? (
    <CircularProgress color="secondary" />
  ) : error ? (
    <div>Something went wrong</div>
  ) : (
    <div className="flex flex-col relative h-screen w-full">
      <NavbarManagmentPanel />
      <NavbarManagmentPanelSide />
      <main className="my-4 px-1 flex flex-col md:absolute md:h-screen md:w-[calc(100%_-_270px)]  md:p-[30px] md:left-[270px] md:top-0;">
        <header className="font-bold py-1 border-b text-2xl border-[#cbd5e1]">
          Rooms
        </header>

        <div className="flex">
          {addRoomIsActive ? (
            <label for="">
              <input
                className="h-8 m-2 border rounded-md border-[#cbd5e1]"
                type="text "
                placeholder="Name of Room"
                onChange={(e) => {
                  setNewRoomName(e.target.value);
                }}
              />
            </label>
          ) : (
            <></>
          )}

          <button
            className="border h-8 place-self-start border-[#cbd5e1]  py-1 px-3 text-sm my-2 text-[#0369a1] font-bold rounded-md hover:bg-[#f1f5f9]"
            onClick={() => {
              setAddRoomIsActive(!addRoomIsActive);
              if (addRoomIsActive) {
                dispatch(createRoom(newRoomName, rooms));
                setTimeout(() => {
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                  });
                }, 300);
              }
            }}
          >
            {addRoomIsActive ? "+ Add" : "+ Add room"}
          </button>
        </div>

        <section className="mt-4 flex flex-col gap-4">
          <header className=" font-bold border-b border-[#cbd5e1] pl-2">
            Name
          </header>
          {/*  */}
          {roomsList ? (
            <>
              {" "}
              {rooms.map((room) => (
                <div key={room.id} className="flex flex-col ">
                  <div className="flex justify-between px-2 bg-[#e5e7eb] py-2 border-b border-white">
                    <Link
                      to={`/tablesList/${room.id}`}
                      className="uppercase text-sm font-bold text-[#0369a1]"
                    >
                      {room.name}
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 px-2 font-bold py-2 border-b border-r border-l border-[#e5e7eb] text-sm ">
                    <p>Table Number</p>
                    <p>Max Guests</p>
                  </div>
                  {tables
                    .filter((table) => table.room === room.id)
                    .map((filteredTable) => (
                      <div className="grid grid-cols-2 px-2  py-2  border-b border-r border-l border-[#e5e7eb] text-sm ">
                        <p>{filteredTable.tableNumber}</p>
                        <p>{filteredTable.numberOfPersons}</p>
                      </div>
                    ))}
                  <Link
                    to={`/tablesList/${room.id}`}
                    className="border flex place-self-start border-[#cbd5e1]  py-1 px-3 text-sm my-2 text-[#0369a1] font-bold rounded-md hover:bg-[#f1f5f9]"
                  >
                    + Add tables
                  </Link>
                </div>
              ))}
            </>
          ) : (
            <CircularProgress color="secondary" />
          )}
        </section>
      </main>
    </div>
  );
};

export default TablesList;
