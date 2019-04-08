import { infer } from '../function/infer';

/**
 * Determines the smallest number in an `array`.
 * @param array Array to find smallest number in.
 */
export function min(array: number[]): number;
/**
 * Returns a function that
 * determines the smallest number in an `array`.
 */
export function min(): typeof deferred;
export function min() {
  return inferred.apply(undefined, arguments);
}

/**
 * Determines the smallest number in an `array`.
 * @param array Array to find smallest number in.
 */
declare function deferred(array: number[]): number;

const inferred = infer((numbers: number[]): number => Math.min(...numbers));
