import { memoize } from './memoize';

describe('memoize', () => {
  it(`should create a function that memoizes calls to the specified function based on arguments`, () => {
    let count = 0;
    const fn0 = () => count++;
    const fn1 = (_: any) => count++;

    const memoized0 = memoize(fn0);
    const memoized1 = memoize(fn1);

    repeat(10, () => memoized0());
    expect(count).toBe(1);

    repeat(10, () => memoized1(1));
    expect(count).toBe(2);

    repeat(10, () => memoized1('qwerty'));
    expect(count).toBe(3);

    repeat(10, () => memoized1(true));
    expect(count).toBe(4);

    const array: any = [];
    repeat(10, () => memoized1(array));
    expect(count).toBe(5);

    const obj = {};
    repeat(10, () => memoized1(obj));
    expect(count).toBe(6);
  });
});

function repeat(times: number, fn: () => any) {
  Array(times)
    .fill(null)
    .forEach(() => fn());
}
