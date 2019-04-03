import { Unary } from '../operators';
import { WithValue } from '../with-value';
import { compose } from './compose';
import { pipe } from './pipe';

/**
 * Creates an object with functions `compose` and `pipe` that will
 * be immediately invoked with the provided value after construction.
 *
 * @example
 * ```typescript
 * use([1, 2, 3]).pipe(sum());
 * // 6
 * pipe (sum()) ([1, 2, 3]);
 * // 6
 * ```
 */
export function use<T>(value: T): WithValue<T> {
  return {
    compose: composed(value),
    pipe: piped(value),
  };
}

function composed<T>(value: T) {
  return (...operators: Unary<any, any>[]) =>
    (compose as any)(...operators)(value);
}

function piped<T>(value: T) {
  return (...operators: Unary<any, any>[]) =>
    (pipe as any)(...operators)(value);
}
