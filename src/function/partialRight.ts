/**
 * Creates a partially applied from right version of `fn`.
 * @param fn Function to partially apply from right.
 * @param tail Arguments to provide last to `fn`.
 * @example
 * const concat = (a, b) => a + b;
 * const sayToWorld = partialRight(concat, ' World!');
 * sayToWorld('Hello');
 * // 'Hello World!'
 */
export function partialRight<Head extends Arr, Tail extends Arr, R>(
  fn: (...args: [...Head, ...Tail]) => R,
  ...tail: Tail
): PartialRight<Head, R> {
  return (...head: Head) => fn(...head, ...tail);
}

type Arr = readonly unknown[];

type PartialRight<Head extends Arr, R> =
  /**
   * Calls `fn(...head, ...tail)`.
   * @param head Arguments to provide first to `fn`.
   */
  (...head: Head) => R;
