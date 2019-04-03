import { split } from './split';

describe('split', () => {
  it('should return a Tuple of [items that match predicate, items that do not match predicate]', () => {
    const array = [1, 2, 3];
    const fn = (n: number) => n < 2;

    const results = [
      split(array, fn),
      split (fn) (array),
    ];

    results.forEach(result => {
      expect(result).toEqual([ [1], [2, 3] ]);
    });
  });
});
