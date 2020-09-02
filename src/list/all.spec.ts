import { all } from './all';

describe('all', () => {
  it('should return whether or not all items in a list match the specified predicate', () => {
    const array = [1, 2, 3];
    const fn = (n: number) => n > 0;

    const results = [all(array, fn), all(fn)(array)];

    results.forEach((result) => {
      expect(result).toBe(true);
    });
  });
});
