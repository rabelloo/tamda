import { infer } from '../function/infer';
import { compareValue } from '../helpers/compareValue';

/**
 * Sorts an `array` according to a function `compareFn`.
 * @param array Array to sort.
 * @param compareFn Function that compares two values (`a` and `b`).
 * Return `1` for `a -> b`, or `-1` for `b -> a`, or `0` for no change.
 *
 * Default: `compareValue`
 */
export function sort<T>(array: T[], compareFn?: CompareFn<T>): T[];
/**
 * Returns a function that
 * sorts an `array` according to a function `compareFn`.
 * @param compareFn Function that compares two values (`a` and `b`).
 * Return `1` for `a -> b`, or `-1` for `b -> a`, or `0` for no change.
 *
 * Default: `compareValue`
 */
export function sort<T>(compareFn?: CompareFn<T>): typeof deferred;
export function sort() {
  return inferred.apply(undefined, arguments);
}

/**
 * Sorts an `array` according to a previously specified function `compareFn`.
 * @param array Array to sort.
 */
declare function deferred<T>(array: T[]): T[];

type CompareFn<T> = (a: T, b: T) => number;

const inferred = infer(
  <T>(array: T[], compareFn: CompareFn<T> = compareValue): T[] =>
    array.slice().sort(compareFn),
  (args) => args[0] instanceof Array
);
