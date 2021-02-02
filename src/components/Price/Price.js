import React from 'react';
import PropTypes from 'prop-types';

const Price = props => (
  <div className="card purple darken-4">
    <div className="card-content white-text">
      <p>
        Total:
      </p>
      <span className="card-title right-align">Price ${props.price}</span>
    </div>
  </div>
);

Price.propTypes = {
  price: PropTypes.number,
};

export default Price;
