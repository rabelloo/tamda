import { infer } from '../function/infer';
import { Unary } from '../operators';

export function reduceWhile<T, U>(
  array: T[],
  whileFn: (acc: U, item: T, index: number, array: T[]) => boolean,
  reduceFn: (acc: U, item: T, index: number, array: T[]) => U,
  initialValue: U
): U;
export function reduceWhile<T, U>(
  whileFn: (acc: U, item: T, index: number, array: T[]) => boolean,
  reduceFn: (acc: U, item: T, index: number, array: T[]) => U,
  initialValue: U
): Unary<T[], U>;
/**
 * Reduces the array to an accumulated form while the predicate is true.
 * @param whileFn A function that determines when to stop reducing,
 * return true to continue or false to stop.
 * @param reduceFn A function that accumulates members.
 */
export function reduceWhile(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _reduceWhile(...args);
}

// tslint:disable-next-line: variable-name
const _reduceWhile = infer(
  <T, U>(
    array: T[],
    whileFn: (acc: U, item: T, index: number, array: T[]) => boolean,
    reduceFn: (acc: U, item: T, index: number, array: T[]) => U,
    initialValue: U
  ): U => {
    let acc = initialValue;
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      const next = reduceFn(acc, item, i, array);

      if (!whileFn(next, item, i, array)) {
        break;
      }

      acc = next;
    }

    return acc;
  }
);
