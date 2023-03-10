import React from 'react';
import { shallow } from 'enzyme';
import LoggedComponent from '../components/LoggedComponent';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });


describe('LoggedComponent', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LoggedComponent />);
  });

  it('should render a navbar', () => {
    expect(wrapper.find('.navbar')).toHaveLength(1);
  });

  it('should render a brand link', () => {
    expect(wrapper.find('.navbar-brand')).toHaveLength(1);
  });

  it('should render a sign out link', () => {
    expect(wrapper.find('.nav-link').last().prop('href')).toEqual('/');
    expect(wrapper.find('.nav-link').last().text()).toEqual('Sign Out');
  });
});
