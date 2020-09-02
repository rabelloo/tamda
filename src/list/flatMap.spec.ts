import { flatMap } from './flatMap';

describe('flatMap', () => {
  it('should map an array then flatten the results', () => {
    const array: O[] = [{ ids: [1] }, {} as any, { ids: [3] }];
    const fn = (o: O) => o.ids;

    const results = [flatMap(array, fn), flatMap(fn)(array)];

    results.forEach((result) => {
      expect(result).toEqual([1, 3]);
    });
  });
});

interface O {
  ids: number[];
}
