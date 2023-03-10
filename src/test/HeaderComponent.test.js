import React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderComponent from '../components/HeaderComponent'
describe('HeaderComponent', () => {
  it('renders the header with the correct links', () => {
    render(<HeaderComponent />);
    expect(screen.getByText('PMS')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Sign In')).toBeInTheDocument();
    expect(screen.getByText('Register')).toBeInTheDocument();
  });
});
