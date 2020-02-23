import React, { useRef } from 'react';
import './Search.scss';
import { connect } from 'react-redux';
import { searchItems } from '../../../actions/itemActions';
import PropTypes from 'prop-types';

const Search = ({ searchItems }) => {
  const text = useRef('');
  const searchHandler = e => {
    // const textValue = e.target.value;
    searchItems(text.current.value);
  };

  return (
    <div className='search-container'>
      <form>
        <input
          id='search'
          type='search'
          placeholder='Search Products...'
          ref={text}
          onChange={searchHandler}
        />
        <i className='material-icons search-icon'>search</i>
      </form>
    </div>
  );
};
Search.propTypes = {
  searchItems: PropTypes.func.isRequired
};
export default connect(null, { searchItems })(Search);
