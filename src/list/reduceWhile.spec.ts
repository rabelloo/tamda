import { reduceWhile } from './reduceWhile';

describe('reduceWhile', () => {
  it(`should reduce an array to an accumulated form according to the specified function
  while the predicate is true or the list ends`, () => {
    const array = [1, 2, 3, 4, 5];
    const fn = (sum: number, n: number) => sum + n;
    const predicate = (sum: number) => sum < 10;

    const results = [
      reduceWhile(array, predicate, fn, 0),
      reduceWhile(predicate, fn, 0)(array),
    ];

    results.forEach((result) => {
      expect(result).toBe(6);
    });
  });
});
