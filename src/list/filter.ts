import { infer } from '../function/infer';
import { Predicate } from '../operators';

/**
 * Filters the members of an `array` so that only those who match the criteria specified in a `predicate` will be kept.
 * @param array Array to filter.
 * @param predicate Function that determines whether or not an item is kept in the resulting array.
 */
export function filter<T>(array: T[], predicate: Predicate<T>): T[];
/**
 * Returns a function that
 * filters the members of an `array` so that only those who match the criteria specified in a `predicate` will be kept.
 * @param predicate Function that determines whether or not an item is kept in the resulting array.
 */
export function filter<T>(predicate: Predicate<T>): typeof deferred;
export function filter() {
  return inferred.apply(undefined, arguments);
}

/**
 * Filters the members of an `array` so that
 * only those who match the criteria specified in a previously specified `predicate` will be kept.
 * @param array Array to filter.
 */
declare function deferred<T>(array: T[]): T[];

const inferred = infer(
  <T>(array: T[], predicate: Predicate<T>): T[] => array.filter(predicate)
);
