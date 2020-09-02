import { groupBy } from './groupBy';

describe('groupBy', () => {
  it('should group an array into a map-like object based on a key extracting function', () => {
    const array: O[] = [{ type: 1 }, { type: 2 }, { type: 2 }];
    const fn = (o: O) => o.type;

    const results = [groupBy(array, fn), groupBy(fn)(array)];

    results.forEach((result) => {
      expect(result).toEqual({
        1: [{ type: 1 }],
        2: [{ type: 2 }, { type: 2 }],
      });
    });
  });
});

interface O {
  type: number;
}
