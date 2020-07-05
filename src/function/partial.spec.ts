import { partial } from './partial';

describe('partial', () => {
  it('should create a partially applied version of the supplied function', () => {
    const fn = (a: string, b: string, c: string, d: string) => a + b + c + d;

    const partially = partial(fn, 'a', 'b');

    expect(partially('c', 'd')).toBe('abcd');
  });
});
