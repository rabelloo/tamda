import { toObjectMap } from './toObjectMap';

describe('toObjectMap', () => {
  it('should transform an array into a map-like object according to the specified key function', () => {
    const array: O[] = [{ id: 1 }, { id: 2 }, { id: 2 }];
    const fn = (o: O) => o.id;

    const results = [toObjectMap(array, fn), toObjectMap(fn)(array)];

    results.forEach((result) => {
      expect(result).toEqual({ 1: { id: 1 }, 2: { id: 2 } });
    });
  });
});

interface O {
  id: number;
}
