import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteCart } from '../../actions/cartActions';
import './CartItem.scss';

const CartItem = ({ item, deleteCart }) => {
  const removeFromCart = () => {
    deleteCart(item.id);
  };

  return (
    <div>
      <div className='card row'>
        <div className='card-img col s4'>
          <img src={item.img_url} alt='item1' />
        </div>
        <div className='card-content col s8'>
          <p>{item.name}</p>
          <p className='item-price-desc'>
            <span className='price-after-discount'>
              &#x20B9;{item.price - (item.price * item.discount) / 100}
            </span>
            <span className='price-without-discount'>{item.price}</span>
            <span className='discount'>{item.discount}% off</span>
          </p>
          <div className='btn-container'>
            <button className='' onClick={removeFromCart}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  deleteCart: PropTypes.func.isRequired
};

export default connect(null, { deleteCart })(CartItem);
