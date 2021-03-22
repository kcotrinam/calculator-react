import Title from './Title';
import Links from './Links';
import Quote from './Quote';

const QUOTE = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui o!cia deserunt mollit anim id est laborum. IpsuLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui o!cia deserunt mollit anim id est laborum. Ipsu';

const Navbar = () => (
  <>
    <Title title="Math Magicians" />
    <ul>
      <Links name="Home" />
      <Links name="Calculator" />
      <Links name="Quote" />
    </ul>
    <Quote quote={QUOTE} />
  </>
);

export default Navbar;
