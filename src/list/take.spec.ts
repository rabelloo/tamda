import { take } from './take';

describe('take', () => {
  it('should take the specified number of items from the array', () => {
    const array = [1, 2, 3];
    const amount = 2;

    const results = [
      take(array, amount),
      take(`${array}`, amount + 1),
      take (amount) (array),
    ];

    results.forEach(result => {
      expect(`${result}`).toBe('1,2');
    });
  });
});
