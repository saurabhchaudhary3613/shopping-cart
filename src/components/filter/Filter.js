import React, { Fragment } from 'react';

const Filter = () => {
  const modalStyle = {
    width: '75%'
  };
  return (
    <Fragment>
      <a
        className='modal-trigger'
        href='#filter-modal'
        style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '14px' }}
      >
        Filter
      </a>
      <div id='filter-modal' className='modal' style={modalStyle}>
        <div className='modal-content'>
          <h3>Filter Options</h3>
          <form action='#'>
            <p className='range-field'>
              <input type='range' id='test5' min='0' max='100' />
            </p>
          </form>
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
            className='modal-close waves-effect waves-green btn-flat'
          >
            Apply
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Filter;
