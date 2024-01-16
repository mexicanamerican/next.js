// pages/index.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('renders the homepage correctly', () => {
    render(<Home />);
    
    // Add assertions to test the rendered components and functionality
    // For example:
    expect(screen.getByText('Welcome to the Homepage')).toBeInTheDocument();
  });

  // Add more test cases as needed
});
