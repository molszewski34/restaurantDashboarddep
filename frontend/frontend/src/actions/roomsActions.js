import {
  CREATE_ROOM_REQUEST,
  CREATE_ROOM_SUCCESS,
  CREATE_ROOM_FAIL,
  REMOVE_ROOM_FAIL,
  REMOVE_ROOM_REQUEST,
  REMOVE_ROOM_SUCCESS,
} from "../constants/roomsConstants";

import axios from "axios";
import { listRooms } from "./tablesActions";

export const createRoom = (roomName, rooms) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_ROOM_REQUEST,
    });

    const body = {
      roomName: roomName,
    };

    let userInfo = JSON.parse(localStorage.userInfo);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + String(userInfo.access),
      },
    };

    const { data } = await axios
      .post(
        `/rooms/create-room`,
        body, // if POST request, axios send headers as third parameter
        config
      )
      .then(function (response) {
        if (response.status == 200) {
          alert("Room added");
          dispatch(listRooms());
        } else {
          alert("Something went wrong, response status: ", response.status);
        }
      });

    dispatch({
      type: CREATE_ROOM_SUCCESS,
      payload: { data, rooms },
    });
  } catch (error) {
    dispatch({
      type: CREATE_ROOM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeRoom = (room, rooms) => async (dispatch) => {
  console.log(room);
  try {
    dispatch({
      type: REMOVE_ROOM_REQUEST,
    });

    let userInfo = JSON.parse(localStorage.userInfo);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + String(userInfo.access),
      },
    };

    const { data } = await axios
      .delete(`rooms/remove-room/${room.id}`, config)
      .then(function (response) {
        if (response.status == 200) {
          alert("Room removed");
          // Get all tables again after remove
          dispatch(listRooms());
        } else {
          alert("Something went wrong, status code: ", response.status);
        }
      });
  } catch (error) {
    dispatch({
      type: REMOVE_ROOM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
