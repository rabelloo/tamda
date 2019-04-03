/**
 * Creates a function that can infer the first argument according to the number of supplied arguments.
 *
 * If all arguments are supplied, immediately invokes the function. Otherwise, return a function
 * that expects the first argument of the original function.
 *
 * @param ready Optionally determine when a function is ready for execution.
 * Default `args.length >= fn.length`.
 *
 * @example
 * ```typescript
 * const map = (array, fn) => array.map(fn);
 * const inferredMap = infer(map);
 * inferredMap([1, 2, 3], n => n + 1);
 * // [2, 3, 4]
 * inferredMap (n => n + 1) ([1, 2, 3]);
 * // [2, 3, 4]
 * ```
 *
 * Useful for composing/piping, e.g.
 *
 * ```typescript
 * const transform = pipe(
 *  map(n => n + 1),
 *  map(n => n * 2),
 *  filter(n => n > 5)
 * );
 * transform([1, 2, 3]);
 * // [6, 8]
 * ```
 */
export function infer(
  // tslint:disable-next-line: ban-types
  fn: Function,
  ready = (args: any[]) => args.length >= fn.length
) {
  return (...args: any[]) =>
    ready(args) ? fn(...args) : (first: any) => fn(first, ...args);
}
