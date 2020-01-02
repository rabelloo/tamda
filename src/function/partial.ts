export function partial<A, B, C>(fn: (a: A, b: B) => C, a: A): (b: B) => C;

// prettier-ignore
export function partial<A, B, C, D>(fn: (a: A, b: B, c: C) => D, a: A): (b: B, c: C) => D;
// prettier-ignore
export function partial<A, B, C, D>(fn: (a: A, b: B, c: C) => D, a: A, b: B): (c: C) => D;

// prettier-ignore
export function partial<A, B, C, D, E>(fn: (a: A, b: B, c: C, d: D) => E, a: A): (b: B, c: C, d: D) => E;
// prettier-ignore
export function partial<A, B, C, D, E>(fn: (a: A, b: B, c: C, d: D) => E, a: A, b: B): (c: C, d: D) => E;
// prettier-ignore
export function partial<A, B, C, D, E>(fn: (a: A, b: B, c: C, d: D) => E, a: A, b: B, c: C): (d: D) => E;

// prettier-ignore
export function partial<A, B, C, D, E, F>(fn: (a: A, b: B, c: C, d: D, e: E) => F, a: A): (b: B, c: C, d: D, e: E) => F;
// prettier-ignore
export function partial<A, B, C, D, E, F>(fn: (a: A, b: B, c: C, d: D, e: E) => F, a: A, b: B): (c: C, d: D, e: E) => F;
// prettier-ignore
export function partial<A, B, C, D, E, F>(fn: (a: A, b: B, c: C, d: D, e: E) => F, a: A, b: B, c: C): (d: D, e: E) => F;
// prettier-ignore
export function partial<A, B, C, D, E, F>(fn: (a: A, b: B, c: C, d: D, e: E) => F, a: A, b: B, c: C, d: D): (e: E) => F;

// prettier-ignore
export function partial<A, B, C, D, E, F, G>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F) => G, a: A): (b: B, c: C, d: D, e: E, f: F) => G;
// prettier-ignore
export function partial<A, B, C, D, E, F, G>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F) => G, a: A, b: B): (c: C, d: D, e: E, f: F) => G;
// prettier-ignore
export function partial<A, B, C, D, E, F, G>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F) => G, a: A, b: B, c: C): (d: D, e: E, f: F) => G;
// prettier-ignore
export function partial<A, B, C, D, E, F, G>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F) => G, a: A, b: B, c: C, d: D): (e: E, f: F) => G;
// prettier-ignore
export function partial<A, B, C, D, E, F, G>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F) => G, a: A, b: B, c: C, d: D, e: E): (f: F) => G;

// prettier-ignore
export function partial<A, B, C, D, E, F, G, H>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H, a: A): (b: B, c: C, d: D, e: E, f: F, g: G) => H;
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H, a: A, b: B): (c: C, d: D, e: E, f: F, g: G) => H;
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H, a: A, b: B, c: C): (d: D, e: E, f: F, g: G) => H;
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H, a: A, b: B, c: C, d: D): (e: E, f: F, g: G) => H;
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H, a: A, b: B, c: C, d: D, e: E): (f: F, g: G) => H;
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H, a: A, b: B, c: C, d: D, e: E, f: F): (g: G) => H;

// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => I, a: A): (b: B, c: C, d: D, e: E, f: F, g: G, h: H) => I;
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => I, a: A, b: B): (c: C, d: D, e: E, f: F, g: G, h: H) => I;
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => I, a: A, b: B, c: C): (d: D, e: E, f: F, g: G, h: H) => I;
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => I, a: A, b: B, c: C, d: D): (e: E, f: F, g: G, h: H) => I;
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => I, a: A, b: B, c: C, d: D, e: E): (f: F, g: G, h: H) => I;
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => I, a: A, b: B, c: C, d: D, e: E, f: F): (g: G, h: H) => I;
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => I, a: A, b: B, c: C, d: D, e: E, f: F, g: G): (h: H) => I;

// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => J, a: A
): (b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => J;
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => J, a: A, b: B
): (c: C, d: D, e: E, f: F, g: G, h: H, i: I) => J;
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => J, a: A, b: B, c: C
): (d: D, e: E, f: F, g: G, h: H, i: I) => J;
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => J, a: A, b: B, c: C, d: D
): (e: E, f: F, g: G, h: H, i: I) => J;
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => J, a: A, b: B, c: C, d: D, e: E
): (f: F, g: G, h: H, i: I) => J;
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => J, a: A, b: B, c: C, d: D, e: E, f: F
): (g: G, h: H, i: I) => J;
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => J, a: A, b: B, c: C, d: D, e: E, f: F, g: G
): (h: H, i: I) => J;
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => J, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H
): (i: I) => J;

// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J, K>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => K, a: A
): (b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => K;
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J, K>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => K, a: A, b: B
): (c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => K;
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J, K>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => K, a: A, b: B, c: C
): (d: D, e: E, f: F, g: G, h: H, i: I, j: J) => K;
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J, K>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => K, a: A, b: B, c: C, d: D
): (e: E, f: F, g: G, h: H, i: I, j: J) => K;
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J, K>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => K, a: A, b: B, c: C, d: D, e: E
): (f: F, g: G, h: H, i: I, j: J) => K;
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J, K>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => K, a: A, b: B, c: C, d: D, e: E, f: F
): (g: G, h: H, i: I, j: J) => K;
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J, K>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => K, a: A, b: B, c: C, d: D, e: E, f: F, g: G
): (h: H, i: I, j: J) => K;
// prettier-ignore
export function partial<A, B, C, D, E, F, G, H, I, J, K>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => K, a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H
): (i: I, j: J) => K;
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
// tslint:disable-next-line: ban-types
export function partial(fn: Function, ...args: any) {
  // tslint:disable-next-line: only-arrow-functions
  return function() {
    return fn(...args, ...arguments);
  };
}
