import React from 'react';
import PropTypes from 'prop-types';
import '../scss/components/button.scss';

const Button = ({ name, handlerClick }) => {
  const handleClick = () => handlerClick(name);
  const exp = /\d/;
  let btn = '';
  btn += exp.test(name) ? 'btn btn-number' : 'btn';
  btn += name === '0' ? ' btn-zero' : '';
  btn += name === '=' ? ' btn-equal' : '';
  btn += name === 'AC' ? ' btn-danger' : '';

  return (
    <button
      onClick={handleClick}
      type="button"
      className={btn}
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
