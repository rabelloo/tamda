import { any } from './any';

describe('any', () => {
  it('should return whether or not any items in a list match the specified predicate', () => {
    const array = [-1, 0, 1, 2, 3];
    const fn = (n: number) => n > 0;

    const results = [any(array, fn), any(fn)(array)];

    results.forEach((result) => {
      expect(result).toBe(true);
    });
  });
});
