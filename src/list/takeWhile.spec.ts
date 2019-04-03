import { takeWhile } from './takeWhile';

describe('takeWhile', () => {
  it('should take items from the array while the predicate returns true', () => {
    const array = [1, 2, 3];
    const fn = (n: number) => n < 3;

    const results = [
      takeWhile(array, fn),
      takeWhile (fn) (array),
    ];

    results.forEach(result => {
      expect(result).toEqual([1, 2]);
    });
  });

  it('should take no items from the array if the predicate has no match', () => {
    const array = [1, 2, 3];
    const fn = (n: number) => n < 0;

    const results = [
      takeWhile(array, fn),
      takeWhile (fn) (array),
    ];

    results.forEach(result => {
      expect(result).toEqual([]);
    });
  });

  it('should take all items from the array if the predicate matches all', () => {
    const array = [1, 2, 3];
    const fn = (n: number) => n < 5;

    const results = [
      takeWhile(array, fn),
      takeWhile (fn) (array),
    ];

    results.forEach(result => {
      expect(result).toEqual([1, 2, 3]);
    });
  });
});
