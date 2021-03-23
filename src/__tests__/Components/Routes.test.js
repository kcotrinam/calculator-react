import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Routes from '../../routes/Routes';

test('renders correctly', () => {
  const tree = create(<Routes />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('displays heading', () => {
  render(<Routes />);
  const title = screen.getByText('Math Magicians');
  expect(title).toBeInTheDocument();
});

test('Has link to calculator', () => {
  render(<Routes />);
  const a = screen.getByText('Home').closest('a');
  expect(a).toHaveAttribute('href', '/');
});

test('Has link to calculator', () => {
  render(<Routes />);
  const a = screen.getByText('Calculator').closest('a');
  expect(a).toHaveAttribute('href', '/calculator');
});

test('Has link to calculator', () => {
  render(<Routes />);
  const a = screen.getByText('Quote').closest('a');
  expect(a).toHaveAttribute('href', '/quote');
});
