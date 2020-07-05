import { tap } from './tap';

describe('tap', () => {
  it('should invoke the specified function and return the argument itself', () => {
    let invoked = 0;
    const array = [1, 2, 3];
    const fn = () => invoked++;

    // prettier-ignore
    const results = [
      tap(array, fn),
      tap (fn) (array),
    ];

    results.forEach((result) => {
      expect(result).toBe(array);
    });
    expect(invoked).toBe(2);
  });
});
