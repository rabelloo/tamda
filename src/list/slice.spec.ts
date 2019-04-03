import { slice } from './slice';

describe('slice', () => {
  it('should slice a list according to start and end index', () => {
    const array = [1, 2, 3];
    const start = 0;
    const end = 2;

    const results = [
      slice(array, start, end),
      slice (start, end) (array),

      slice(`${array}`, start, end + 1),
    ];

    results.forEach(result => {
      expect(`${result}`).toEqual('1,2');
    });
  });
});
