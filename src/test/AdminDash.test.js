// import React from 'react';
// import { shallow } from 'enzyme';
// import AdminDash from '../components/AdminDash';
// import LoggedComponent from '../components/LoggedComponent';
// import Enzyme from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Enzyme.configure({ adapter: new Adapter() });


// describe('AdminDash component', () => {
//   let wrapper;

//   beforeEach(() => {
//     wrapper = shallow(<AdminDash />);
//   });

//   it('should render a LoggedComponent', () => {
//     expect(wrapper.find(LoggedComponent)).toHaveLength(1);
//   });

//   it('should render a section with class name "header"', () => {
//     expect(wrapper.find('section.header')).toHaveLength(1);
//   });

  
// });


import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AdminDash from '../components/AdminDash';
import { shallow } from 'enzyme';

describe('AdminDash', () => {
  test('should hide the navbar when scrolling down', () => {
    const { container } = render(<AdminDash />);
    const navbar = container.querySelector('.navbar');

    // By default, the navbar should be visible
    expect(navbar.classList).toContain('navbar--visible');

    // Simulate scrolling down
    fireEvent.scroll(window, { target: { pageYOffset: 100 } });

    // The navbar should be hidden
    expect(navbar.classList).toContain('navbar--hidden');
  });

});
