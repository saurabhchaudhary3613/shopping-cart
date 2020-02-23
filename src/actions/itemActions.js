import {
  GET_ITEMS,
  SET_LOADING,
  ITEMS_ERROR,
  SEARCH_ITEMS,
  SORT_HIGH_LOW
} from './types';

// GET ITEMS from server
export const getItems = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/items');
    const data = await res.json();

    dispatch({
      type: GET_ITEMS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: ITEMS_ERROR,
      payload: err.respose.data
    });
  }
};

// Search ITEMS from server
export const searchItems = text => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/items?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_ITEMS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: ITEMS_ERROR,
      payload: err.respose.data
    });
  }
};

// Sort items high to low price
export const sortItemsHighToLowPrice = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/items?_sort=price&_order=desc`);
    const data = await res.json();

    dispatch({
      type: SORT_HIGH_LOW,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: ITEMS_ERROR,
      payload: err.respose.data
    });
  }
};

//SET LOADING TO TRUE
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
