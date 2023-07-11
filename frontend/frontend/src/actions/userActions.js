import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  EMPLOYEE_LIST_REQUEST,
  EMPLOYEE_LIST_SUCCESS,
  EMPLOYEE_LIST_FAIL,
  USER_CREATE_FAIL,
  USER_CREATE,
  POSITIONS_LIST_FAIL,
  POSITIONS_LIST_SUCCESS,
  POSITIONS_LIST_REQUEST,
  EMPLOYEE_DETAILS_REQUEST,
  EMPLOYEE_DETAILS_SUCCESS,
  EMPLOYEE_DETAILS_FAIL,
} from "../constants/userConstants";
import axios from "axios";

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/user/login/`,
      {
        username: username,
        password: password,
      },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createNewUser =
  (name, email, position, password) => async (dispatch) => {
    try {
      dispatch({
        type: USER_CREATE,
        payload: {
          name,
          email,
          position,
          password,
        },
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
        body: {
          name: name,
          email: email,
          position: position,
          password: password,
        },
      };

      const { data } = await axios.post("/user/create/", config);
    } catch (error) {
      dispatch({
        type: USER_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    });

    let userInfo = JSON.parse(localStorage.userInfo);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + String(userInfo.access),
      },
    };

    const { data } = await axios.get(`/user/users/`, config);

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getEmployees = () => async (dispatch) => {
  try {
    dispatch({
      type: EMPLOYEE_LIST_REQUEST,
    });

    const { data } = await axios.get("/user/employees/");
    dispatch({
      type: EMPLOYEE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EMPLOYEE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getEmployeeById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: EMPLOYEE_DETAILS_REQUEST,
    });
    //Get user info from local storage
    let userInfo = JSON.parse(localStorage.userInfo);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + String(userInfo.access),
      },
    };
    const { data } = await axios.get(`/user/employees/${id}`);
    dispatch({
      type: EMPLOYEE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EMPLOYEE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    alert(error);
  }
};

export const editEmployee =
  (id, fullName, email, phoneNumber, position, isCashier, isDriver) =>
  async (dispatch) => {
    try {
      //Get user info from local storage
      let userInfo = JSON.parse(localStorage.userInfo);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + String(userInfo.access),
        },
      };
      // data sent to the backend
      const body = {
        name: fullName,
        email: email,
        phone: phoneNumber,
        position: position,
        isCashier: isCashier,
        isDriver: isDriver,
      };

      const { data } = await axios.put(
        `user/edit-employee/${id}`,
        body,
        config
      );
    } catch (error) {
      alert(error);
    }
  };

// Get types of pissible employees positions from Data base
export const getEmployeePositions = () => async (dispatch) => {
  try {
    dispatch({
      type: POSITIONS_LIST_REQUEST,
    });
    //Get user info from local storage
    let userInfo = JSON.parse(localStorage.userInfo);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + String(userInfo.access),
      },
    };

    const { data } = await axios.get("user/positions/", config);
    dispatch({
      type: POSITIONS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POSITIONS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createNewEmployee =
  (fullName, email, phoneNumber, position, isCashier, isDriver) =>
  async (dispatch) => {
    try {
      let userInfo = JSON.parse(localStorage.userInfo);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + String(userInfo.access),
        },
      };

      const body = {
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        position: position,
        isCashier: isCashier,
        isDriver: isDriver,
      };

      const data = await axios
        .post("/user/create-employee/", body, config)
        .then(function (response) {
          if (response.status == 200) {
            //if response is 200, display status OK
            alert("Edd Employee status: OK");
          } else {
            alert("Something went wrong, status code: ", response.status);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

export const logout = () => async (dispatch) => {
  console.log("Logout");
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};
