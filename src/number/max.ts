import { infer } from '../function/infer';

/**
 * Determines the largest number in an `array`.
 * @param array Array to find largest number in.
 */
export function max(array: number[]): number;
/**
 * Returns a function that
 * determines the largest number in an `array`.
 */
export function max(): typeof deferred;
export function max() {
  return inferred.apply(undefined, arguments);
}

/**
 * Determines the largest number in an `array`.
 * @param array Array to find largest number in.
 */
declare function deferred(array: number[]): number;

const inferred = infer((numbers: number[]): number => Math.max(...numbers));
