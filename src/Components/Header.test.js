import { render, screen } from '@testing-library/react';
import Header from './Header';

test('header renders little lemon logo in header', () => {
  render(<Header />);
  const logoElement = screen.getByAltText('Little lemon logo');
  expect(logoElement).toBeInTheDocument();
});

//write a test to check if there is a link in the header with the text '%Resever%'
test('header renders link to reservation element', () => {
  render(<Header />);
  const linkElement = screen.getByText(/reserv/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders reserve a table button in header', () => {
  render(<Header />);
  const reserveButton = screen.getByRole('button', {
    name: /reserve a table/i,
  });
  expect(reserveButton).toBeInTheDocument();
});
