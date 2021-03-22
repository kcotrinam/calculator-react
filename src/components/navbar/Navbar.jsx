import Title from '../shared/Title';
import Links from './Links';
import '../../scss/components/nav.scss';

const Navbar = () => (
  <nav className="nav">
    <Title title="Math Magicians" />
    <ul className="nav-list">
      <Links name="Home" />
      <Links name="Calculator" />
      <Links name="Quote" />
    </ul>
  </nav>
);

export default Navbar;
