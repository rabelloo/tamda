import { skip } from './skip';

describe('skip', () => {
  it('should skip the specified amount of items of the array', () => {
    const array = [1, 2, 3];
    const amount = 1;

    const results = [
      skip(array, amount),
      skip(`${array}`, amount + 1),
      skip (amount) (array),
    ];

    results.forEach(result => {
      expect(`${result}`).toBe('2,3');
    });
  });
});
