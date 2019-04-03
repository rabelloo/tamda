export function partial<A, B, C>(fn: (a: A, b: B) => C, a: A): (b: B) => C;

export function partial<A, B, C, D>(fn: (a: A, b: B, c: C) => D, a: A): (b: B, c: C) => D;
export function partial<A, B, C, D>(fn: (a: A, b: B, c: C) => D, a: A, b: B): (c: C) => D;

export function partial<A, B, C, D, E>(fn: (a: A, b: B, c: C, d: D) => E, a: A): (b: B, c: C, d: D) => E;
export function partial<A, B, C, D, E>(fn: (a: A, b: B, c: C, d: D) => E, a: A, b: B): (c: C, d: D) => E;
export function partial<A, B, C, D, E>(fn: (a: A, b: B, c: C, d: D) => E, a: A, b: B, c: C): (d: D) => E;

export function partial<A, B, C, D, E, F>(fn: (a: A, b: B, c: C, d: D, e: E) => F, a: A): (b: B, c: C, d: D, e: E) => F;
export function partial<A, B, C, D, E, F>(fn: (a: A, b: B, c: C, d: D, e: E) => F, a: A, b: B): (c: C, d: D, e: E) => F;
export function partial<A, B, C, D, E, F>(fn: (a: A, b: B, c: C, d: D, e: E) => F, a: A, b: B, c: C): (d: D, e: E) => F;
export function partial<A, B, C, D, E, F>(fn: (a: A, b: B, c: C, d: D, e: E) => F, a: A, b: B, c: C, d: D): (e: E) => F;

/**
 * Creates a partially applied version of the supplied function.
 *
 * @example
 * ```typescript
 * const sum = (a, b) => a + b;
 * const sum10 = partial(sum, 10);
 * sum10(5);
 * // 15
 * ```
 */
// tslint:disable-next-line: ban-types
export function partial(fn: Function, ...args: any[]) {
  return (...rest: any[]) => fn(...args, ...rest);
}
