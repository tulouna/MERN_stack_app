import React from 'react';
import { render, screen } from '@testing-library/react';
import Products from '../Products';
import { BrowserRouter } from 'react-router-dom';

test('renders Products Inventory heading', () => {
  render(
    <BrowserRouter>
      <Products />
    </BrowserRouter>
  );
  expect(screen.getByText(/Products Inventory/i)).toBeInTheDocument();
});