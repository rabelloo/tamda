import { min } from './min';

describe('min', () => {
  it('should find the smallest number in a number array', () => {
    const array = [6, 14, 3, 50, 25];

    const results = [min(array), min()(array)];

    results.forEach((result) => {
      expect(result).toBe(3);
    });
  });
});
