import { infer } from '../function/infer';
import { Reducer } from '../operators';

/**
 * Reduces an `array` to an accumulated form according to a function `reduceFn`.
 * @param array Array to reduce.
 * @param reduceFn A function that accumulates members.
 * @param initialValue Accumulator initial value.
 */
export function reduce<T, R>(
  array: T[],
  reduceFn: Reducer<T, R>,
  initialValue: R
): R;
/**
 * Returns a function that
 * reduces an `array` to an accumulated form according to a function `reduceFn`.
 * @param reduceFn A function that accumulates members.
 * @param initialValue Accumulator initial value.
 */
export function reduce<T, R>(
  reduceFn: Reducer<T, R>,
  initialValue: R
): typeof deferred;
export function reduce() {
  return inferred.apply(undefined, arguments);
}

/**
 * Reduces an `array` to an accumulated form according to a previously specified function `reduceFn`.
 * @param array Array to reduce.
 */
declare function deferred<T, R>(array: T[]): R;

const inferred = infer(
  <T, R>(array: T[], reduceFn: Reducer<T, R>, initialValue: R): R =>
    array.reduce(reduceFn, initialValue)
);
