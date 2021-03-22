import PropTypes from 'prop-types';

const Quote = ({ quote }) => <h4 className="home-quote">{quote}</h4>;

Quote.propTypes = {
  quote: PropTypes.string,
};

Quote.defaultProps = {
  quote: '',
};

export default Quote;
