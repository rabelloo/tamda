import { infer } from './infer';

export const tap: Tap = infer(_tap);

function _tap<T>(value: T, fn: Tapper<T>) {
  fn(value);
  return value;
}

type Tapper<T> = (value: T) => unknown;

interface Tap {
  /**
   * Calls `fn` with `value`, then returns `value`.
   * @param value Value to provide as argument when calling `fn`.
   * @param fn Function to call with `value`.
   * @example
   * const foo = tap('hi', console.log);
   * // 'hi'
   * console.log(foo);
   * // 'hi'
   */
  <T>(value: T, fn: Tapper<T>): T;
  /**
   * Returns a function that
   * calls `fn` with its first argument (`value`), then returns `value`.
   * @param fn Function to call with `value`.
   * @example
   * const log = tap(console.log);
   * const foo = log('hi');
   * // 'hi'
   * console.log(foo);
   * // 'hi'
   */
  <T>(fn: Tapper<T>): (value: T) => T;
}
