import { WithValue } from '../with-value';
import { compose } from './compose';
import { pipe } from './pipe';

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

// tslint:disable-next-line: ban-types
function applyWith(fn: Function, value: unknown) {
  // tslint:disable-next-line: only-arrow-functions
  return function() {
    return fn.apply(undefined, arguments)(value);
  };
}
