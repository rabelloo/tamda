import { median } from './median';

describe('median', () => {
  it('should find the median of a number array', () => {
    const arrayOdd = [6, 14, 3, 50, 25];
    const arrayEven = [1, 3, 50, 25];

    const results = [
      median(arrayOdd),
      median()(arrayOdd),

      median(arrayEven),
      median()(arrayEven),
    ];

    results.forEach((result) => {
      expect(result).toBe(14);
    });
  });
});
