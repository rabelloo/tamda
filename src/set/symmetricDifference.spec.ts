import { symmetricDifference } from './symmetricDifference';

describe('symmetricDifference', () => {
  it('should return an array with only items that are contained in either arrayA or arrayB, but not both', () => {
    const arrayA = [1, 2, 3];
    const arrayB = [2, 3, 4];

    const results = [
      symmetricDifference(arrayA, arrayB),
      symmetricDifference (arrayB) (arrayA),
    ];

    results.forEach(result => {
      expect(result).toEqual([1, 4]);
    });
  });
});
