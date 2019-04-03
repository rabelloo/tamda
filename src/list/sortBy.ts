import { infer } from '../function/infer';
import { compareString } from '../helpers/compareString';
import { compareValue } from '../helpers/compareValue';
import { opposite } from '../logic/opposite';
import { Unary } from '../operators';
import { sort } from './sort';

export function sortBy<T>(
  array: T[],
  mapFn: (item: T) => any,
  options?: { reverse: boolean }
): T[];
export function sortBy<T>(
  mapFn: (item: T) => any,
  options?: { reverse: boolean }
): Unary<T[], T[]>;
/**
 * Sorts the array according to the values extracted by a specified function.
 * @param mapFn Function that extracts a value from each `T`.
 * @param options Optionally determine whether to sort in reverse (descending).
 */
export function sortBy(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _sortBy(...args);
}

// tslint:disable-next-line: variable-name
const _sortBy = infer(
  <T>(array: T[], mapFn: (item: T) => any, options = { reverse: false }): T[] =>
    sort(
      array,
      !options.reverse ? compareFn(mapFn) : opposite(compareFn(mapFn))
    ),
  args => args[0] instanceof Array
);

function compareFn<T>(mapFn: (item: T) => any): (itemA: T, itemB: T) => number {
  return (itemA: T, itemB: T) => {
    const valueA = mapFn(itemA);
    const valueB = mapFn(itemB);

    return typeof valueA === 'string'
      ? compareString(valueA, valueB)
      : compareValue(valueA, valueB);
  };
}
