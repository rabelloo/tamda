import { infer } from '../function/infer';
import { not } from '../logic/not';
import { Predicate } from '../operators';

/**
 * Takes items from the start of an `array` while a predicate `whileFn` is true.
 * @param array Array to take items from.
 * @param whileFn A function that determines when to stop taking, return true to continue or false to stop.
 */
export function takeWhile<T>(array: T[], whileFn: Predicate<T>): T[];
/**
 * Returns a function that
 * takes items from the start of an `array` while a predicate `whileFn` is true.
 * @param whileFn A function that determines when to stop taking, return true to continue or false to stop.
 */
export function takeWhile<T>(whileFn: Predicate<T>): typeof deferred;
export function takeWhile() {
  return inferred.apply(undefined, arguments);
}

/**
 * Takes items from the start of an `array` while a previously specified predicate `whileFn` is true.
 * @param array Array to take items from.
 */
declare function deferred<T>(array: T[]): T[];

const inferred = infer(<T>(array: T[], whileFn: Predicate<T>): T[] => {
  const index = array.findIndex(not(whileFn));
  return index === -1 ? array : array.slice(0, index);
});
