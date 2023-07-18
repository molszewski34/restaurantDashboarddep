import axios from "axios";

import {
  DISH_LIST_REQUEST,
  DISH_LIST_SUCCESS,
  DISH_LIST_FAIL,
  ORDER_DISH_LIST_REQUEST,
  ORDER_DISH_LIST_SUCCESS,
  ORDER_DISH_LIST_FAIL,
  ADD_DISH_TO_MENU_FAIL,
  REMOVE_DISH_FROM_MENU,
  REMOVE_DISH_FROM_MENU_FAIL,
  ORDER_ACTIVE_DISH_LIST_REQUEST,
  ORDER_ACTIVE_DISH_LIST_SUCCESS,
  ORDER_ACTIVE_DISH_LIST_FAIL,
} from "../constants/dishConstants";

export const listDishes = () => async (dispatch) => {
  try {
    dispatch({ type: DISH_LIST_REQUEST });
    const { data } = await axios.get("/dishes/get-dishes");
    dispatch({
      type: DISH_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DISH_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// List ordered dishes By order Id
export const listOrderDishes = (id) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_DISH_LIST_REQUEST }); // Dispatch an action to indicate the start of the order dish listing request
    const { data } = await axios.get("/dishes/get-order-dishes"); // Send a GET request to fetch all order dishes

    const orderedDishes = data.filter((el) => el.order == id); // Filter the fetched data to get order dishes for the specified ID

    dispatch({
      type: ORDER_DISH_LIST_SUCCESS,// Dispatch an action to indicate the successful listing of order dishes
      payload: orderedDishes,  // Pass the filtered order dishes as the payload
    });
  } catch (error) {
    dispatch({
      type: ORDER_DISH_LIST_FAIL, // Dispatch an action to indicate the failure of the order dish listing request
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message, // Pass the error message as the payload
    });
  }
};


// List ordered active dishes 
export const listActiveOrderDishes = () => async (dispatch) => {
  try {
    dispatch({ type: ORDER_ACTIVE_DISH_LIST_REQUEST }); // Dispatch an action to indicate the start of the order dish listing request
    const { data } = await axios.get("/dishes/get-active-ordered-dishes"); // Send a GET request to fetch all order dishes

    const orderedActiveDishes = data.filter((el) => el.isActive == true); // Filter the fetched data to get order dishes for the specified ID
    console.log(orderedActiveDishes)
    dispatch({
      type: ORDER_ACTIVE_DISH_LIST_SUCCESS,// Dispatch an action to indicate the successful listing of order dishes
      payload: orderedActiveDishes,  // Pass the filtered order dishes as the payload
    });
  } catch (error) {
    dispatch({
      type: ORDER_ACTIVE_DISH_LIST_FAIL, // Dispatch an action to indicate the failure of the order dish listing request
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message, // Pass the error message as the payload
    });
  }
};




export const addDishToMenu =
  (category, dishName, dishPrice) => async (dispatch) => {
    try {

      // ================= JWT Authorization data ===========
    let userInfo = JSON.parse(localStorage.userInfo);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + String(userInfo.access),
      },
    };
   
        const body = {
          category: category, //categoryName
          title: dishName, //dishName
          price: dishPrice, //dishPrice
        }
      
      const data = await axios
        .post("/dishes/add-dish",body, config)
        .then(function (response) {
          if (response.status == 200) {
            //if response is 200, display OK alert
            alert("Add new dish status: OK");
            dispatch(listDishes());
          } else {
            alert("Something went wrong, status code: ", response.status);
          }
        });
    } catch (error) {
      dispatch({
        type: ADD_DISH_TO_MENU_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const editDish = (id, title, price) => async (dispatch) => {
  try {
    // ================= JWT Authorization data ===========
    let userInfo = JSON.parse(localStorage.userInfo);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + String(userInfo.access),
      },
    };

    const body = {
      title: title,
      price: price,
    };

    const data = await axios
      .put(`/dishes/edit-dish/${id}`, body, config)
      .then(function (response) {
        if (response.status == 200) {
          //if response is 200, display OK alert
          alert("Edit dish status: OK");
          dispatch(listDishes());
        } else {
          alert("Something went wrong, status code: ", response.status);
        }
      });
  } catch (error) {
    alert(error);
  }
};

export const removeDishFromMenu =
  (dishes, filteredDish) => async (dispatch) => {
    const dishesAfterRemove = dishes.filter((el) => el.id != filteredDish.id);

    try {
      dispatch({
        type: REMOVE_DISH_FROM_MENU,
        payload: {
          dishesAfterRemove,
        },
      });

      // ================= JWT Authorization data ===========
      let userInfo = JSON.parse(localStorage.userInfo);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + String(userInfo.access),
        },
      };
      const data = await axios
        .delete(`/dishes/delete-dish/${filteredDish.id}`, config)
        .then(function (response) {
          if (response.status == 200) {
            //if response is 200, display OK alert
            alert("Remove dish status: OK");
            dispatch(listDishes());
          } else {
            alert("Something went wrong, status code: ", response.status);
          }
        });
    } catch (error) {
      dispatch({
        type: REMOVE_DISH_FROM_MENU_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
