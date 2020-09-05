import { infer } from '../function/infer';

export const intersection: Intersection = infer(
  _intersection,
  ([, arg2]) => arg2 instanceof Array
);

function _intersection<T>(arrayA: T[], arrayB: T[], keyFn?: KeyFn<T>): T[] {
  const setB = new Set(keyFn ? arrayB.map(keyFn) : arrayB);

  return arrayA.filter(
    keyFn
      ? (item, index) => setB.has(keyFn(item, index))
      : (item) => setB.has(item)
  );
}

type KeyFn<T> = (item: T, index: number) => unknown;

interface Intersection {
  /**
   * Filters items that are both in `arrayA` and `arrayB`.
   * @note From set theory, given sets A and B, denoted A ∩ B, returns the set of intersection members of both A and B.
   * @param arrayA Array to filter.
   * @param arrayB Array to check item existance.
   * @param keyFn Optional function to extract a key for comparison between array items. Default: `identity()`.
   * @example
   * intersection([1, 2, 3], [2, 3, 4]);
   * // [2, 3]
   */
  <T>(arrayA: T[], arrayB: T[], keyFn?: KeyFn<T>): T[];
  /**
   * Returns a function that
   * filters items that are both in `arrayA` and `arrayB`.
   * @note From set theory, given sets A and B, denoted A ∩ B, returns the set of intersection members of both A and B.
   * @param arrayB Array to check item existance.
   * @param keyFn Optional function to extract a key for comparison between array items. Default: `identity()`.
   * @example
   * const inBoth = intersection([2, 3, 4]);
   * inBoth([1, 2, 3]);
   * // [2, 3]
   */
  <T>(arrayB: T[], keyFn?: KeyFn<T>): PartialIntersection<T>;
}

type PartialIntersection<T> =
  /**
   * Filters items that are both in `arrayA` and previously specified `arrayB`.
   * @note From set theory, given sets A and B, denoted A ∩ B, returns the set of intersection members of both A and B.
   * @param arrayA Array to filter.
   */
  (arrayA: T[]) => T[];
