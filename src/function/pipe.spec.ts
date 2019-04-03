import { pipe } from './pipe';

describe('pipe', () => {
  it('should compose a series of unary functions into a single left-to-right function', () => {
    const subtract = (b: number) => (a: number) => a - b;
    const multiply = (b: number) => (a: number) => a * b;
    const sum = (b: number) => (a: number) => a + b;

    const piped = pipe(
      sum(1),
      multiply(2),
      subtract(1)
    );

    expect(piped(1)).toBe(3);
  });
});
