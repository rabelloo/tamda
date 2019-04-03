import { infer } from '../function/infer';
import { not } from '../logic/not';
import { Unary } from '../operators';

export function takeWhile<T>(
  array: T[],
  whileFn: (item: T, index: number, array: T[]) => boolean
): T[];
export function takeWhile<T>(
  whileFn: (item: T, index: number, array: T[]) => boolean
): Unary<T[], T[]>;
/**
 * Takes items from the start of the list while the predicate is true.
 * @param whileFn A function that determines when to stop taking,
 * return true to continue or false to stop.
 */
export function takeWhile(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _takeWhile(...args);
}

// tslint:disable-next-line: variable-name
const _takeWhile = infer(
  <T>(
    array: T[],
    whileFn: (item: T, index: number, array: T[]) => boolean
  ): T[] => {
    const index = array.findIndex(not(whileFn));
    return index === -1 ? array : array.slice(0, index);
  }
);
