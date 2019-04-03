import { infer } from '../function/infer';
import { not } from '../logic/not';
import { Unary } from '../operators';

export function skipWhile<T>(
  array: T[],
  whileFn: (item: T, index: number, array: T[]) => boolean
): T[];
export function skipWhile<T>(
  whileFn: (item: T, index: number, array: T[]) => boolean
): Unary<T[], T[]>;
/**
 * Skips items at the start of the list while the predicate is true.
 * @param whileFn A function that determines when to stop skiping,
 * return true to continue or false to stop.
 */
export function skipWhile(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _skipWhile(...args);
}

// tslint:disable-next-line: variable-name
const _skipWhile = infer(
  <T>(
    array: T[],
    whileFn: (item: T, index: number, array: T[]) => boolean
  ): T[] => {
    const index = array.findIndex(not(whileFn));
    return index === -1 ? [] : array.slice(index);
  }
);
