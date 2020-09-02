import { between } from './between';

describe('between', () => {
  it('should determine whether a number is between min and max (both inclusive)', () => {
    const num = 2;
    const min = 1;
    const max = 3;

    const results = [between(num, min, max), between(min, max)(num)];

    results.forEach((result) => {
      expect(result).toBe(true);
    });
  });
});
