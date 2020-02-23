import {
  GET_CART_ITEMS,
  SET_LOADING,
  CART_ITEMS_ERROR,
  ADD_TO_CART,
  REMOVE_CART_ITEM
} from './types';

// GET Cart items from server
export const getCartItems = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/cart');
    const data = await res.json();

    dispatch({
      type: GET_CART_ITEMS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: CART_ITEMS_ERROR,
      payload: err.respose.data
    });
  }
};

// Add ITEMS To Cart
export const addItemToCart = item => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/cart', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_TO_CART,
      payload: data
    });
  } catch (err) {}
};
// Delete Cart items from server
export const deleteCart = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/cart/${id}`, {
      method: 'DELETE'
    });

    dispatch({
      type: REMOVE_CART_ITEM,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: CART_ITEMS_ERROR,
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
