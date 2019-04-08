import { infer } from '../function/infer';

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
export function tap<T>(fn: Tapper<T>): typeof deferred;
export function tap() {
  return inferred.apply(undefined, arguments);
}

/**
 * Invokes a previously specified function `fn` with `source` as argument, then returns the `source` itself.
 * @param fn Function to invoke with `source`.
 */
declare function deferred<T>(source: T): T;

type Tapper<T> = (source: T) => void;

const inferred = infer(
  <T>(source: T, invokeFn: Tapper<T>): T => {
    invokeFn(source);
    return source;
  }
);
