import { union } from './union';

describe('union', () => {
  it('should return an unique concatenation of arrayA and arrayB', () => {
    const arrayA = [1, 2, 3];
    const arrayB = [2, 3, 4];
    const fn = (n: number) => n;

    const results = [
      union(arrayA, arrayB),
      union(arrayB)(arrayA),

      union(arrayA, arrayB, fn),
      union(arrayB, fn)(arrayA),
    ];

    results.forEach((result) => {
      expect(result).toEqual([1, 2, 3, 4]);
    });
  });
});
