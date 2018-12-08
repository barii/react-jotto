import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'

import { findByTestAttr } from '../test/testUtils'
import Congrats from './Congrats'

Enzyme.configure({adapter: new EnzymeAdapter() });

/**
 * Factory function to create ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props specificc to this setup
 * @param {any} state - Initial state for setup
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
  return Enzyme.shallow(<Congrats {...props} />)
}

it('should render without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1)
});

it('should render no text when `success` prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");


});

it('should  render non-empty congrat message when success` prop is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");
  expect(message.length).not.toBe(0);
});