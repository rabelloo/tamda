import { infer } from '../function/infer';
import { Predicate } from '../operators';

/**
 * Finds the first item in an `array` that matches a `predicate`,
 * or `undefined` if no match is found.
 * @param array Array to look in.
 * @param predicate Function that determines whether or not an item is a match.
 */
export function find<T>(array: T[], predicate: Predicate<T>): T | undefined;
/**
 * Returns a function that
 * finds the first item in an `array` that matches a `predicate`,
 * or `undefined` if no match is found.
 * @param predicate Function that determines whether or not an item is a match.
 */
export function find<T>(predicate: Predicate<T>): typeof deferred;
export function find() {
  return inferred.apply(undefined, arguments);
}

/**
 * Finds the first item in an `array` that matches a previously specified `predicate`,
 * or `undefined` if no match is found.
 * @param array Array to look in.
 */
declare function deferred<T>(array: T[]): T | undefined;

const inferred = infer(
  <T>(array: T[], predicate: Predicate<T>): T | undefined =>
    array.find(predicate)
);
