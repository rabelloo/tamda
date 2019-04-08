import { infer } from '../function/infer';
import { Predicate } from '../operators';

/**
 * Determines whether or not any member of an `array` matches a `predicate`.
 * @param array Array to look in.
 * @param predicate Function to determine a match.
 */
export function any<T>(array: T[], predicate: Predicate<T>): boolean;
/**
 * Returns a function that
 * determines whether or not any member of an `array` matches a `predicate`.
 * @param predicate Function to determine a match.
 */
export function any<T>(predicate: Predicate<T>): typeof deferred;
export function any() {
  return inferred.apply(undefined, arguments);
}

/**
 * Determines whether or not any member of an `array` matches a previously specified `predicate`.
 * @param array Array to look in.
 */
declare function deferred<T>(array: T[]): boolean;

const inferred = infer(
  <T>(array: T[], predicate: Predicate<T>): boolean => array.some(predicate)
);
