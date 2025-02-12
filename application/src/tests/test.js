import 'whatwg-fetch'; // Polyfill for fetch API
import 'text-encoding';


import { render, screen } from '@testing-library/react';
import App from '../App.js';  // Adjust the import based on your file structure

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

