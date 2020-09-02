import { filter } from './filter';

describe('filter', () => {
  it('should return a new array with only items that match the specified predicate', () => {
    const array = [-1, 0, 1, 2, 3];
    const fn = (n: number) => n > 0;

    const results = [filter(array, fn), filter(fn)(array)];

    results.forEach((result) => {
      expect(result).toEqual([1, 2, 3]);
    });
  });
});
