type Loop<T> = ((arg: unknown) => Loop<T>) & ((arg: unknown) => T);

/**
 * Creates a curried version of the supplied function.
 *
 * Strict Functional Programming definition and not Ramda's.
 *
 * @example
 * const sum = (a, b) => a + b;
 * const sumCurried = curry(sum);
 * sumCurried (1) (2);
 * // 3
 */
export function curry<A>(fn: () => A): () => A;
/**
 * Creates a curried version of the supplied function.
 *
 * Strict Functional Programming definition and not Ramda's.
 *
 * @example
 * const sum = (a, b) => a + b;
 * const sumCurried = curry(sum);
 * sumCurried (1) (2);
 * // 3
 */
export function curry<A, B>(fn: (a: A) => B): (a: A) => B;
/**
 * Creates a curried version of the supplied function.
 *
 * Strict Functional Programming definition and not Ramda's.
 *
 * @example
 * const sum = (a, b) => a + b;
 * const sumCurried = curry(sum);
 * sumCurried (1) (2);
 * // 3
 */
export function curry<A, B, C>(fn: (a: A, b: B) => C): (a: A) => (b: B) => C;
/**
 * Creates a curried version of the supplied function.
 *
 * Strict Functional Programming definition and not Ramda's.
 *
 * @example
 * const sum = (a, b) => a + b;
 * const sumCurried = curry(sum);
 * sumCurried (1) (2);
 * // 3
 */
// prettier-ignore
export function curry<A, B, C, D>(fn: (a: A, b: B, c: C) => D): (a: A) => (b: B) => (c: C) => D;
/**
 * Creates a curried version of the supplied function.
 *
 * Strict Functional Programming definition and not Ramda's.
 *
 * @example
 * const sum = (a, b) => a + b;
 * const sumCurried = curry(sum);
 * sumCurried (1) (2);
 * // 3
 */
// prettier-ignore
export function curry<A, B, C, D, E>(fn: (a: A, b: B, c: C, d: D) => E): (a: A) => (b: B) => (c: C) => (d: D) => E;
/**
 * Creates a curried version of the supplied function.
 *
 * Strict Functional Programming definition and not Ramda's.
 *
 * @example
 * const sum = (a, b) => a + b;
 * const sumCurried = curry(sum);
 * sumCurried (1) (2);
 * // 3
 */
// prettier-ignore
export function curry<A, B, C, D, E, F>(fn: (a: A, b: B, c: C, d: D, e: E) => F):
  (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => F;
/**
 * Creates a curried version of the supplied function.
 *
 * Strict Functional Programming definition and not Ramda's.
 *
 * @example
 * const sum = (a, b) => a + b;
 * const sumCurried = curry(sum);
 * sumCurried (1) (2);
 * // 3
 */
// prettier-ignore
export function curry<A, B, C, D, E, F, G>(fn: (a: A, b: B, c: C, d: D, e: E, f: F) => G):
  (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => (f: F) => G;
/**
 * Creates a curried version of the supplied function.
 *
 * Strict Functional Programming definition and not Ramda's.
 *
 * @example
 * const sum = (a, b) => a + b;
 * const sumCurried = curry(sum);
 * sumCurried (1) (2);
 * // 3
 */
// prettier-ignore
export function curry<A, B, C, D, E, F, G, H>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H):
  (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => (f: F) => (g: G) => H;
/**
 * Creates a curried version of the supplied function.
 *
 * Strict Functional Programming definition and not Ramda's.
 *
 * @example
 * const sum = (a, b) => a + b;
 * const sumCurried = curry(sum);
 * sumCurried (1) (2);
 * // 3
 */
// prettier-ignore
export function curry<A, B, C, D, E, F, G, H, I>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => I):
  (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => (f: F) => (g: G) => (h: H) => I;
/**
 * Creates a curried version of the supplied function.
 *
 * Strict Functional Programming definition and not Ramda's.
 *
 * @example
 * const sum = (a, b) => a + b;
 * const sumCurried = curry(sum);
 * sumCurried (1) (2);
 * // 3
 */
// prettier-ignore
export function curry<A, B, C, D, E, F, G, H, I, J>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => J):
  (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => (f: F) => (g: G) => (h: H) => (i: I) => J;
/**
 * Creates a curried version of the supplied function.
 *
 * Strict Functional Programming definition and not Ramda's.
 *
 * @example
 * const sum = (a, b) => a + b;
 * const sumCurried = curry(sum);
 * sumCurried (1) (2);
 * // 3
 */
// prettier-ignore
export function curry<A, B, C, D, E, F, G, H, I, J, K>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => K
): (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => (f: F) => (g: G) => (h: H) => (i: I) => (j: J) => K;
/**
 * Creates a curried version of the supplied function.
 *
 * Strict Functional Programming definition and not Ramda's.
 *
 * @example
 * const sum = (a, b) => a + b;
 * const sumCurried = curry(sum);
 * sumCurried (1) (2);
 * // 3
 */
export function curry<T = unknown>(fn: (...args: unknown[]) => T): Loop<T>;

/**
 * Creates a curried version of the supplied function.
 *
 * Strict Functional Programming definition and not Ramda's.
 *
 * @example
 * const sum = (a, b) => a + b;
 * const sumCurried = curry(sum);
 * sumCurried (1) (2);
 * // 3
 */
// tslint:disable-next-line: ban-types
export function curry(fn: Function) {
  // Optimize most common arities
  switch (fn.length) {
    case 0:
    case 1:
      return fn;
    case 2:
      return (a: unknown) => (b: unknown) => fn(a, b);
    case 3:
      return (a: unknown) => (b: unknown) => (c: unknown) => fn(a, b, c);
    case 4:
      // prettier-ignore
      return (a: unknown) => (b: unknown) => (c: unknown) => (d: unknown) => fn(a, b, c, d);
    case 5:
      // prettier-ignore
      return (a: unknown) => (b: unknown) => (c: unknown) => (d: unknown) => (e: unknown) => fn(a, b, c, d, e);
    case 6:
      // prettier-ignore
      return (a: unknown) => (b: unknown) => (c: unknown) =>
        (d: unknown) => (e: unknown) => (f: unknown) => fn(a, b, c, d, e, f);
    case 7:
      // prettier-ignore
      return (a: unknown) => (b: unknown) => (c: unknown) => (d: unknown) =>
        (e: unknown) => (f: unknown) => (g: unknown) => fn(a, b, c, d, e, f, g);
    case 8:
      // prettier-ignore
      return (a: unknown) => (b: unknown) => (c: unknown) => (d: unknown) =>
        (e: unknown) => (f: unknown) => (g: unknown) => (h: unknown) => fn(a, b, c, d, e, f, g, h);
    case 9:
      // prettier-ignore
      return (a: unknown) => (b: unknown) => (c: unknown) => (d: unknown) => (e: unknown) =>
        (f: unknown) => (g: unknown) => (h: unknown) => (i: unknown) => fn(a, b, c, d, e, f, g, h, i);
    case 10:
      // prettier-ignore
      return (a: unknown) => (b: unknown) => (c: unknown) => (d: unknown) => (e: unknown) => (f: unknown) =>
        (g: unknown) => (h: unknown) => (i: unknown) => (j: unknown) => fn(a, b, c, d, e, f, g, h, i, j);
  }

  // Bigger arities will keep an extra array in memory to keep track of arguments
  let allArgs: unknown[] = [];
  function builder() {
    allArgs.push(...arguments);
    if (allArgs.length < fn.length) {
      return builder;
    }

    const result = fn.apply(undefined, allArgs);
    allArgs = [];
    return result;
  }

  return builder;
}
