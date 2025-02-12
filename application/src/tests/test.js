import 'whatwg-fetch'; // Polyfill for fetch API
import 'text-encoding'; // Polyfill for TextEncoder and TextDecoder

import { render, screen } from '@testing-library/react';
import App from '../App';  // Adjust the import based on your file structure

// Make sure global objects are available in your test environment
global.TextEncoder = require('text-encoding').TextEncoder;
global.TextDecoder = require('text-encoding').TextDecoder;

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


