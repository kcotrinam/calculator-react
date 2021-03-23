import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Links = ({ name }) => {
  const lowerCasedName = name.toLowerCase();
  const route = lowerCasedName === 'home' ? '/' : `/${lowerCasedName}`;
  return (
    <>
      <li>
        <Link to={route}>
          {name}
        </Link>
      </li>
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
