import { sum } from './sum';

describe('sum', () => {
  it('should return the sum of all items in a number array', () => {
    const array = [1, 2, 3];

    const results = [
      sum(array),
      sum () (array),
    ];

    results.forEach(result => {
      expect(result).toBe(6);
    });
  });
});
