import { concat } from './concat';

describe('concat', () => {
  it('should append the second argument to the first', () => {
    const array = [1, 2];
    const item = 3;

    const results = [
      concat(array, item),
      concat (item) (array),

      concat(array, [item]),
      concat ([item]) (array),

      concat(`${array},`, `${item}`),
      concat (`${item}`) (`${array},`),
    ];

    results.forEach(result => {
      expect(`${result}`).toBe('1,2,3');
    });
  });
});
