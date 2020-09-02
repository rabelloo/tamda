import { sortBy } from './sortBy';

describe('sortBy', () => {
  it('should immutably sort an array based on the specified map function', () => {
    const array: O[] = [{ id: 5 }, { id: 1 }, { id: 3 }, {} as any];
    const fn = (o: O) => o.id;

    const results = [sortBy(array, fn), sortBy(fn)(array)];

    results.forEach((result) => {
      expect(result).toEqual([{}, { id: 1 }, { id: 3 }, { id: 5 }]);
      expect(result).not.toBe(array);
    });
  });

  it('should immutably sort an array in descending order when { reverse: true }', () => {
    const array = [3, 1, 5];
    const fn = (n: number) => n;
    const options = { reverse: true };

    const results = [sortBy(array, fn, options), sortBy(fn, options)(array)];

    results.forEach((result) => {
      expect(result).toEqual([5, 3, 1]);
      expect(result).not.toBe(array);
    });
  });

  it('should immutably and correctly sort a string array according to locale', () => {
    const array = ['b', 'A', 'ą', 'B', 'a'];
    const fn = (s: string) => s;

    const results = [sortBy(array, fn), sortBy(fn)(array)];

    results.forEach((result) => {
      expect(result).toEqual(['a', 'A', 'ą', 'b', 'B']);
      expect(result).not.toBe(array);
    });
  });
});

interface O {
  id: number;
}
