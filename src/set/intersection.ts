import { infer } from '../function/infer';
import { Unary } from '../operators';

export function intersection<T>(
  arrayA: T[],
  arrayB: T[],
  keyFn?: (item: T, index: number) => any
): T[];
export function intersection<T>(
  arrayB: T[],
  keyFn?: (item: T, index: number) => any
): Unary<T[], T[]>;

/**
 * Filters items that are in both given arrays.
 *
 * @note From set theory, given sets A and B, denoted A ∩ B,
 * returns the set of intersection members of both A and B.
 *
 * @param keyFn An optional function to extract a key for comparison between array items.
 * Default: `identity()`
 *
 * @example
 * ```typescript
 * intersection([1, 2, 3], [2, 3, 4]);
 * // [2, 3]
 * ```
 */
export function intersection(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _intersection(...args);
}

// tslint:disable-next-line: variable-name
const _intersection = infer(
  <T>(
    arrayA: T[],
    arrayB: T[],
    keyFn?: (item: T, index: number) => any
  ): T[] => {
    const setB = new Set(keyFn ? arrayB.map(keyFn) : arrayB);

    const filterFn = keyFn
      ? (item: T, index: number) => setB.has(keyFn(item, index))
      : (item: T) => setB.has(item);

    return arrayA.filter(filterFn);
  },
  args => [args[0], args[1]].every(arg => arg instanceof Array)
);
