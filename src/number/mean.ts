import { infer } from '../function/infer';
import { sum } from './sum';

/**
 * Determines the mean (average) of all `array` numbers.
 * @param array Array with numbers to determine mean.
 */
export function mean(array: number[]): number;
/**
 * Returns a function that
 * determines the mean (average) of all `array` numbers.
 */
export function mean(): typeof deferred;
export function mean() {
  return inferred.apply(undefined, arguments);
}

/**
 * Determines the mean (average) of all `array` numbers.
 * @param array Array with numbers to determine mean.
 */
declare function deferred(array: number[]): number;

const inferred = infer((array: number[]) => sum(array) / array.length);
