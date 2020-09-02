import { infer } from '../function/infer';
import { Reducer, ReducePredicate } from '../operators';

/**
 * Reduces an `array` to an accumulated form according to a function `reduceFn` while a predicate `whileFn` is true.
 * @param array Array to reduce.
 * @param whileFn A function that determines when to stop reducing, return true to continue or false to stop.
 * @param reduceFn A function that accumulates members.
 * @param initialValue Accumulator initial value.
 */
export function reduceWhile<T, R>(
  array: T[],
  whileFn: ReducePredicate<T, R>,
  reduceFn: Reducer<T, R>,
  initialValue: R
): R;
/**
 * Returns a function that
 * reduces an `array` to an accumulated form according to a function `reduceFn` while a predicate `whileFn` is true.
 * @param whileFn A function that determines when to stop reducing, return true to continue or false to stop.
 * @param reduceFn A function that accumulates members.
 * @param initialValue Accumulator initial value.
 */
export function reduceWhile<T, U>(
  whileFn: (acc: U, item: T, index: number, array: T[]) => boolean,
  reduceFn: (acc: U, item: T, index: number, array: T[]) => U,
  initialValue: U
): typeof deferred;
export function reduceWhile() {
  return inferred.apply(undefined, arguments);
}

/**
 * Reduces an `array` to an accumulated form according to a previously specified
 * function `reduceFn` while a previously specified predicate `whileFn` is true.
 * @param array Array to reduce.
 */
declare function deferred<T, R>(array: T[]): R;

const inferred = infer(
  <T, R>(
    array: T[],
    whileFn: ReducePredicate<T, R>,
    reduceFn: Reducer<T, R>,
    initialValue: R
  ): R => {
    let accumulator = initialValue;
    for (let index = 0; index < array.length; index++) {
      const item = array[index];
      const next = reduceFn(accumulator, item, index, array);

      if (!whileFn(next, item, index, array)) {
        break;
      }

      accumulator = next;
    }

    return accumulator;
  }
);
