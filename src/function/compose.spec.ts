import { compose } from './compose';

describe('compose', () => {
  it('should compose a series of unary functions into a single right-to-left function', () => {
    const concat = (b: string) => (a: string) => a + b;

    const composed = compose(
      concat('e'),
      concat('d'),
      concat('c'),
      concat('b')
    );

    expect(composed('a')).toBe('abcde');
  });

  it('should accept n-ary function as last argument (first operator)', () => {
    const identity = (a: any) => a;

    const composed = compose(
      identity,
      identity,
      (a: string, b: boolean) => a + b
    );

    expect(composed('foo', true)).toBe('footrue');
  });
});
