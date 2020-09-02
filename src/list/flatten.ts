import { infer } from '../function/infer';

/**
 * Flattens one level of an `array`.
 * @param array Array to flatten.
 */
export function flatten<T>(array: (T | T[])[]): T[];
/**
 * Returns a function that
 * flattens one level of an `array`.
 */
export function flatten<T>(): typeof deferred;
export function flatten() {
  return inferred.apply(undefined, arguments);
}

/**
 * Flattens one level of an `array`.
 * @param array Array to flatten.
 */
declare function deferred<T>(array: (T | T[])[]): T[];

const inferred = infer(<T>(array: (T | T[])[]): T[] =>
  Array.prototype.concat(...array)
);
