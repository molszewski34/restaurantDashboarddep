import {
  CREATE_ROOM_REQUEST,
  CREATE_ROOM_SUCCESS,
  CREATE_ROOM_FAIL,
  REMOVE_ROOM_FAIL,
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
        }
        if (response.status == 403) {
          alert("You don`t have permission to do that");
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

export const removeRoom = (id) => async (dispatch) => {
  try {
    // ======== JWT AUTHORIZATION DATA ==============
    let userInfo = JSON.parse(localStorage.userInfo);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + String(userInfo.access),
      },
    };

    const data = await axios
      .delete(`rooms/remove-room/${id}`, config)
      .then(function (response) {
        if (response.status == 200) {
          alert("Room removed");
          // Get all room again after remove
          dispatch(listRooms());
        }
        if (response.status == 403) {
          alert("You don`t have permission to do that");
        } else {
          alert("Something went wrong, status code: ", response.status);
        }
      });
  } catch (error) {
    alert(error);
  }
};
