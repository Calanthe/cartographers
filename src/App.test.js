import { render, screen } from '@testing-library/react';
import App from './App';

test('renders proper header and button', () => {
  render(<App />);
  const headerElement = screen.getByText(/CARTOGRAPHERS/i);
  expect(headerElement).toBeInTheDocument();

  const buttonElement = screen.getByText(/Generate a new map/i);
  expect(buttonElement).toBeInTheDocument();
});
