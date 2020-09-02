import { reverse } from './reverse';

describe('reverse', () => {
  it('should immutably reverse the items in an array', () => {
    const array = [1, 2, 3];

    const results = [reverse(array), reverse()(array)];

    results.forEach((result) => {
      expect(result).toEqual([3, 2, 1]);
      expect(result).not.toBe(array);
    });
  });
});
