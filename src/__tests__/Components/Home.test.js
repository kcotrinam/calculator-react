import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../components/home/Home';

test('Renders correctly', () => {
  const tree = create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('displays the header', () => {
  render(<Home title="Welcome to page!"/>);
  const header = screen.getByText('Welcome to page!');
  expect(header).toBeInTheDocument();
});
