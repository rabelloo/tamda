import { infer } from '../function/infer';

/**
 * Sums all `array` numbers.
 */
export function sum(array: number[]): number;
/**
 * Returns a function that
 * sums all `array` numbers.
 */
export function sum(): typeof deferred;
export function sum() {
  return inferred.apply(undefined, arguments);
}

/**
 * Sums all `array` numbers.
 */
declare function deferred(array: number[]): number;

const inferred = infer(
  (array: number[]): number => array.reduce((total, n) => total + n, 0)
);
