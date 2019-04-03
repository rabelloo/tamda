import { infer } from '../function/infer';
import { Unary } from '../operators';

export function find<T>(
  array: T[],
  predicate: (item: T, index: number, array: T[]) => boolean
): T | undefined;
export function find<T>(
  predicate: (item: T, index: number, array: T[]) => boolean
): Unary<T[], T | undefined>;
/**
 * Finds the first item in an array that matches the specified predicate,
 * or `undefined` if no match is found.
 * @param predicate Function that determines whether or not the item is a match.
 */
export function find(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _find(...args);
}

// tslint:disable-next-line: variable-name
const _find = infer(
  <T>(
    array: T[],
    predicate: (item: T, index: number, array: T[]) => boolean
  ): T | undefined => array.find(predicate)
);
