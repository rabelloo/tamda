import { intersection } from './intersection';

describe('intersection', () => {
  it('should return items that are in both arrayA and arrayB', () => {
    const arrayA = [1, 2, 3];
    const arrayB = [2, 3, 4];
    const fn = (n: number) => n;

    // prettier-ignore
    const results = [
      intersection(arrayA, arrayB),
      intersection (arrayB) (arrayA),

      intersection(arrayA, arrayB, fn),
      intersection (arrayB, fn) (arrayA),
    ];

    results.forEach((result) => {
      expect(result).toEqual([2, 3]);
    });
  });
});
