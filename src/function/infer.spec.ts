import { infer } from './infer';

describe('infer', () => {
  it(`should create a function that can infer the first argument
  based on the original function\'s argument length`, () => {
    const fn = (a: number, b: number) => a + b;

    const inferred = infer(fn);

    expect(inferred(1)(1)).toBe(2);
    expect(inferred(1, 1)).toBe(2);
  });

  it(`should create a function that can infer the first argument based on the specified predicate`, () => {
    // one such use case is a function with default argument values
    const defaultFn = (a: number[], b = 'test') => a + b;
    // another use case is a function with spread arguments
    const spreadFn = (a: number, ...rest: string[]) => `${a}`.concat(...rest);

    const defaultInferred = infer(defaultFn, args => args[0] instanceof Array);
    const spreadInferred = infer(spreadFn, args => typeof args[0] === 'number');

    expect(defaultInferred('2')([1])).toBe('12');
    expect(defaultInferred([1])).toBe('1test');

    expect(spreadInferred('2', '3')(1)).toBe('123');
    expect(spreadInferred(1, '2', '3')).toBe('123');
  });
});
