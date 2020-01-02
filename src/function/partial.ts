export function partial<A, B, C>(fn: (a: A, b: B) => C, a: A): (b: B) => C;

/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D>(fn: (a: A, b: B, c: C) => D, a: A): (b: B, c: C) => D;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D>(fn: (a: A, b: B, c: C) => D, a: A, b: B): (c: C) => D;

/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E>(fn: (a: A, b: B, c: C, d: D) => E, a: A): (b: B, c: C, d: D) => E;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E>(fn: (a: A, b: B, c: C, d: D) => E, a: A, b: B): (c: C, d: D) => E;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E>(fn: (a: A, b: B, c: C, d: D) => E, a: A, b: B, c: C): (d: D) => E;

/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F>(fn: (a: A, b: B, c: C, d: D, e: E) => F, a: A): (b: B, c: C, d: D, e: E) => F;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F>(fn: (a: A, b: B, c: C, d: D, e: E) => F, a: A, b: B): (c: C, d: D, e: E) => F;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F>(fn: (a: A, b: B, c: C, d: D, e: E) => F, a: A, b: B, c: C): (d: D, e: E) => F;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F>(fn: (a: A, b: B, c: C, d: D, e: E) => F, a: A, b: B, c: C, d: D): (e: E) => F;

/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F) => G, a: A): (b: B, c: C, d: D, e: E, f: F) => G;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F) => G, a: A, b: B): (c: C, d: D, e: E, f: F) => G;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F) => G, a: A, b: B, c: C): (d: D, e: E, f: F) => G;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F) => G, a: A, b: B, c: C, d: D): (e: E, f: F) => G;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F) => G, a: A, b: B, c: C, d: D, e: E): (f: F) => G;

/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H, a: A): (b: B, c: C, d: D, e: E, f: F, g: G) => H;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H, a: A, b: B): (c: C, d: D, e: E, f: F, g: G) => H;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H, a: A, b: B, c: C): (d: D, e: E, f: F, g: G) => H;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H, a: A, b: B, c: C, d: D): (e: E, f: F, g: G) => H;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H, a: A, b: B, c: C, d: D, e: E): (f: F, g: G) => H;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H, a: A, b: B, c: C, d: D, e: E, f: F): (g: G) => H;

/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => I, a: A): (b: B, c: C, d: D, e: E, f: F, g: G, h: H) => I;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => I, a: A, b: B): (c: C, d: D, e: E, f: F, g: G, h: H) => I;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => I, a: A, b: B, c: C): (d: D, e: E, f: F, g: G, h: H) => I;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => I, a: A, b: B, c: C, d: D): (e: E, f: F, g: G, h: H) => I;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => I, a: A, b: B, c: C, d: D, e: E): (f: F, g: G, h: H) => I;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => I, a: A, b: B, c: C, d: D, e: E, f: F): (g: G, h: H) => I;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => I, a: A, b: B, c: C, d: D, e: E, f: F, g: G): (h: H) => I;

/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => J, a: A
): (b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => J;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => J, a: A, b: B
): (c: C, d: D, e: E, f: F, g: G, h: H, i: I) => J;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => J, a: A, b: B, c: C
): (d: D, e: E, f: F, g: G, h: H, i: I) => J;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => J, a: A, b: B, c: C, d: D
): (e: E, f: F, g: G, h: H, i: I) => J;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => J, a: A, b: B, c: C, d: D, e: E
): (f: F, g: G, h: H, i: I) => J;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => J, a: A, b: B, c: C, d: D, e: E, f: F
): (g: G, h: H, i: I) => J;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => J, a: A, b: B, c: C, d: D, e: E, f: F, g: G
): (h: H, i: I) => J;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => J, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H
): (i: I) => J;

/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J, K>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => K, a: A
): (b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => K;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J, K>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => K, a: A, b: B
): (c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => K;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J, K>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => K, a: A, b: B, c: C
): (d: D, e: E, f: F, g: G, h: H, i: I, j: J) => K;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J, K>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => K, a: A, b: B, c: C, d: D
): (e: E, f: F, g: G, h: H, i: I, j: J) => K;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J, K>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => K, a: A, b: B, c: C, d: D, e: E
): (f: F, g: G, h: H, i: I, j: J) => K;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J, K>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => K, a: A, b: B, c: C, d: D, e: E, f: F
): (g: G, h: H, i: I, j: J) => K;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J, K>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => K, a: A, b: B, c: C, d: D, e: E, f: F, g: G
): (h: H, i: I, j: J) => K;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J, K>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => K, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H
): (i: I, j: J) => K;
/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J, K>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => K,
  a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I
): (j: J) => K;

/**
 * Creates a partially applied version of function `fn`.
 * @param fn Function to partially apply.
 * @param args Arguments to provide to function.
 * @example
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 */
export function partial(fn: (...args: any) => any, ...args: any) {
  // tslint:disable-next-line: only-arrow-functions
  return function() {
    return fn(...args, ...arguments);
  };
}
