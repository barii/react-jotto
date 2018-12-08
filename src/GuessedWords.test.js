import React from 'react';
import Enzyme from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils'
import GuessedWords from './GuessedWords'

const defaultProps = { 
  guessedWords: [
    {
      guessedWord: 'train',
      letterMatchCount: 3
    }
  ],
 };

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props};
  return Enzyme.shallow(<GuessedWords {...setupProps } />)
}

it('should not throw warning with expected props', () => {
  checkProps(GuessedWords, defaultProps)
});

describe('If there are no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  it('should render without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words')
    expect(component.length).toBe(1)
  });

  it('should render instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions')
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('If there are words guessed', () => {
  
});