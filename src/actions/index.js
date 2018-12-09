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

  }
}

// export function correctGuess() {
//   return { type: actionTypes.CORRECT_GUESS };
// }