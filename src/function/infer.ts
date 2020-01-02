import { Unary } from '../operators';

/**
 * Creates a function that can infer the first argument according to the number of supplied arguments.
 *
 * If all arguments are supplied, immediately invokes the function.
 * Otherwise, return a function that expects the first argument of the original function.
 *
 * @param ready Optionally determine when a function is ready for execution.
 * Default `args.length >= fn.length`.
 *
 * @example
 * const map = (array, fn) => array.map(fn);
 * const inferredMap = infer(map);
 * inferredMap([1, 2, 3], n => n + 1);
 * // [2, 3, 4]
 * inferredMap (n => n + 1) ([1, 2, 3]);
 * // [2, 3, 4]
 *
 * Useful for composing/piping, e.g.
 *
 * const transform = pipe(
 *  map(n => n + 1),
 *  map(n => n * 2),
 *  filter(n => n > 5)
 * );
 * transform([1, 2, 3]);
 * // [6, 8]
 */
export function infer<T, R>(
  fn: Infer<T, R>,
  ready = isReady(fn)
): Inferred<T, R> {
  // tslint:disable-next-line: only-arrow-functions
  return function() {
    // faster than spread, i.e. (...args: unknown[]) => {}
    const args = arguments;

    return ready(args as any)
      ? fn.apply(undefined, args)
      : (first: T) => fn(first, ...args);
  };
}

const isReady = <T, R>(fn: Infer<T, R>) => (args: unknown[]) =>
  args.length >= fn.length;

type Infer<T, R> = (first: T, ...args: any[]) => R | Unary<T, R>;
type Inferred<T, R> = (...args: unknown[]) => R & Unary<T, R>;
