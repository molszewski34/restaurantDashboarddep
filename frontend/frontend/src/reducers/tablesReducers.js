import {
  TABLES_LIST_REQUEST,
  TABLES_LIST_SUCCESS,
  TABLES_LIST_FAIL,
  ROOMS_LIST_REQUEST,
  ROOMS_LIST_SUCCESS,
  ROOMS_LIST_FAIL,
  CREATE_NEW_TABLE,
  REMOVE_TABLE,
} from "../constants/tablesConstants";

import { CREATE_ROOM_SUCCESS } from "../constants/roomsConstants";

export const listTablesReducer = (state = { tables: [] }, action) => {
  switch (action.type) {
    case TABLES_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case TABLES_LIST_SUCCESS:
      return {
        loading: false,
        tables: action.payload,
      };

    case CREATE_NEW_TABLE:
      const tablesFromAction = action.payload.tables;
      const tableToAdd = {
        id: action.payload.tables.length + 1,
        isOccupied: false,
        numberOfPersons: action.payload.tableData.numberOfPersons,
        room: action.payload.tableData.room.id,
        tableNumber: action.payload.tableData.tableNumber + 1,
      };

      return {
        loading: false,
        tables: [...tablesFromAction, tableToAdd],
      };

    case REMOVE_TABLE:
      const tablesFromRemoveAction = action.payload.tablesAfterRemove;

      return {
        loading: false,
        tables: [...tablesFromRemoveAction],
      };

    case TABLES_LIST_FAIL:
      return {
        loading: false,
        tables: action.payload,
      };
    default:
      return state;
  }
};

export const listRoomsReducer = (state = { rooms: [] }, action) => {
  switch (action.type) {
    case ROOMS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ROOMS_LIST_SUCCESS:
      return {
        loading: false,
        rooms: action.payload,
      };

    case CREATE_ROOM_SUCCESS: {
      // getting old array of rooms
      const roomsFromAction = action.payload.rooms;

      //create table object
      const roomToAdd = {
        id: action.payload.rooms.length + 1,
        name: action.payload.data.name,
      };

      return {
        loading: false,
        rooms: [...roomsFromAction, roomToAdd],
      };
    }

    case ROOMS_LIST_FAIL:
      return {
        loading: false,
        rooms: action.payload,
      };
    default:
      return state;
  }
};
