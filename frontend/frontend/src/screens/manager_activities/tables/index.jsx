import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import NavbarTop from "../../../components/navbars/NavbarTop";
import CircularProgress from "@mui/material/CircularProgress";

import "./index.css";

const Tables = () => {
  const dispatch = useDispatch();

  const roomsList = useSelector((state) => state.roomsList);
  const { error, loading, rooms } = roomsList;

  const [activeRoom, setActiveRoom] = useState(0);
  return loading ? (
    <CircularProgress color="secondary" />
  ) : error ? (
    <div>Something went wrong</div>
  ) : (
    <div>
      <NavbarTop />

      <section className="rooms">
        <ul className="flex ">
          {rooms.map((room) => (
            <li
              // className={` mx-2 w-full ${activeRoom === room.id ? "" : ""}`}
              onClick={() => {
                setActiveRoom(room.id);
              }}
              key={room.id}
            >
              {room.name}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <div className="grid grid-rows-4 gap-4">
          <div className="grid grid-cols-5 gap-1">
            <div>1a</div>
            <div>1a</div>
            <div>1a</div>
            <div>1a</div>
          </div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </section>
    </div>
  );
};

export default Tables;
