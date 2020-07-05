import { pipe } from './pipe';

describe('pipe', () => {
  it('should compose a series of unary functions into a single left-to-right function', () => {
    const concat = (b: string) => (a: string) => a + b;

    const piped = pipe(
      concat('b'),
      concat('c'),
      concat('d'),
      concat('e'),
      concat('f')
    );

    expect(piped('a')).toBe('abcdef');
  });

  it('should accept n-ary function as first argument/operator', () => {
    const identity = (a: any) => a;

    const piped = pipe(
      (a: string, b: boolean) => a + b,
      identity,
      identity,
      identity
    );

    expect(piped('foo', true)).toBe('footrue');
  });
});
