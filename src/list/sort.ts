import { infer } from '../function/infer';
import { compareValue } from '../helpers/compareValue';
import { Unary } from '../operators';

export function sort<T>(array: T[], compareFn?: (a: T, b: T) => number): T[];
export function sort<T>(compareFn?: (a: T, b: T) => number): Unary<T[], T[]>;
/**
 * Sorts the array according to a specified compare function.
 * @param compareFn Function that compares two values (`a` and `b`).
 * Return `1` for `a -> b`, or `-1` for `b -> a`, or `0` for no change.
 *
 * Default: `Array.prototype.sort`
 */
export function sort(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _sort(...args);
}

// tslint:disable-next-line: variable-name
const _sort = infer(
  <T>(array: T[], compareFn: (a: T, b: T) => number = compareValue): T[] =>
    array.slice().sort(compareFn),
  args => args[0] instanceof Array
);
