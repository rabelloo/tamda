import { reduce } from './reduce';

describe('reduce', () => {
  it('should reduce an array to an accumulated form according to the specified function', () => {
    const array = [1, 2, 3];
    const fn = (sum: number, n: number) => sum + n;

    const results = [
      reduce(array, fn, 0),
      reduce (fn, 0) (array),
    ];

    results.forEach(result => {
      expect(result).toBe(6);
    });
  });
});
