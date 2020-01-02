import { infer } from '../function/infer';
import { unique } from '../list/unique';

/**
 * Uniquely concatenates `arrayA` with `arrayB`.
 * @note From set theory, given sets A and B, denoted A ∪ B,
 * returns the set of union objects that are a member of A, or B, or both.
 * @param arrayA Array to concatenate `arrayB` to.
 * @param arrayB Array to append to `arrayA`.
 * @param keyFn Optional function to extract a key for comparison between array items. Default: `identity()`.
 * @example
 * union([1, 2, 3], [2, 3, 4]);
 * // [1, 2, 3, 4]
 */
export function union<T>(arrayA: T[], arrayB: T[], keyFn?: KeyFn<T>): T[];
/**
 * Returns a function that
 * uniquely concatenates `arrayA` with `arrayB`.
 * @note From set theory, given sets A and B, denoted A ∪ B,
 * returns the set of union objects that are a member of A, or B, or both.
 * @param arrayB Array to append to `arrayA`.
 * @param keyFn Optional function to extract a key for comparison between array items. Default: `identity()`.
 * @example
 * const join = union([2, 3, 4])
 * join([1, 2, 3]);
 * // [1, 2, 3, 4]
 */
export function union<T>(arrayB: T[], keyFn?: KeyFn<T>): typeof deferred;
export function union() {
  return inferred.apply(undefined, arguments);
}

/**
 * Uniquely concatenates `arrayA` with `arrayB`.
 * @note From set theory, given sets A and B, denoted A ∪ B,
 * returns the set of union objects that are a member of A, or B, or both.
 * @param arrayA Array to concatenate `arrayB` to.
 */
declare function deferred<T>(arrayA: T[]): T[];

const inferred = infer(
  <T>(arrayA: T[], arrayB: T[], keyFn?: KeyFn<T>): T[] =>
    unique([...arrayA, ...arrayB], keyFn),
  args => [args[0], args[1]].every(arg => arg instanceof Array)
);

type KeyFn<T> = (item: T, index: number) => any;
