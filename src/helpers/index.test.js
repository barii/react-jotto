import { getLetterMatchCount } from './index';

describe('getLetterMetchCount', () => {
  const secretWord = 'party';
  
  it('should return count when there are no matching letters', () => {
    const lettersMatchCount = getLetterMatchCount('bones', secretWord);
    expect(lettersMatchCount).toBe(0);
  });

  it('should return count when there are 3 matching letters', () => {
    const lettersMatchCount = getLetterMatchCount('train', secretWord);
    expect(lettersMatchCount).toBe(3);    
  });

  it('should return count when all letters maths', () => {
    const lettersMatchCount = getLetterMatchCount('parka', secretWord);
    expect(lettersMatchCount).toBe(3);

  });
});