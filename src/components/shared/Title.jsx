import PropTypes from 'prop-types';

const Title = ({ title }) => <h1 className="nav-title">{title}</h1>;

Title.propTypes = {
  title: PropTypes.string,
};

Title.defaultProps = {
  title: '',
};

export default Title;
