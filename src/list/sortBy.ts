import { infer } from '../function/infer';
import { compareString } from '../helpers/compareString';
import { compareValue } from '../helpers/compareValue';
import { opposite } from '../logic/opposite';
import { sort } from './sort';

/**
 * Sorts an `array` according to the values extracted by a function `mapFn`.
 * @param array Array to map.
 * @param mapFn Function that extracts a value from each item.
 * @param options Optionally determine whether to sort in reverse (descending).
 */
export function sortBy<T>(array: T[], mapFn: MapFn<T>, options?: Options): T[];
/**
 * Returns a function that
 * sorts an `array` according to the values extracted by a function `mapFn`.
 * @param mapFn Function that extracts a value from each item.
 * @param options Optionally determine whether to sort in reverse (descending).
 */
export function sortBy<T>(mapFn: MapFn<T>, options?: Options): typeof deferred;
export function sortBy() {
  return inferred.apply(undefined, arguments);
}

/**
 * Sorts an `array` according to the values extracted by a previously specified function `mapFn`.
 * @param array Array to map.
 */
declare function deferred<T>(array: T[]): T[];

type MapFn<T> = (item: T) => any;
interface Options {
  reverse: boolean;
}

const inferred = infer(
  <T>(array: T[], mapFn: MapFn<T>, options: Options = { reverse: false }): T[] =>
    sort(
      array,
      !options.reverse ? compareFn(mapFn) : opposite(compareFn(mapFn))
    ),
  args => args[0] instanceof Array
);

function compareFn<T>(mapFn: MapFn<T>): (itemA: T, itemB: T) => number {
  return (itemA: T, itemB: T) => {
    const valueA = mapFn(itemA);
    const valueB = mapFn(itemB);

    return typeof valueA === 'string'
      ? compareString(valueA, valueB)
      : compareValue(valueA, valueB);
  };
}
