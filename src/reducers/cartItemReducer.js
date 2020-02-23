import {
  GET_CART_ITEMS,
  SET_LOADING,
  CART_ITEMS_ERROR,
  ADD_TO_CART,
  REMOVE_CART_ITEM
} from '../actions/types';

const initialState = {
  cartItems: null,
  loading: false,
  error: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
        loading: false
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        loading: false
      };
    case REMOVE_CART_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
        loading: false
      };
    }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case CART_ITEMS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
