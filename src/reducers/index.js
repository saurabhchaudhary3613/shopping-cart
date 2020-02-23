import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import cartItemReducer from './cartItemReducer';

export default combineReducers({
  item: itemReducer,
  cartItem: cartItemReducer
});
