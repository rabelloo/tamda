import { infer } from '../function/infer';

/**
 * Appends string `b` to string `a`.
 * @param a Base string.
 * @param b String to be appended.
 */
export function concat(a: string, b: string): string;
/**
 * Returns a function that
 * appends string `b` to string `a`.
 * @param b String to be appended.
 */
export function concat(b: string): typeof deferredString;

/**
 * Appends an `item` to an `array`.
 * @param array Array to append item to.
 * @param item Item to append to array.
 */
export function concat<T>(array: T[], item: T | T[]): T[];
/**
 * Returns a function that
 * appends an `item` to an `array`.
 * @param item Item to append to array.
 */
export function concat<T>(item: T | T[]): typeof deferredArray;

export function concat() {
  return inferred.apply(undefined, arguments);
}

/**
 * Appends previously specified string `b` to string `a`.
 * @param a Base string.
 */
declare function deferredString(a: string): string;

/**
 * Appends a previously specified `item` to an `array`.
 * @param array Array to append item to.
 */
declare function deferredArray<T>(array: T[]): T[];

const inferred = infer(<T>(list: T[], item: T | T[]): T[] => list.concat(item));
