import React from 'react';
import PropTypes from 'prop-types';
import '../scss/components/button.scss';

const Button = ({ name, handlerClick }) => {
  const handleClick = () => handlerClick(name);

  return (
    <button
      onClick={handleClick}
      type="button"
      className="btn"
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  handlerClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  name: '',
};

export default Button;
