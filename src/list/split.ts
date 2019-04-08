import { infer } from '../function/infer';
import { Predicate } from '../operators';

/**
 * Splits an `array` in two, according to `predicate`.
 * @param array Array to split.
 * @param predicate Function that determines in which half to put each item.
 * @returns Tuple like `[[match the predicate], [do not match the predicate]]`.
 */
export function split<T>(array: T[], predicate: Predicate<T>): [T[], T[]];
/**
 * Returns a function that
 * splits an `array` in two, according to `predicate`.
 * @param predicate Function that determines in which half to put each item.
 */
export function split<T>(predicate: Predicate<T>): typeof deferred;
export function split() {
  return inferred.apply(undefined, arguments);
}

/**
 * Splits an `array` in two, according to `predicate`.
 * @param array Array to split.
 * @returns Tuple like `[[match the predicate], [do not match the predicate]]`.
 */
declare function deferred<T>(array: T[]): [T[], T[]];

const inferred = infer(<T>(array: T[], predicate: Predicate<T>) =>
  array.reduce(
    (tuple, item, index) => {
      const match = predicate(item, index, array);
      const which = match ? tuple[0] : tuple[1];

      // Faster than spreading, safe here
      which.push(item);
      return tuple;
    },
    [[], []] as [T[], T[]]
  )
);
