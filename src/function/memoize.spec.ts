import { memoize } from './memoize';

describe('memoize', () => {
  it(`should create a function that memoizes calls to the specified function based on arguments`, () => {
    let count = 0;
    const fn = () => count++;

    const memoized = memoize(fn);

    repeat(10, memoized);
    expect(count).toBe(1);
  });

  it(`should work with optional/rest arguments`, () => {
    let count = 0;
    const fn = (_0: any, _1?: any, ..._rest: any[]) => count++;

    const memoized = memoize(fn);

    repeat(10, () => memoized('foo'));
    expect(count).toBe(1);

    repeat(10, () => memoized('foo', 'bar'));
    expect(count).toBe(2);

    repeat(10, () => memoized('foo', 'bar', 1, 2, 3));
    expect(count).toBe(3);
  });

  it(`should work with any type of argument`, () => {
    let count = 0;
    const fn = (_: any) => count++;

    const memoized = memoize(fn);

    repeat(10, () => memoized(123));
    expect(count).toBe(1);

    repeat(10, () => memoized('qwerty'));
    expect(count).toBe(2);

    repeat(10, () => memoized(true));
    expect(count).toBe(3);

    const array: any = [];
    repeat(10, () => memoized(array));
    expect(count).toBe(4);

    const obj = {};
    repeat(10, () => memoized(obj));
    expect(count).toBe(5);

    repeat(10, () => memoized(undefined));
    expect(count).toBe(6);

    repeat(10, () => memoized(null));
    expect(count).toBe(7);

    repeat(10, () => memoized(NaN));
    expect(count).toBe(8);
  });
});

const repeat = (times: number, fn: () => any) =>
  Array(times)
    .fill(undefined)
    .forEach(() => fn());
