import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EmployeeDash from '../components/EmployeeDash';

describe('EmployeeDash component', () => {
  it('should toggle visibility of navbar on scroll', () => {
    const { container } = render(<EmployeeDash />);
    const navbar = container.querySelector('.navbar');

    // Verify that the navbar is visible by default
    expect(navbar).toHaveClass('navbar--visible');

    // Scroll down and verify that the navbar is hidden
    fireEvent.scroll(window, { target: { pageYOffset: 100 } });
    expect(navbar).toHaveClass('navbar--hidden');

    // Scroll up and verify that the navbar is visible again
    fireEvent.scroll(window, { target: { pageYOffset: 0 } });
    expect(navbar).toHaveClass('navbar--visible');
  });
});
