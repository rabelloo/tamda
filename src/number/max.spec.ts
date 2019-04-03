import { max } from './max';

describe('max', () => {
  it('should find the greatest number in a number array', () => {
    const array = [6, 14, 3, 50, 25];

    const results = [
      max(array),
      max () (array),
    ];

    results.forEach(result => {
      expect(result).toBe(50);
    });
  });
});
