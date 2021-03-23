import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Display from '../../components/Display';

test('renders correctly', () => {
  const tree = create(<Display result="test" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Displays 6', () => {
  render(<Display result="6" />);
  const number = screen.getByText('6');
  expect(number).toBeInTheDocument();
});
