import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import NavbarManagmentPanel from "../../../../components/navbars/NavbarManagmentPanel";
import NavbarManagmentPanelSide from "../../../../components/navbars/NavbarManagmentPanelSide";
import CircularProgress from "@mui/material/CircularProgress";
import { listTables, listRooms } from "../../../../actions/tablesActions";
import { createRoom } from "../../../../actions/roomsActions";
import { createNewTable, removeTable } from "../../../../actions/tablesActions";
import { removeRoom } from "../../../../actions/roomsActions";

import ClearIcon from "@mui/icons-material/Clear";

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
  const [activeRoom, setActiveRoom] = useState("");
  const [numberOfGusets, setnumberOfGusets] = useState(1);

  const handleTableSubmit = (e) => {
    // room, numberOfPersons, tables, rooms
    e.preventDefault();

    dispatch(createNewTable(activeRoom, numberOfGusets, tables, rooms));
  };

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
        {/* SECTION : ADD ROOM */}
        <div className="flex">
          {addRoomIsActive ? (
            <label>
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
                if (newRoomName != "") {
                  dispatch(createRoom(newRoomName, rooms));
                  setTimeout(() => {
                    window.scrollTo({
                      top: document.body.scrollHeight,
                      behavior: "smooth",
                    });
                  }, 500);
                } else {
                  setAddRoomIsActive(!addRoomIsActive);
                }
              }
            }}
          >
            {addRoomIsActive ? "+ Add" : "+ Add room"}
          </button>
        </div>

        {/* SECTION : ADD ROOM ++ END */}

        <section className="mt-4 flex flex-col gap-4">
          <header className=" font-bold border-b border-[#cbd5e1] pl-2">
            Name
          </header>
          {/*  */}
          {roomsList ? (
            <>
              {" "}
              {rooms.map((room) => (
                //  DISPLAY ROOM NAMES
                <div key={room.id} className="flex flex-col ">
                  <div className="flex justify-between px-2 bg-[#e5e7eb] py-2 border-b border-white">
                    <div
                      key={room.id}
                      className="uppercase text-sm font-bold text-[#0369a1]"
                    >
                      {room.name}
                    </div>
                    <button
                      className="text-[#dc2626] cursor-pointer"
                      type=""
                      onClick={() => {
                        dispatch(removeRoom(room, rooms));
                      }}
                    >
                      Remove
                    </button>
                  </div>
                  {/* // DISPLAY TABLES */}
                  <div className="grid grid-cols-3 px-2 font-bold py-2 border-b border-r border-l border-[#e5e7eb] text-sm ">
                    <p>Table Number</p>
                    <p>Max Guests</p>
                    <p>Remove</p>
                  </div>
                  {tables
                    .filter((table) => table.room === room.id)
                    .map((filteredTable) => (
                      <div
                        key={filteredTable.id}
                        className="grid grid-cols-3 px-2  py-2  border-b border-r border-l border-[#e5e7eb] text-sm "
                      >
                        <p>{filteredTable.tableNumber}</p>
                        <p>{filteredTable.numberOfPersons}</p>
                        <p
                          className="text-[#dc2626] cursor-pointer"
                          onClick={() => {
                            console.log("remove table");
                            dispatch(removeTable(filteredTable, tables));
                          }}
                        >
                          <ClearIcon />
                        </p>
                      </div>
                    ))}
                  {/* SECTION : ADD TABLE */}
                  <div className="flex">
                    {/* SHOW INPUT IF 'ADD TABLE' BUTOON WAS CLICKED */}
                    {activeRoom == `${room.name}` ? (
                      <>
                        <form
                          onSubmit={(e) => {
                            handleTableSubmit(e, rooms, tables);
                          }}
                        >
                          <label>Number of guests</label>
                          <select
                            name="languages"
                            id="lang"
                            onChange={(e) => {
                              // set number of guests
                              setnumberOfGusets(e.target.value);
                            }}
                          >
                            {/* CHOOSE NUMBER OF GUESTS */}
                            {Array.apply(0, Array(9)).map(function (x, i) {
                              return (
                                <option key={i + 1} value={i + 1}>
                                  {i + 1}
                                </option>
                              );
                            })}
                          </select>
                          {/* SUBMIT BUTTON */}
                          <button
                            type="submit"
                            className="border h-8 place-self-start border-[#cbd5e1]  py-1 px-3 text-sm my-2 text-[#0369a1] font-bold rounded-md hover:bg-[#f1f5f9]"
                          >
                            Add
                          </button>
                        </form>
                        {/* CANCEL BUTTON - SET ACTIVE ROOM TO '' */}
                        <button
                          className="border h-8 place-self-start border-[#cbd5e1]  py-1 px-3 text-sm my-2 text-[#0369a1] font-bold rounded-md hover:bg-[#f1f5f9]"
                          onClick={() => {
                            setActiveRoom("");

                            if (newRoomName != "") {
                              console.log("add table");
                            }
                          }}
                        >
                          cancel
                        </button>
                      </>
                    ) : (
                      // SET ACTIVE ROOM TO ROOM NAME
                      <button
                        data-key={room.name}
                        className="border h-8 place-self-start border-[#cbd5e1]  py-1 px-3 text-sm my-2 text-[#0369a1] font-bold rounded-md hover:bg-[#f1f5f9]"
                        onClick={(e) => {
                          console.log(e.target.getAttribute("data-key"));

                          setActiveRoom(e.target.getAttribute("data-key"));
                        }}
                      >
                        + Add table
                      </button>
                    )}
                  </div>
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
