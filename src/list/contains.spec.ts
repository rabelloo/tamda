import { contains } from './contains';

describe('contains', () => {
  it('should return whether or not the list contains the specified item', () => {
    const array = [1, 2, 3];
    const item = 2;

    const results = [
      contains(array, item),
      contains (item) (array),

      contains(`${array}`, `${item}`),
      contains (`${item}`) (`${array}`),
    ];

    results.forEach(result => {
      expect(result).toBe(true);
    });
  });
});
