import { isEmpty } from './isEmpty';

describe('isEmpty', () => {
  it('should return whether or not the specified list is empty (length === 0)', () => {
    const array = [1, 2, 3];

    const results = [
      isEmpty(array),
      isEmpty () (array),

      isEmpty(`${array}`),
      isEmpty () (`${array}`),
    ];

    results.forEach(result => {
      expect(result).toBe(false);
    });
  });
});
