import moxios from 'moxios'

import { storeFactory } from '../../test/testUtils'
import { getSecretWord } from './'
//import { correctGuess, actionTypes } from './'

// describe('Correct guess ', () => {
//   it('should return an action with the type `CORRECT_GUESS`', () => {
//     const action = correctGuess();
//     expect(action).toEqual({ type : actionTypes.CORRECT_GUESS });
//   });
// });

describe('getSecretWord action creator', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should add response word to the state', () => {
    const secretWord = 'party';
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord
      })
    })

    return store.dispatch(getSecretWord())
      .then(() => {
        const newState = store.getState();
        expect(newState.secretWord).toBe(secretWord);
      });
  });
});