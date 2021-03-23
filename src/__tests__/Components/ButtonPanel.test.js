import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';
import ButtonPanel from '../../components/ButtonPanel';

test('renders correctly', () => {
  const tree = create(<ButtonPanel clickHandler={() => 'test'} />).toJSON();
  expect(tree).toMatchSnapshot();
});
