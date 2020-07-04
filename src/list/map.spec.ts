import { map } from './map';

describe('map', () => {
  it('should return an array with projected forms of its items according to the specified function', () => {
    const array: O[] = [{ id: 1 }];
    const fn = (o: O) => ({ id: o.id + 1 });

    // prettier-ignore
    const results = [
      map(array, fn),
      map (fn) (array),
    ];

    results.forEach((result) => {
      expect(result).toEqual([{ id: 2 }]);
    });
  });
});

interface O {
  id: number;
}
