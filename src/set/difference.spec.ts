import { difference } from './difference';

describe('difference', () => {
  it('should return items in arrayA not found in arrayB', () => {
    const arrayA = [1, 2, 3];
    const arrayB = [2, 3, 4];
    const fn = (n: number) => n;

    const results = [
      difference(arrayA, arrayB),
      difference (arrayB) (arrayA),

      difference(arrayA, arrayB, fn),
      difference (arrayB, fn) (arrayA),
    ];

    results.forEach(result => {
      expect(result).toEqual([1]);
    });
  });
});
