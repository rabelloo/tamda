/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @param head Arguments to provide first to function.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
export function partial<Head extends Arr, Tail extends Arr, R>(
  fn: (...args: [...Head, ...Tail]) => R,
  ...head: Head
) {
  return (...tail: Tail) => fn(...head, ...tail);
}

type Arr = readonly unknown[];
