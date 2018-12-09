import React from 'react';
import Enzyme from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import {Input} from './Input';

/**
 * Factory function to create ShallowWrapper for the InputComponent component
 * @function setup
 * @param {object} state - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = Enzyme.shallow(<Input {...initialState}/>);
  return wrapper;
} 

describe('render', () => {
  describe('Word has not been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success:false };
      wrapper = setup(initialState);
    })

    it('should render the componennt without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });  

    it('should render the input box', () => {
      const input = findByTestAttr(wrapper, 'input-box');
      expect(input.length).toBe(1);
    });

    it('should render the submit button', () => {
      const button = findByTestAttr(wrapper, 'submit-button');
      expect(button.length).toBe(1);

    });
  });  

  describe('Word has been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success:true };
      wrapper = setup(initialState);
    })

    it('should render the componennt without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });  

    it('should not render the input box', () => {
      const input = findByTestAttr(wrapper, 'input-box');
      expect(input.length).toBe(0);
    });

    it('should not render the submit button', () => {
      const button = findByTestAttr(wrapper, 'submit-button');
      expect(button.length).toBe(0);
    });
  });
});

describe('Updating the state', () => {
  
});

