import { infer } from '../function/infer';

/**
 * Reverses an `array` sorting/order.
 * @param array Array to reverse.
 */
export function reverse<T>(array: T[]): T[];
/**
 * Returns a function that
 * reverses an `array` sorting/order.
 */
export function reverse(): typeof deferred;
export function reverse() {
  return inferred.apply(undefined, arguments);
}

/**
 * Reverses an `array` sorting/order.
 * @param array Array to reverse.
 */
declare function deferred<T>(array: T[]): T[];

const inferred = infer(<T>(array: T[]): T[] => array.slice().reverse());
