import { find } from './find';

describe('find', () => {
  it('should return the first item in the array that matches the predicate', () => {
    const array = [1, 2, 3];
    const fn = (n: number) => n === 2;

    const results = [
      find(array, fn),
      find (fn) (array),
    ];

    results.forEach(result => {
      expect(result).toBe(2);
    });
  });
});
