import {
  Binary, Denary, Novenary, Nullary, Octonary, Quaternary,
  Quinary, Senary, Septenary, Ternary, Unary,
} from '../operators';

/**
 * Creates a function that evaluates whether values returned by all `functions` are truthy.
 *
 * i.e. `fn1() && fn2()`
 *
 * @note Ramda's `both`.
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
export function and(...functions: Nullary<unknown>[]): Nullary<boolean>;
export function and<A>(...functions: Unary<A, unknown>[]): Unary<A, boolean>;
export function and<A, B>(...functions: Binary<A, B, unknown>[]): Binary<A, B, boolean>;
export function and<A, B, C>(...functions: Ternary<A, B, C, unknown>[]): Ternary<A, B, C, boolean>;
export function and<A, B, C, D>(...functions: Quaternary<A, B, C, D, unknown>[]): Quaternary<A, B, C, D, boolean>;
export function and<A, B, C, D, E>(...functions: Quinary<A, B, C, D, E, unknown>[]): Quinary<A, B, C, D, E, boolean>;
export function and<A, B, C, D, E, F>(...functions: Senary<A, B, C, D, E, F, unknown>[])
: Senary<A, B, C, D, E, F, boolean>;
export function and<A, B, C, D, E, F, G>(...functions: Septenary<A, B, C, D, E, F, G, unknown>[])
: Septenary<A, B, C, D, E, F, G, boolean>;
export function and<A, B, C, D, E, F, G, H>(...functions: Octonary<A, B, C, D, E, F, G, H, unknown>[])
: Octonary<A, B, C, D, E, F, G, H, boolean>;
export function and<A, B, C, D, E, F, G, H, I>(...functions: Novenary<A, B, C, D, E, F, G, H, I, unknown>[])
: Novenary<A, B, C, D, E, F, G, H, I, boolean>;
export function and<A, B, C, D, E, F, G, H, I, J>(...functions: Denary<A, B, C, D, E, F, G, H, I, J, unknown>[])
: Denary<A, B, C, D, E, F, G, H, I, J, boolean>;

// tslint:disable-next-line: ban-types
export function and(...functions: Function[]): (...args: unknown[]) => boolean {
  // tslint:disable-next-line: only-arrow-functions
  return function() {
    return functions.every(fn => Boolean(fn.apply(undefined, arguments)));
  };
}
