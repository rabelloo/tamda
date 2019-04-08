import { infer } from '../function/infer';

/**
 * Returns the last character in a string `text`, or `undefined` if empty.
 * @param text String to get last character from.
 */
export function last(text: string): string | undefined;
/**
 * Returns the last item in an `array`, or `undefined` if empty.
 * @param array Array to get last item from.
 */
export function last<T>(array: T[]): T | undefined;
/**
 * Returns a function that
 * returns the last item in a `list`, or `undefined` if empty.
 */
export function last(): typeof deferred;
export function last() {
  return inferred.apply(undefined, arguments);
}

/**
 * Returns the last item in a `list`, or `undefined` if empty.
 * @param list List to get last item from.
 */
declare function deferred<T>(list: string | T[]): T | undefined;

const inferred = infer(<T>(list: T[]): T => list[list.length - 1]);
