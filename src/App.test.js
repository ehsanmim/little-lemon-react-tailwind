import { render, screen } from '@testing-library/react';
import App from './App';

test('expect a heading with the title of app to be in the page', () => {
  render(<App />);
  const h = screen.getByRole('heading', { name: /little lemon/i });
  expect(h).toBeInTheDocument();
});
