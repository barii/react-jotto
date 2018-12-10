import React from 'react';
import Enzyme from 'enzyme';
import { App } from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

/**
 * @function setup
 * @param {object} state - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState={}) => {
  const getSecretWord = jest.fn();
  const wrapper = Enzyme.shallow(<App {...initialState} getSecretWord={getSecretWord}/>);
  return wrapper;
} 

describe('redux properties', () => {
  const success = true;
  const secretWord = 'party';
  const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
  const wrapper = setup({ success, secretWord, guessedWords });

  it('should have access to `success` state', () => {
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  it('should have access to `secretWord` state', () => {
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });

  it('should have access to `guessedWords` state', () => {
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  });

  it('should have `getSecretWord` action creator as a function on the props', () => {
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeDefined();
  });
});