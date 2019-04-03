import { clamp } from './clamp';

describe('clamp', () => {
  it('should filter items clamp min and max in a number array', () => {
    const num = 50;
    const min = 5;
    const max = 10;

    const results = [
      clamp(num, min, max),
      clamp (min, max) (num),
    ];

    expect(clamp(1, min, max)).toEqual(5);

    results.forEach(result => {
      expect(result).toEqual(10);
    });
  });
});
