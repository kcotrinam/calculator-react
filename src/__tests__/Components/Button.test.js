import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';
import Button from '../../components/Button';

test('renders correctly', () => {
  const tree = create(<Button handlerClick={() => 'hello'} name="name" />).toJSON();
  expect(tree).toMatchSnapshot();
});
