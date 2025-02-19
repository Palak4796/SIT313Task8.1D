import { render, screen } from '@testing-library/react';
import { TextEncoder, TextDecoder } from 'util';
import App from '../App.js';  // Adjust the import based on your file structure
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});




