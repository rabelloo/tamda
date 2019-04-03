import { infer } from '../function/infer';
import { Unary } from '../operators';

export function map<T, U>(
  array: T[],
  mapFn: (item: T, index: number, array: T[]) => U
): U[];
export function map<T, U>(
  mapFn: (item: T, index: number, array: T[]) => U
): Unary<T[], U[]>;
/**
 * Transforms each item in an array according to a `mapFn`.
 * @param mapFn A function that projects each member to its new form.
 */
export function map(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _map(...args);
}

// tslint:disable-next-line: variable-name
const _map = infer(
  <T, U>(array: T[], mapFn: (item: T, index: number, array: T[]) => U): U[] =>
    array.map(mapFn)
);
