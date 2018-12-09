import { storeFactory } from '../test/testUtils'
import { guessWord } from './actions'
import { getLetterMatchCount } from './helpers/index';

describe('guessWoed action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';

  describe('no guess words', () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState); 
    })
    it('should update state correctly for unsuccessfull test', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const receivedState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [{
          guessedWord: unsuccessfulGuess,
          getLetterMatchCount: 3
        }]
      }
      expect(receivedState).toEqual(expectedState);
    });

    it('should update state correctly for successfull test', () => {
      store.dispatch(guessWord(secretWord));
      const receivedState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [{
          guessedWord: secretWord,
          getLetterMatchCount: 5
        }]
      }
      expect(receivedState).toEqual(expectedState);
    });

  });

  describe('some guess words', () => {
    const guessedWords = [{guessedWord: 'agile', letterMatchCount: 1}];
    const initialState = {guessedWords, secretWord};
    let store;
    beforeEach(() => {
      store = storeFactory(initialState);
    })

    it('should update state correctly for unsuccessfull test', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const receivedState = store.getState();
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [
          ...guessedWords, 
          { guesssedWord: unsuccessfulGuess,getLetterMatchCount: 3 }
        ]
      }
      expect(receivedState).toEqual(expectedState);
    });

    it('should update state correctly for successfull test', () => {
      store.dispatch(guessWord(secretWord));
      const receivedState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          ...guessedWords, 
          { guesssedWord: secretWord,getLetterMatchCount: 5 }
        ]
      }
      expect(receivedState).toEqual(expectedState);
    });

  });
});


