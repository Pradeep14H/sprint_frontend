import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPageComponent from '../components/LandingPageComponent';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('LandingPageComponent', () => {
    test('renders banner image and text', () => {
        render(<LandingPageComponent />);
        const bannerTextList = screen.queryAllByText(/project management system/i);
        expect(bannerTextList).toHaveLength(1);
        expect(bannerTextList[0]).toBeInTheDocument();
        
        const buttonText = screen.getByText(/the project management system also provides/i);
        expect(buttonText).toBeInTheDocument();
      });
      
});
