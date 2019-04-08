import { infer } from '../function/infer';

/**
 * Determines whether or not a string `text` is empty.
 * @param text String to check.
 */
export function isEmpty(text: string): boolean;
/**
 * Determines whether or not an `array` is empty.
 * @param array Array to check.
 */
export function isEmpty<T>(array: T[]): boolean;
/**
 * Returns a function that
 * determines whether or not a `list` is empty.
 */
export function isEmpty(): typeof deferred;
export function isEmpty() {
  return inferred.apply(undefined, arguments);
}

/**
 * Determines whether or not a `list` is empty.
 * @param list List to check.
 */
declare function deferred<T>(list: string | T[]): boolean;

const inferred = infer(<T>(list: string | T[]): boolean => list.length === 0);
