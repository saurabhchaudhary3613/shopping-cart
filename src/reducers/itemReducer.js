import {
  GET_ITEMS,
  SET_LOADING,
  ITEMS_ERROR,
  SEARCH_ITEMS,
  SORT_HIGH_LOW
} from '../actions/types';

const initialState = {
  items: null,
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case SORT_HIGH_LOW:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case SEARCH_ITEMS:
      return {
        ...state,
        items: action.payload
      };
    case ITEMS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
