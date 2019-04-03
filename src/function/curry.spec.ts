import { curry } from './curry';

describe('curry', () => {
  it('should create a curried version of the supplied function', () => {
    const fn = (a: number, b: number) => a + b;

    const curried = curry(fn);

    expect(curried(1)(1)).toBe(2);
  });

  it('should optimize arities up to 5', () => {
    const fn0 = () => 0;
    const fn1 = (a: number) => a;
    const fn2 = (a: number, b: number) => a + b;
    const fn3 = (a: number, b: number, c: number) => a + b + c;
    const fn4 = (a: number, b: number, c: number, d: number) => a + b + c + d;
    const fn5 = (a: number, b: number, c: number, d: number, e: number) =>
      a + b + c + d + e;

    const curried0 = curry(fn0);
    const curried1 = curry(fn1);
    const curried2 = curry(fn2);
    const curried3 = curry(fn3);
    const curried4 = curry(fn4);
    const curried5 = curry(fn5);

    expect(curried0()).toBe(0);
    expect(curried1(1)).toBe(1);
    expect(curried2(1)(1)).toBe(2);
    expect(curried3(1)(1)(1)).toBe(3);
    expect(curried4(1)(1)(1)(1)).toBe(4);
    expect(curried5(1)(1)(1)(1)(1)).toBe(5);
  });

  it(`should support arities larger than 5, however it's not optimized`, () => {
    const fn6 = (
      a: number,
      b: number,
      c: number,
      d: number,
      e: number,
      f: number
    ) => a + b + c + d + e + f;

    const curried6 = curry(fn6);

    expect(curried6(1)(1)(1)(1)(1)(1)).toBe(6);
  });
});
