export function curry<A>(fn: () => A): () => A;
export function curry<A, B>(fn: (a: A) => B): (a: A) => B;
export function curry<A, B, C>(fn: (a: A, b: B) => C): (a: A) => (b: B) => C;

export function curry<A, B, C, D>(
  fn: (a: A, b: B, c: C) => D
): (a: A) => (b: B) => (c: C) => D;

export function curry<A, B, C, D, E>(
  fn: (a: A, b: B, c: C, d: D) => E
): (a: A) => (b: B) => (c: C) => (d: D) => E;

export function curry<A, B, C, D, E, F>(
  fn: (a: A, b: B, c: C, d: D, e: E) => F
): (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => F;

export function curry<A, B, C, D, E, F, G>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F) => G
): (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => (f: F) => G;

/**
 * Creates a curried version of the supplied function.
 *
 * Strict Functional Programming definition and not Ramda's.
 *
 * @example
 * ```typescript
 * const sum = (a, b) => a + b;
 * const sumCurried = curry(sum);
 * sumCurried (1) (2);
 * // 3
 * ```
 */
// tslint:disable-next-line: ban-types
export function curry(fn: Function) {
  // Optimize more common arities
  switch (fn.length) {
    case 0:
    case 1:
      return fn;
    case 2:
      return (a: any) => (b: any) => fn(a, b);
    case 3:
      return (a: any) => (b: any) => (c: any) => fn(a, b, c);
    case 4:
      return (a: any) => (b: any) => (c: any) => (d: any) => fn(a, b, c, d);
    case 5:
      return (a: any) => (b: any) => (c: any) => (d: any) => (e: any) =>
        fn(a, b, c, d, e);
  }

  // Anything higher will keep an extra array in memory
  // to keep track of arguments
  let allArgs: any[] = [];
  const builder = (...args: any[]) => {
    allArgs.push(...args);
    if (allArgs.length < fn.length) {
      return builder;
    }

    const result = fn(...allArgs);
    allArgs = [];
    return result;
  };

  return builder;
}
