import {
  CATEGORIES_LIST_REQUEST,
  CATEGORIES_LIST_SUCCESS,
  CATEGORIES_LIST_FAIL,
} from "../constants/categoriesConstants";

import axios from "axios";

// ==============  LIST CATEGORIES ====================
export const listCategories = () => async (dispatch) => {
  try {
    dispatch({ type: CATEGORIES_LIST_REQUEST });
    // =============== JWT AUTHORIZATION ==============================
    let userInfo = JSON.parse(localStorage.userInfo);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + String(userInfo.access),
      },
    };
    const { data } = await axios.get("dishes/get-categories", config);
    dispatch({
      type: CATEGORIES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORIES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// ==============  LIST CATEGORIES === END ====================

// ==============  CREATE NEW CATEGORY IN RESTAURANT ====================

export const createNewCategory = (categoryName, colour) => async (dispatch) => {
  try {
    let userInfo = JSON.parse(localStorage.userInfo);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + String(userInfo.access),
      },
    };
    // DATA SENT TO BACKEND
    const body = {
      title: categoryName,
      colour: colour,
    };

    const data = await axios
      .post("dishes/create-category", body, config)
      .then(function (response) {
        if (response.status == 200) {
          //if response is 200, list categories again.
          alert("Create category status: OK");
          dispatch(listCategories());
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

// ==============  CREATE NEW CATEGORY IN RESTAURANT === END ====================

// ==============  REMOVE CATEGORY FROM RESTAURANT ====================

export const removeCategory = (categoryId) => async (dispatch) => {
  try {
    let userInfo = JSON.parse(localStorage.userInfo);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + String(userInfo.access),
      },
    };

    const data = await axios
      .delete(`dishes/delete-category/${categoryId}`, config)
      .then(function (response) {
        if (response.status == 200) {
          //if response is 200, alert 'status ok', dispatch - listCategories
          alert("Remove category status: OK");
          dispatch(listCategories());
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

// ==============  REMOVE CATEGORY FROM RESTAURANT === END ====================
