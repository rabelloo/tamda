import { curry } from './curry';

describe('curry', () => {
  it('should create a curried version of the supplied function', () => {
    const fn = (a: number, b: number) => a + b;

    const curried = curry(fn);

    expect(curried(1)(1)).toBe(2);
  });

  it('should optimize arities up to 5', () => {
    const nAry0 = () => 0;
    const nAry1 = (a: number) => a;
    const nAry2 = (a: number, b: number) => a + b;
    const nAry3 = (a: number, b: number, c: number) => a + b + c;
    const nAry4 = (a: number, b: number, c: number, d: number) => a + b + c + d;
    const nAry5 = (a: number, b: number, c: number, d: number, e: number) =>
      a + b + c + d + e;
    const nAry6 = (a: number, b: number, c: number, d: number, e: number, f: number) =>
      a + b + c + d + e + f;
    const nAry7 = (a: number, b: number, c: number, d: number, e: number, f: number, g: number) =>
      a + b + c + d + e + f + g;
    const nAry8 = (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) =>
      a + b + c + d + e + f + g + h;
    const nAry9 = (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) =>
      a + b + c + d + e + f + g + h + i;
    const nAry10 = (
      a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number
    ) => a + b + c + d + e + f + g + h + i + j;

    const curriedFunctions = [
      curry(nAry0),
      curry(nAry1),
      curry(nAry2),
      curry(nAry3),
      curry(nAry4),
      curry(nAry5),
      curry(nAry6),
      curry(nAry7),
      curry(nAry8),
      curry(nAry9),
      curry(nAry10),
    ];

    const loop = (fn: (arg: any) => any, times: number, value = 1) =>
      Array(times || 1).fill(null).reduce(next => next(value), fn);

    curriedFunctions.forEach((fn, i) => {
      expect(loop(fn, i)).toBe(i);
    });
  });

  it(`should support arities larger than 10, however it's not optimized`, () => {
    const nAry11 = (
      a: number, b: number, c: number, d: number, e: number, f: number,
      g: number, h: number, i: number, j: number, k: number
    ) => a + b + c + d + e + f + g + h + i + j + k;

    const c11 = curry(nAry11);

    expect(c11(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)).toBe(11);
  });
});
