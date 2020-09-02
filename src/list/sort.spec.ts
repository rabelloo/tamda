import { sort } from './sort';

describe('sort', () => {
  it('should immutably sort an array based on the specified compare function', () => {
    const array = [null, undefined, NaN];
    const fn = (t: any) => (t === null ? 1 : t == null ? 0 : -1);

    const results = [sort(array, fn), sort(fn)(array)];

    results.forEach((result) => {
      expect(result).toEqual([NaN, null, undefined]);
      expect(result).not.toBe(array);
    });
  });

  it('should immutably sort an array with a default compare function', () => {
    const array = [3, 1, 2];

    const results = [sort(array), sort()(array)];

    results.forEach((result) => {
      expect(result).toEqual([1, 2, 3]);
      expect(result).not.toBe(array);
    });
  });
});
