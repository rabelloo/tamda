/**
 * Creates a partially applied version of `fn`.
 * @param fn Function to partially apply.
 * @param head Arguments to provide first to `fn`.
 * @example
 * const concat = (a, b) => a + b;
 * const sayHello = partial(concat, 'Hello ');
 * sayHello('World!');
 * // 'Hello World!'
 */
export function partial<Head extends Arr, Tail extends Arr, R>(
  fn: (...args: [...Head, ...Tail]) => R,
  ...head: Head
): Partial<Tail, R> {
  return (...tail: Tail) => fn(...head, ...tail);
}

type Arr = readonly unknown[];

type Partial<Tail extends Arr, R> =
  /**
   * Calls `fn(...head, ...tail)`.
   * @param tail Arguments to provide last to `fn`.
   */
  (...tail: Tail) => R;
