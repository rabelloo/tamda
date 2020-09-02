import {
  Binary,
  Denary,
  Novenary,
  Nullary,
  Octonary,
  Quaternary,
  Quinary,
  Senary,
  Septenary,
  Ternary,
  Unary,
} from '../operators';

/**
 * Creates a function that negates values returned by a function `fn`.
 * @note Negate means the opposite boolean value, e.g. `negate(true) === false`.
 * @note Ramda's `complement`.
 * @param fn Function to base on.
 */
export function not<T extends Nullary<boolean>>(fn: T): T;
export function not<A, T extends Unary<A, boolean>>(fn: T): T;
export function not<A, B, T extends Binary<A, B, boolean>>(fn: T): T;
export function not<A, B, C, T extends Ternary<A, B, C, boolean>>(fn: T): T;
export function not<A, B, C, D, T extends Quaternary<A, B, C, D, boolean>>(
  fn: T
): T;
export function not<A, B, C, D, E, T extends Quinary<A, B, C, D, E, boolean>>(
  fn: T
): T;
export function not<
  A,
  B,
  C,
  D,
  E,
  F,
  T extends Senary<A, B, C, D, E, F, boolean>
>(fn: T): T;
export function not<
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  T extends Septenary<A, B, C, D, E, F, G, boolean>
>(fn: T): T;
export function not<
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  T extends Octonary<A, B, C, D, E, F, G, H, boolean>
>(fn: T): T;
export function not<
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  T extends Novenary<A, B, C, D, E, F, G, H, I, boolean>
>(fn: T): T;
export function not<
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  T extends Denary<A, B, C, D, E, F, G, H, I, J, boolean>
>(fn: T): T;

// tslint:disable-next-line: ban-types
export function not(fn: Function): (...args: unknown[]) => boolean {
  // tslint:disable-next-line: only-arrow-functions
  return function () {
    return !fn.apply(undefined, arguments);
  };
}
