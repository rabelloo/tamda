import { compose } from './compose';

describe('compose', () => {
  it('should compose a series of unary functions into a single right-to-left function', () => {
    const subtract = (b: number) => (a: number) => a - b;
    const multiply = (b: number) => (a: number) => a * b;
    const sum = (b: number) => (a: number) => a + b;

    const composed = compose(
      subtract(1),
      multiply(2),
      sum(1),
      (_a: string, _b: boolean) => 1
    );

    expect(composed('foo', true)).toBe(3);
  });
});
