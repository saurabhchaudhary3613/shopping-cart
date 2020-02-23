import React, { useEffect } from 'react';
import ShoppingItem from './ShoppingItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getItems } from '../../actions/itemActions';

const ShoppingItems = ({ item: { items, loading }, getItems }) => {
  useEffect(() => {
    getItems();
    //eslint-disable-next-line
  }, []);

  if (loading || items === null) {
    return <h4>loading...</h4>;
  }
  // console.log(items);
  return (
    <div className='col s12 m12 l9 push-l3'>
      {!loading && items.length === 0 ? (
        <p>No Product to show...</p>
      ) : (
        items.map(item => <ShoppingItem item={item} key={item.id} />)
      )}
    </div>
  );
};
ShoppingItems.propTypes = {
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item,
  getItems: PropTypes.func.isRequired
});
export default connect(mapStateToProps, { getItems })(ShoppingItems);
