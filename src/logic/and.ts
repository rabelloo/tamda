import { Binary, Nullary, Ternary, Unary } from '../operators';

export function and(...functions: Nullary<any>[]): Nullary<boolean>;
export function and<A>(...functions: Unary<A, any>[]): Unary<A, boolean>;
export function and<A, B>(
  ...functions: Binary<A, B, any>[]
): Binary<A, B, boolean>;
export function and<A, B, C>(
  ...functions: Ternary<A, B, C, any>[]
): Ternary<A, B, C, boolean>;

/**
 * Evaluates whether all values returned by the specified functions are truthy.
 *
 * i.e. `fn1() && fn2()`
 *
 * Ramda's `both`.
 *
 * @example
 * ```typescript
 * const larger = curry((limit, num) => num > limit);
 * const smaller = curry((limit, num) => num < limit);
 * const between = (min, max) => and(larger(min), smaller(max));
 * const between0and10 = between(0, 10);
 * between0and10(5);
 * // true
 * between0and10(15);
 * // false
 * ```
 */
// tslint:disable-next-line: ban-types
export function and(...functions: Function[]): (...args: any[]) => boolean {
  return (...args: any[]) => functions.every(fn => Boolean(fn(...args)));
}
