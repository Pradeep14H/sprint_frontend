// import React from 'react';
// import { shallow } from 'enzyme';
// import TeamLeadDash from '../components/TeamLeadDash';
// import LoggedComponent from '../components/LoggedComponent';
// import Enzyme from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Enzyme.configure({ adapter: new Adapter() });


// describe('TeamLeadDash component', () => {
//   let wrapper;
  
//   beforeEach(() => {
//     wrapper = shallow(<TeamLeadDash />);
//   });

//   it('should render a LoggedComponent', () => {
//     expect(wrapper.find(LoggedComponent)).toHaveLength(1);
//   });

//   it('should render a section with class name "header"', () => {
//     expect(wrapper.find('section.header')).toHaveLength(1);
//   });

//   it('should render a h2 element with the text "TEAM-LEAD DASHBOARD"', () => {
//     expect(wrapper.find('h2').text()).toEqual('TEAM-LEAD DASHBOARD');
//   });

//   it('should render a ol element with three li elements', () => {
//     expect(wrapper.find('ol.button-list')).toHaveLength(1);
//     expect(wrapper.find('li')).toHaveLength(3);
//   });

//   it('should render the first li element with a Link to "/tasklist"', () => {
//     const firstLink = wrapper.find('li').at(0).find('Link');
//     expect(firstLink.prop('to')).toEqual('/tasklist');
//   });

//   it('should render the second li element with a Link to "/eprojectlist"', () => {
//     const secondLink = wrapper.find('li').at(1).find('Link');
//     expect(secondLink.prop('to')).toEqual('/eprojectlist');
//   });

//   it('should render the third li element with a Link to "/emplist"', () => {
//     const thirdLink = wrapper.find('li').at(2).find('Link');
//     expect(thirdLink.prop('to')).toEqual('/emplist');
//   });
// });

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TeamLeadDash from '../components/TeamLeadDash';

describe('TeamLeadDash', () => {
  it('should hide navbar when scrolling down', () => {
    const { container } = render(<TeamLeadDash />);
    const navbar = container.querySelector('.navbar');

    fireEvent.scroll(window, { target: { pageYOffset: 100 } });

    expect(navbar.classList).toContain('navbar--hidden');
  });

  it('should show navbar when scrolling up', () => {
    const { container } = render(<TeamLeadDash />);
    const navbar = container.querySelector('.navbar');

    fireEvent.scroll(window, { target: { pageYOffset: 100 } });
    fireEvent.scroll(window, { target: { pageYOffset: 50 } });

    expect(navbar.classList).toContain('navbar--visible');
  });
});

