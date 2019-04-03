import { between } from './between';

describe('between', () => {
  it('should filter items between min and max in a number array', () => {
    const array = [1, 2, 3, 4, 5];
    const min = 2;
    const max = 4;

    const results = [
      between(array, min, max),
      between (min, max) (array),
    ];

    results.forEach(result => {
      expect(result).toEqual([2, 3, 4]);
    });
  });
});
