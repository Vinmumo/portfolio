import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero with name and role', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Vincent Mumo/i);
  expect(screen.getAllByText(/Full-Stack Developer/i).length).toBeGreaterThan(0);
});
