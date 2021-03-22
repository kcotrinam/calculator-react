import Title from '../shared/Title';
import Links from './Links';

const Navbar = () => (
  <>
    <nav>
      <Title title="Math Magicians" />
      <ul>
        <Links name="Home" />
        <Links name="Calculator" />
        <Links name="Quote" />
      </ul>
    </nav>
  </>
);

export default Navbar;
