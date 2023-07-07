import {
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_CREATE_SUCCESS,
  PAST_ORDERS_LIST_REQUEST,
  PAST_ORDERS_LIST_SUCCESS,
  PAST_ORDERS_LIST_FAIL,
  CHANGE_DISH_QTY,
  ORDER_ADD_NEW_ITEM,
  ORDER_DELETE_ITEM,
} from "../constants/orderConstants";

let newTotalPrice;

export const orderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return {
        loading: true,
      };
    case ORDER_LIST_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };

    case ORDER_LIST_FAIL:
      return {
        loading: false,
        orders: action.payload,
      };

    case ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };

    default:
      return state;
  }
};

export const pastOrdersListReducer = (state = { pastOrders: [] }, action) => {
  switch (action.type) {
    case PAST_ORDERS_LIST_REQUEST:
      return {
        loading: true,
      };
    case PAST_ORDERS_LIST_SUCCESS:
      return {
        loading: false,
        pastOrders: action.payload,
      };

    case PAST_ORDERS_LIST_FAIL:
      return {
        loading: false,
        pastOrders: action.payload,
      };

    default:
      return state;
  }
};

export const orderDetailReducer = (
  state = { loading: true, order: [] },
  action
) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };

    case CHANGE_DISH_QTY:
      newTotalPrice =
        parseFloat(state.order.totalPrice) +
        parseFloat(action.payload.priceValueToChange);

      state.order.totalPrice = newTotalPrice.toFixed(2);

      return {
        loading: false,
        order: state.order,
      };

    case ORDER_ADD_NEW_ITEM:
      let priceToAdd = action.payload.qty * action.payload.filteredDish.price;
      newTotalPrice =
        parseFloat(state.order.totalPrice) + parseFloat(priceToAdd);

      state.order.totalPrice = newTotalPrice.toFixed(2);
      return {
        loading: false,
        order: state.order,
      };

    case ORDER_DETAILS_FAIL:
      return {
        loading: false,
        order: state.order,
      };

    default:
      return state;
  }
};
