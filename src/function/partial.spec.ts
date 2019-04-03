import { partial } from './partial';

describe('partial', () => {
  it('should create a partially applied version of the supplied function', () => {
    const fn = (a: number, b: number, c: number, d: number) => a + b + c + d;

    const partially = partial(fn, 1, 1);

    expect(partially(1, 1)).toBe(4);
  });
});
