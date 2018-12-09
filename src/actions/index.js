import { getLetterMatchCount } from '../helpers';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
}

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action
 *  and (conditionally) CORRECT_GUESS action
 * @runction guessWord
 * @param {string} guessedWord  - guessed Word
 * @returns {function} - Redux Thunk function
 */
export const guessWord = (guessedWord) => {
  return function(dispatch, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCounts = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: {
        guessedWord,
        letterMatchCounts
      }
    })

    if(guessedWord === secretWord) {
      dispatch({
        type: actionTypes.CORRECT_GUESS
      })
    }
  }
}

// export function correctGuess() {
//   return { type: actionTypes.CORRECT_GUESS };
// }