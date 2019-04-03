import { infer } from '../function/infer';
import { Unary } from '../operators';

export function reduce<T, U>(
  array: T[],
  reduceFn: (acc: U, item: T, index: number, array: T[]) => U,
  initialValue: U
): U;
export function reduce<T, U>(
  reduceFn: (acc: U, item: T, index: number, array: T[]) => U,
  initialValue: U
): Unary<T[], U>;
/**
 * Reduces the array to an accumulated form.
 * @param reduceFn A function that accumulates members.
 */
export function reduce(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _reduce(...args);
}

// tslint:disable-next-line: variable-name
const _reduce = infer(
  <T, U>(
    array: T[],
    reduceFn: (acc: U, item: T, index: number, array: T[]) => U,
    initialValue: U
  ): U => array.reduce(reduceFn, initialValue)
);
