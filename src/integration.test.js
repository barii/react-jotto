import { storeFactory } from '../test/testUtils'
import { guessWord } from './actions'

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
          letterMatchCounts: 3
        }]
      }
      expect(receivedState).toEqual(expectedState);
    });

    it('should update state correctly for successfull test', () => {
      store.dispatch(guessWord(secretWord));
      const receivedState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [{
          guessedWord: secretWord,
          letterMatchCounts: 5
        }]
      }
      expect(receivedState).toEqual(expectedState);
    });

  });

  describe('some guess words', () => {
    const guessedWords = [
      { 
        guessedWord: 'agile', 
        letterMatchCounts: 1 
      }
    ];
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
          { 
            guessedWord: unsuccessfulGuess,
            letterMatchCounts: 3 
          }
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
          { 
            guessedWord: secretWord,
            letterMatchCounts: 5 
          }
        ]
      }
      expect(receivedState).toEqual(expectedState);
    });

  });
});


