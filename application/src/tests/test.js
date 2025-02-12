import 'whatwg-fetch'; // Polyfill for fetch API
import 'text-encoding';


import { render, screen } from '@testing-library/react';
import App from '../App.js';  // Adjust the import based on your file structure

global.TextEncoder = require('text-encoding').TextEncoder;
global.TextDecoder = require('text-encoding').TextDecoder;

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

