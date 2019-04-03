import { last } from './last';

describe('last', () => {
  it('should return the last item of the list', () => {
    const array = [1, 2, 3];

    const results = [
      last(array),
      last(`${array}`),
      last () (array),
    ];

    results.forEach(result => {
      expect(`${result}`).toBe('3');
    });
  });
});
