import { infer } from '../function/infer';
import { Unary } from '../operators';

export function filter<T>(
  array: T[],
  predicate: (item: T, index: number, array: T[]) => boolean
): T[];
export function filter<T>(
  predicate: (item: T, index: number, array: T[]) => boolean
): Unary<T[], T[]>;
/**
 * Filters the members of an array so that only those who match the criteria specified in the predicate will be kept.
 * @param predicate Function that determines whether or not the item is kept in the resulting array.
 */
export function filter(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _filter(...args);
}

// tslint:disable-next-line: variable-name
const _filter = infer(
  <T>(
    array: T[],
    predicate: (item: T, index: number, array: T[]) => boolean
  ): T[] => array.filter(predicate)
);
