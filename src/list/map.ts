import { infer } from '../function/infer';
import { Mapper } from '../operators';

export const map: Map = infer(_map);

function _map<T, R>(array: T[], mapFn: Mapper<T, R>) {
  return array.map(mapFn);
}

interface Map {
  /**
   * Transforms each item in an `array` according to a function `mapFn`.
   * @param array Array to map over.
   * @param mapFn A function that projects each member to its new form.
   */
  <T, R>(array: T[], mapFn: Mapper<T, R>): R[];
  /**
   * Returns a function that
   * transforms each item in an `array` according to a function `mapFn`.
   * @param mapFn A function that projects each member to its new form.
   */
  <T, R>(mapFn: Mapper<T, R>): (array: T[]) => R[];
}
