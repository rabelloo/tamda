import { pluck } from './pluck';

describe('pluck', () => {
  it('should map a property from a list of objects', () => {
    const array: O[] = [{ id: 1 }, { id: 2 }];
    const key = 'id';

    const results = [
      pluck(array, key),
      pluck (key) (array),
    ];

    results.forEach(result => {
      expect(result).toEqual([1, 2]);
    });
  });
});

interface O {
  id: number;
}
