import { unique } from './unique';

describe('unique', () => {
  it('should filter duplicate records in an array based on a key function', () => {
    const array: O[] = [{ id: 1, copy: true }, { id: 1 }, { id: 2 }];
    const fn = (o: O) => o.id;

    const results = [unique(array, fn), unique(fn)(array)];

    results.forEach((result) => {
      expect(result).toEqual([{ id: 1 }, { id: 2 }]);
    });
  });

  it('should filter duplicate records in an array by identity when key function is undefined', () => {
    const array = [1, 2, 1, 3];

    const results = [unique(array), unique()(array)];

    results.forEach((result) => {
      expect(result).toEqual([1, 2, 3]);
    });
  });
});

interface O {
  id: number;
  copy?: boolean;
}
