import { infer } from '../function/infer';
import { sort } from '../list/sort';

/**
 * Determines the median of all `array` numbers.
 * @param array Array with numbers to determine median.
 */
export function median(array: number[]): number;
/**
 * Returns a function that
 * determines the median of all `array` numbers.
 */
export function median(): typeof deferred;
export function median() {
  return inferred.apply(undefined, arguments);
}

/**
 * Determines the median of all `array` numbers.
 * @param array Array with numbers to determine median.
 */
declare function deferred(array: number[]): number;

const inferred = infer((array: number[]) => {
  const sorted = sort(array);
  const odd = sorted.length % 2;

  return odd ? middle(sorted) : middleMean(sorted);
});

function middleLeft(array: number[]): number {
  return array[array.length / 2 - 1];
}
function middleRight(array: number[]): number {
  return array[array.length / 2];
}
function middleMean(array: number[]): number {
  return (middleLeft(array) + middleRight(array)) / 2;
}
function middle<T>(array: T[]): T {
  return array[(array.length - 1) / 2];
}
