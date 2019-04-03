import { infer } from '../function/infer';
import { unique } from '../list/unique';
import { Unary } from '../operators';

export function union<T>(
  arrayA: T[],
  arrayB: T[],
  keyFn?: (item: T, index: number) => any
): T[];
export function union<T>(
  arrayB: T[],
  keyFn?: (item: T, index: number) => any
): Unary<T[], T[]>;
/**
 * Uniquely concatenates array A with array B.
 *
 * @note From set theory, given sets A and B, denoted A ∪ B,
 * returns the set of union objects that are a member of A, or B, or both.
 *
 * @param keyFn An optional function to extract a key for comparison between array items.
 * Default: `identity()`
 *
 * @example
 * union([1, 2, 3], [2, 3, 4]);
 * // [1, 2, 3, 4]
 */
export function union(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _union(...args);
}

// tslint:disable-next-line: variable-name
const _union = infer(
  <T>(arrayA: T[], arrayB: T[], keyFn?: (item: T, index: number) => any): T[] =>
    unique([...arrayA, ...arrayB], keyFn),
  args => [args[0], args[1]].every(arg => arg instanceof Array)
);
