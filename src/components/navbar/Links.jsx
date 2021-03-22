import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Links = ({ name }) => {
  const lowerCasedName = name.toLowerCase();
  const route = lowerCasedName === 'home' ? '/' : `/${lowerCasedName}`;
  return (
    <>
      <Link to={route}>
        <li>{name}</li>
      </Link>
    </>
  );
};

Links.propTypes = {
  name: PropTypes.string,
};

Links.defaultProps = {
  name: '',
};

export default Links;
