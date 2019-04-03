import { infer } from '../function/infer';
import { Unary } from '../operators';

export function all<T>(
  array: T[],
  predicate: (item: T, index: number, array: T[]) => boolean
): boolean;
export function all<T>(
  predicate: (item: T, index: number, array: T[]) => boolean
): Unary<T[], boolean>;
/**
 * Determines whether or not all items in the array match a specified predicate.
 * @param predicate Function to determine a match.
 */
export function all(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _all(...args);
}

// tslint:disable-next-line: variable-name
const _all = infer(
  <T>(
    array: T[],
    predicate: (item: T, index: number, array: T[]) => boolean
  ): boolean => array.every(predicate)
);
