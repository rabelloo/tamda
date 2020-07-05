import { partialRight } from './partialRight';

describe('partialRight', () => {
  it('should create a partially applied from right version of the supplied function', () => {
    const fn = (a: string, b: string, c: string, d: string) => a + b + c + d;

    const partially = partialRight(fn, 'c', 'd');

    expect(partially('a', 'b')).toBe('abcd');
  });
});
