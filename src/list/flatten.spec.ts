import { flatten } from './flatten';

describe('flatten', () => {
  it('should flatten one level of the array', () => {
    const array = [[1], 2, [3]];

    const results = [
      flatten(array),
      flatten () (array),
    ];

    results.forEach(result => {
      expect(result).toEqual([1, 2, 3]);
    });
  });
});
