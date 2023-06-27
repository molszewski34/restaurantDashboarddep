import {
  CREATE_ROOM_REQUEST,
  CREATE_ROOM_SUCCESS,
  CREATE_ROOM_FAIL,
} from "../constants/roomsConstants";

import axios from "axios";

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

    const { data } = await axios.post(
      `/rooms/create-room`,
      body, // if POST request, axios send headers as third parameter
      config
    );

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
