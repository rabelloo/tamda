import { partition } from './partition';

describe('partition', () => {
  it('should partition an array based on a key extracting function', () => {
    const array = [1, 2, 2];
    const fn = (n: number) => n;

    const results = [
      partition(array),
      partition()(array),

      partition(array, fn),
      partition(fn)(array),
    ];

    results.forEach(result => {
      expect(result).toEqual([[1, [1]], [2, [2, 2]]]);
    });
  });
});
