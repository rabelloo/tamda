/**
 * Creates a function that opposes values returned by a function `fn`.
 * @note Opposite means multiplying numbers by -1.
 * @note Ramda's `negate`.
 */
export function opposite<F extends NumberFn>(fn: F): F {
  // tslint:disable-next-line: only-arrow-functions
  return function () {
    return fn.apply(undefined, arguments) * -1;
  } as F;
}

type NumberFn = (...args: any[]) => number;
