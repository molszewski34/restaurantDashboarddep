import {
  TABLES_LIST_REQUEST,
  TABLES_LIST_SUCCESS,
  TABLES_LIST_FAIL,
  ROOMS_LIST_REQUEST,
  ROOMS_LIST_SUCCESS,
  ROOMS_LIST_FAIL,
  CREATE_NEW_TABLE,
  CREATE_NEW_TABLE_FAIL,
  REMOVE_TABLE_FAIL,
  REMOVE_TABLE,
} from "../constants/tablesConstants";

import axios from "axios";

// ================= Get list of tables in restaurant ===========

export const listTables = () => async (dispatch) => {
  try {
    dispatch({
      type: TABLES_LIST_REQUEST,
    });

    // ================= JWT Authorization data ===========

    let userInfo = JSON.parse(localStorage.userInfo);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + String(userInfo.access),
      },
    };

    const { data } = await axios.get("/orders/get-tables", config);

    dispatch({
      type: TABLES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TABLES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// ================= Get list of rooms in restaurant ===========

export const listRooms = () => async (dispatch) => {
  try {
    dispatch({
      type: ROOMS_LIST_REQUEST,
    });

    // ================= JWT Authorization data ===========

    let userInfo = JSON.parse(localStorage.userInfo);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + String(userInfo.access),
      },
    };

    const { data } = await axios.get("/orders/get-rooms", config);

    dispatch({
      type: ROOMS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ROOMS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// ================= Create new table in restaurant ===========
export const createNewTable =
  (room, numberOfPersons, tables, rooms) => async (dispatch) => {
    function findTableRoom(tableRoom) {
      return tableRoom.name === room;
    }

    // Find table room
    let roomObject = rooms.find(function (filteredRoom) {
      return filteredRoom.name == room;
    });

    //table array is used to get number of next table
    let tableArray = tables.filter(function (filteredTable) {
      return filteredTable.room === roomObject.id;
    });

    const tableRoomToSend = rooms.find(findTableRoom);

    // Data to be sent to the backend
    const tableData = {
      room: tableRoomToSend,
      tableNumber: tableArray.length,
      numberOfPersons: numberOfPersons,
      isOccupied: false,
    };
    try {
      dispatch({
        type: CREATE_NEW_TABLE,
        payload: {
          tableData,
          tables,
        },
      });

      const body = {
        tableData: tableData,
      };
      // ================= JWT Authorization data ===========
      let userInfo = JSON.parse(localStorage.userInfo);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + String(userInfo.access),
        },
      };

      // Sending data to backend
      const { data } = await axios
        .post("orders/create-new-table", body, config)
        .then(function (response) {
          if (response.status == 200) {
            //if response is 200, list tables again. It`s nesesary to get the correct table ID
            alert("Create Table status: OK");
            dispatch(listTables());
          } else {
            alert("Something went wrong, status code: ", response.status);
          }
        });
    } catch (error) {
      dispatch({
        type: REMOVE_TABLE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// ================= Remove table from restaurant ===========
export const removeTable = (id) => async (dispatch) => {
 

  try {
 
    // ================= JWT Authorization data ===========
    let userInfo = JSON.parse(localStorage.userInfo);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + String(userInfo.access),
      },
    };

    // delete table - request
    const { data } = await axios
      .delete(`orders/remove-table/${id}`, config)
      .then(function (response) {
        if (response.status == 200) {
          alert("Table removed");
          // Get all tables again after remove
          dispatch(listTables());
        } else {
          alert("Something went wrong, status code: ", response.status);
        }
      });
  } catch (error) {
    dispatch({
      type: CREATE_NEW_TABLE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// ================= Remove table from restaurant ==== END ===========
