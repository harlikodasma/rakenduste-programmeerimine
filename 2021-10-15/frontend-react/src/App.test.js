import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  const someText = screen.getByText(/greeting hello/i)
  const h2Text = screen.queryByText(/h2/i)

  expect(h2Text).not.toBeNull();
  expect(someText).toBeInTheDocument();
});
