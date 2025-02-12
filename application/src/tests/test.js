import 'whatwg-fetch'; // Polyfill for fetch API
import { render, screen } from '@testing-library/react';
import App from '../App';  // Adjust the import based on your file structure

// Polyfill TextEncoder and TextDecoder globally
global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});



