import { skipWhile } from './skipWhile';

describe('skipWhile', () => {
  it('should skip items in the array while the predicate returns true', () => {
    const array = [1, 2, 3];
    const fn = (n: number) => n < 2;

    const results = [
      skipWhile(array, fn),
      skipWhile (fn) (array),
    ];

    results.forEach(result => {
      expect(result).toEqual([2, 3]);
    });
  });

  it('should skip no items in the array if the predicate has no match', () => {
    const array = [1, 2, 3];
    const fn = (n: number) => n < 0;

    const results = [
      skipWhile(array, fn),
      skipWhile (fn) (array),
    ];

    results.forEach(result => {
      expect(result).toEqual([1, 2, 3]);
    });
  });

  it('should skip all items in the array if the predicate matches all', () => {
    const array = [1, 2, 3];
    const fn = (n: number) => n < 5;

    const results = [
      skipWhile(array, fn),
      skipWhile (fn) (array),
    ];

    results.forEach(result => {
      expect(result).toEqual([]);
    });
  });
});
