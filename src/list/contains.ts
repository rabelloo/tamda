import { infer } from '../function/infer';

/**
 * Determines whether or not string `b` is a substring of `a`.
 * @param a String to look for `b`.
 * @param b Substring to look for in `a`.
 */
export function contains(a: string, b: string): boolean;
/**
 * Returns a function that
 * determines whether or not string `b` is a substring of `a`.
 * @param b Substring to look for in `a`.
 */
export function contains(b: string): typeof deferredString;

/**
 * Determines whether or not an `array` contains an `item`.
 * @param array Array to look for item in.
 * @param item Item to look for in the array.
 */
export function contains<T>(array: T[], item: T): boolean;
/**
 * Returns a function that
 * determines whether or not an `array` contains an `item`.
 * @param array Array to look for item in.
 * @param item Item to look for in the array.
 */
export function contains<T>(item: T): typeof deferredArray;

export function contains() {
  return inferred.apply(undefined, arguments);
}

/**
 * Determines whether or not previously specified string `b` is a substring of `a`.
 * @param a String to look for `b`.
 */
declare function deferredString(a: string): boolean;

/**
 * Determines whether or not an `array` contains a previously specified `item`.
 * @param array Array to look for item in.
 */
declare function deferredArray<T>(array: T[]): boolean;

const inferred = infer(<T>(list: T[], item: T): boolean => list.includes(item));
