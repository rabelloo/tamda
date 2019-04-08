import { infer } from '../function/infer';
import { not } from '../logic/not';
import { Predicate } from '../operators';

/**
 * Skips items at the start of an `array` while a predicate `whileFn` is true.
 * @param array Array to skip items in.
 * @param whileFn Function that determines when to stop skiping, return true to continue or false to stop.
 */
export function skipWhile<T>(array: T[], whileFn: Predicate<T>): T[];
/**
 * Returns a function that
 * skips items at the start of an `array` while a predicate `whileFn` is true.
 * @param whileFn Function that determines when to stop skiping, return true to continue or false to stop.
 */
export function skipWhile<T>(whileFn: Predicate<T>): typeof deferred;
export function skipWhile() {
  return inferred.apply(undefined, arguments);
}

/**
 * Skips items at the start of an `array` while a previously specified predicate `whileFn` is true.
 * @param array Array to skip items in.
 */
declare function deferred<T>(array: T[]): T[];

const inferred = infer(
  <T>(array: T[], whileFn: Predicate<T>): T[] => {
    const index = array.findIndex(not(whileFn));
    return index === -1 ? [] : array.slice(index);
  }
);
