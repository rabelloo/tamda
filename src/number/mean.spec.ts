import { mean } from './mean';

describe('mean', () => {
  it('should calculate the mean of members of a number array', () => {
    const array = [8, 14, 3, 50, 25];

    const results = [
      mean(array),
      mean () (array),
    ];

    results.forEach(result => {
      expect(result).toBe(20);
    });
  });
});
