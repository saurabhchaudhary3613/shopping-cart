import React from 'react';
import { Link } from 'react-router-dom';
import Search from './search/Search';
import './Header.scss';

const Header = () => {
  return (
    <nav
      style={{
        padding: '8px 0px 0px 5px',
        height: '60px'
      }}
      className='blue'
    >
      <Link to='/'>
        <i
          className='material-icons search-icon'
          style={{
            color: 'yellow',
            fontSize: '40px',
            display: 'inline-block',
            cursor: 'pointer',
            marginRight: '25px'
          }}
        >
          grade
        </i>
      </Link>

      <Search />
      <div className='cart-container'>
        <Link to='/cart'>
          <i className='material-icons search-icon'>shopping_cart</i>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
