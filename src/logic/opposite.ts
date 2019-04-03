/**
 * Opposes values returned by the specified function.
 *
 * @note Opposite means multiplying numbers by -1.
 *
 * Ramda's `negate`.
 */
export function opposite<F extends NumberFn>(fn: F): F {
  return ((...args: any[]) => fn(...args) * -1) as any;
}

type NumberFn = (...args: any[]) => number;
