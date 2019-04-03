import { infer } from '../function/infer';
import { Unary } from '../operators';

export function tap<T>(array: T[], fn: (source: T[]) => void): T[];
export function tap<T>(fn: (source: T[]) => void): Unary<T[], T[]>;
/**
 * Invokes the specified function and returns the array itself.
 *
 * @note Immutability is expected.
 *
 * @param execute Function to invoke without changing output.
 *
 * @example
 * ```typescript
 * tap([1, 2, 3], console.log)
 * // [1, 2, 3]
 * ```
 *
 * Useful for compositions/pipes, e.g.
 * ```typescript
 * const transform = pipe(
 *   map(x => x * 10),
 *   tap(console.log),
 *   map(x => x / 10)
 * );
 * transform([1, 2, 3]);
 * // 10
 * // 20
 * // 30
 * // [1, 2, 3]
 * ```
 */
export function tap(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _tap(...args);
}

// tslint:disable-next-line: variable-name
const _tap = infer(
  <T>(array: T[], invokeFn: (source: T[]) => void): T[] => {
    invokeFn(array);
    return array;
  }
);
