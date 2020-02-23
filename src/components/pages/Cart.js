import React, { useEffect } from 'react';
import CartItem from './CartItem';
import { connect } from 'react-redux';
import { getCartItems } from '../../actions/cartActions';
import PropTypes from 'prop-types';

const Cart = ({ cartItem: { cartItems, loading }, getCartItems }) => {
  useEffect(() => {
    getCartItems();
    //eslint-disable-next-line
  }, []);

  if (loading || cartItems === null) {
    return <h4>loading...</h4>;
  }
  // console.log(items);
  return (
    <div>
      {!loading && cartItems.length === 0 ? (
        <p>No Product to show...</p>
      ) : (
        cartItems.map(item => <CartItem item={item} key={item.id} />)
      )}
    </div>
  );
};
Cart.propTypes = {
  cartItem: PropTypes.object.isRequired,
  getCartItems: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  cartItem: state.cartItem
});
export default connect(mapStateToProps, { getCartItems })(Cart);
