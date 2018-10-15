import axios from "axios";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./types";

// function that handles async nature of JS and then gets all the items from db and sends dispatch to reducer
export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get("/api/items").then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  );
};
// function that deletes the item from db and sends dispatch to reducer
export const deleteItem = id => dispatch => {
axios.delete(`/api/items/${id}`).then(res =>
    dispatch({
        type:DELETE_ITEM,
        payload: id
    })
    )
};
// function that adds item to db and sends dispatch to reducer
export const addItem = item => dispatch => {
  axios.post("api/items", item).then(res =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
