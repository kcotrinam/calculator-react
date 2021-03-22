import PropTypes from 'prop-types';

const Links = ({ name }) => (
  <li>{name}</li>
);

Links.propTypes = {
  name: PropTypes.string,
};

Links.defaultProps = {
  name: '',
};

export default Links;
