import { infer } from '../function/infer';

/**
 * Counts the number of characters in the string `text`, i.e. `length`.
 * @param text String to count.
 */
export function count(text: string): number;
/**
 * Counts the number of members in the `array`, i.e. `length`.
 * @param array Array to count.
 */
export function count<T>(array: T[]): number;
/**
 * Returns a function that
 * counts the number of members in the list, i.e. `length`.
 */
export function count(): typeof deferred;

export function count() {
  return inferred.apply(undefined, arguments);
}

/**
 * Counts the number of members in the `list`, i.e. `length`.
 * @param list List to count.
 */
declare function deferred<T>(list: string | T[]): number;

const inferred = infer(<T>(list: string | T[]): number => list.length);
