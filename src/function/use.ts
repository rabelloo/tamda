import { compose } from './compose';
import { pipe } from './pipe';
import { WithValue } from './with-value.type';

/**
 * Creates an object with functions `compose` and `pipe` that will
 * be immediately invoked with the provided value after construction.
 *
 * @example
 * use([1, 2, 3]).pipe(sum());
 * // 6
 * pipe (sum()) ([1, 2, 3]);
 * // 6
 */
export function use<T>(value: T): WithValue<T> {
  return {
    compose: applyWith(compose, value),
    pipe: applyWith(pipe, value),
  };
}

function applyWith(fn: Partial, value: unknown) {
  return (...args: Arr) => fn(...args)(value);
}

type Arr = readonly unknown[];
type Fn = (...args: Arr) => unknown;
type Partial = (...args: Arr) => Fn;
