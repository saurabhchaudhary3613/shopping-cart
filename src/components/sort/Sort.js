import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sortItemsHighToLowPrice, getItems } from '../../actions/itemActions';

const Sort = ({ sortItemsHighToLowPrice, getItems }) => {
  const [option, setOption] = useState('');

  const sortHandler = () => {
    if (option === 'highToLow') {
      sortItemsHighToLowPrice();
    }
    if (option === 'lowToHigh') {
      getItems();
    }
  };
  const modalStyle = {
    width: '75%'
  };
  return (
    <Fragment>
      <a
        className='modal-trigger'
        href='#sort-modal'
        style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '14px' }}
      >
        Sort
      </a>
      <div id='sort-modal' className='modal' style={modalStyle}>
        <div className='modal-content'>
          <h3>Sort Options</h3>
          <p>
            <label>
              <input
                className='with-gap'
                value='highToLow'
                name='group1'
                type='radio'
                onClick={e => setOption(e.target.value)}
              />
              <span>Price -- High Low</span>
            </label>
          </p>
          <p>
            <label>
              <input
                className='with-gap'
                name='group1'
                value='lowToHigh'
                type='radio'
                onClick={e => setOption(e.target.value)}
              />
              <span>Price -- Low High</span>
            </label>
          </p>
          <p>
            <label>
              <input
                className='with-gap'
                name='group1'
                type='radio'
                value='discounted'
                onClick={e => setOption(e.target.value)}
              />
              <span>Price -- Discount</span>
            </label>
          </p>
        </div>
        <div className='modal-footer' style={{ textAlign: 'center' }}>
          <a
            href='#!'
            className='modal-close waves-effect waves-green btn-flat'
          >
            Cancel
          </a>
          <a
            href='#!'
            onClick={sortHandler}
            className='modal-close waves-effect waves-green btn-flat'
          >
            Apply
          </a>
        </div>
      </div>
    </Fragment>
  );
};
Sort.propTypes = {
  sortItemsHighToLowPrice: PropTypes.func.isRequired
};

export default connect(null, { sortItemsHighToLowPrice, getItems })(Sort);
