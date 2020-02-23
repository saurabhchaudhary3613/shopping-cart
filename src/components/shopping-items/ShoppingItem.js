import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItemToCart } from '../../actions/cartActions';
import './ShoppingItem.scss';

const ShoppingItem = ({ item, addItemToCart }) => {
  const addToCartHandler = () => {
    addItemToCart(item);
  };
  return (
    <div className='col s6 m3 l3'>
      <div className='card'>
        <div className='card-content white-text'>
          <img src={item.img_url} alt='item1' />
          <p>{item.name}</p>
          <p className='item-price-desc'>
            <span className='price-after-discount'>
              &#x20B9;{item.price - (item.price * item.discount) / 100}
            </span>
            <span className='price-without-discount'>{item.price}</span>
            <span className='discount'>{item.discount}% off</span>
          </p>
        </div>
        <div className='card-action'>
          <button
            className='waves-effect waves-light btn-small'
            onClick={addToCartHandler}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

ShoppingItem.propTypes = {
  item: PropTypes.object.isRequired,
  addItemToCart: PropTypes.func.isRequired
};

export default connect(null, { addItemToCart })(ShoppingItem);
