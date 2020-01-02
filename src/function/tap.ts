import { infer } from './infer';

/**
 * Invokes a function `fn` with `source` as argument, then returns the `source` itself.
 * @param source Argument to supply to `fn`.
 * @param fn Function to invoke with `source`.
 */
export function tap<T>(source: T, fn: Tapper<T>): T;
/**
 * Returns a function that
 * invokes a function `fn` with `source` as argument, then returns the `source` itself.
 * @param fn Function to invoke with `source`.
 */
export function tap<T>(
  fn: Tapper<T>
): // prettier-ignore
/**
 * Invokes a previously specified function `fn` with `source` as argument, then returns the `source` itself.
 * @param source Argument to supply to `fn`.
 */
(source: Parameters<typeof fn>[0]) => T;
export function tap() {
  return inferred.apply(undefined, arguments);
}

type Tapper<T> = (source: T) => unknown;

const inferred = infer(
  <T>(source: T, tapFn: Tapper<T>): T => {
    tapFn(source);
    return source;
  }
);
