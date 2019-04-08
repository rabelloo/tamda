import { infer } from '../function/infer';

/**
 * Filters items that are both in `arrayA` and `arrayB`.
 * @note From set theory, given sets A and B, denoted A ∩ B,
 * returns the set of intersection members of both A and B.
 * @param arrayA Array to filter.
 * @param arrayB Array to check item existance.
 * @param keyFn Optional function to extract a key for comparison between array items. Default: `identity()`.
 * @example ```typescript
 * intersection([1, 2, 3], [2, 3, 4]);
 * // [2, 3] ```
 */
export function intersection<T>(
  arrayA: T[],
  arrayB: T[],
  keyFn?: KeyFn<T>
): T[];
/**
 * Returns a function that
 * filters items that are both in `arrayA` and `arrayB`.
 * @note From set theory, given sets A and B, denoted A ∩ B,
 * returns the set of intersection members of both A and B.
 * @param arrayB Array to check item existance.
 * @param keyFn Optional function to extract a key for comparison between array items. Default: `identity()`.
 * @example ```typescript
 * const inBoth = intersection([2, 3, 4]);
 * inBoth([1, 2, 3]);
 * // [2, 3] ```
 */
export function intersection<T>(arrayB: T[], keyFn?: KeyFn<T>): typeof deferred;
export function intersection() {
  return inferred.apply(undefined, arguments);
}

/**
 * Filters items that are both in `arrayA` and previously specified `arrayB`.
 * @note From set theory, given sets A and B, denoted A ∩ B,
 * returns the set of intersection members of both A and B.
 * @param arrayA Array to filter.
 */
declare function deferred<T>(arrayA: T[]): T[];

const inferred = infer(
  <T>(arrayA: T[], arrayB: T[], keyFn?: KeyFn<T>): T[] => {
    const setB = new Set(keyFn ? arrayB.map(keyFn) : arrayB);

    const filterFn = keyFn
      ? (item: T, index: number) => setB.has(keyFn(item, index))
      : (item: T) => setB.has(item);

    return arrayA.filter(filterFn);
  },
  args => [args[0], args[1]].every(arg => arg instanceof Array)
);

type KeyFn<T> = (item: T, index: number) => any;
