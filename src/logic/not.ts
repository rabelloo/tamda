import { Binary, Nullary, Ternary, Unary } from '../operators';

export function not<F extends Nullary<boolean>>(fn: F): F;
export function not<A, F extends Unary<A, boolean>>(fn: F): F;
export function not<A, B, F extends Binary<A, B, boolean>>(fn: F): F;
export function not<A, B, C, F extends Ternary<A, B, C, boolean>>(fn: F): F;

/**
 * Negates values returned by the specified function.
 *
 * @note Negate means the opposite boolean value, e.g. `negate(true) === false`.
 *
 * Ramda's `complement`.
 */
// tslint:disable-next-line: ban-types
export function not(fn: Function): (...args: any[]) => boolean {
  return (...args: any[]) => !fn(...args);
}
