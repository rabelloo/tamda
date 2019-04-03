import { count } from './count';

describe('count', () => {
  it('should return the length of a list', () => {
    const array = [1, 2, 3];

    const results = [
      count(array),
      count () (array),

      count(array.join('')),
      count () (array.join('')),
    ];

    results.forEach(result => {
      expect(result).toBe(3);
    });
  });
});
