import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../components/App';

test('renders correctly', () => {
  const tree = create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('displays heading', () => {
  render(<App />);
  const h1 = screen.getByText("Let's do some maths");
  expect(h1).toBeInTheDocument();
});
