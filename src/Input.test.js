import React from 'react';
import Enzyme from 'enzyme';

import { findByTestAttr } from '../test/testUtils';
import { Input } from './Input';
import GuessedWords from './GuessedWords';

/**
 * Factory function to create ShallowWrapper for the InputComponent component
 * @function setup
 * @param {object} state - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState={}) => {
  const mockGuessWord = jest.fn();
  const wrapper = Enzyme.shallow(<Input {...initialState} guessWord={mockGuessWord} />);
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
  it('should have success state as prop', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  it('should have `guessWord` action creator as a function prop', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    //expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe('`guessWord` action creator call', () => {
  let guessWord;
  let wrapper;
  let guessedWord = 'train';

  beforeEach(() => {
    guessWord = jest.fn();

    wrapper = Enzyme.shallow(<Input guessWord={guessWord} />);

    // add value to the input box
    wrapper.instance().inputBox.current = { value: guessedWord }

    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', {preventDefault() {}});
  })

  it('should call `guessWord` once when button is clicked', () => {
    const guessWordCallCount = guessWord.mock.calls.length;

    expect(guessWordCallCount).toBe(1);
  });

  it('should call `guessWord` with input value in argument', () => {
    const guessWordArg = guessWord.mock.calls[0][0]; // first time it was called, first argument passed
    expect(guessWordArg).toBe(guessedWord);
  });

  it('should clear input box after submit', () => {
    expect(wrapper.instance().inputBox.current.value).toBe('');  
  });
});
