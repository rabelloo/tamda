import { infer } from '../function/infer';
import { Mapper } from '../operators';

/**
 * Transforms each item in an `array` according to a function `mapFn`.
 * @param array Array to map over.
 * @param mapFn A function that projects each member to its new form.
 */
export function map<T, R>(array: T[], mapFn: Mapper<T, R>): R[];
/**
 * Returns a function that
 * transforms each item in an `array` according to a function `mapFn`.
 * @param mapFn A function that projects each member to its new form.
 */
export function map<T, R>(mapFn: Mapper<T, R>): typeof deferred;
export function map() {
  return inferred.apply(undefined, arguments);
}

/**
 * Transforms each item in an `array` according to a previously specified function `mapFn`.
 * @param array Array to map.
 */
declare function deferred<T, R>(array: T[]): R[];

const inferred = infer(
  <T, R>(array: T[], mapFn: Mapper<T, R>): R[] => array.map(mapFn)
);
