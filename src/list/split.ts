import { infer } from '../function/infer';
import { Unary } from '../operators';

export function split<T>(
  array: T[],
  predicate: (item: T, index: number, array: T[]) => boolean
): [T[], T[]];
export function split<T>(
  predicate: (item: T, index: number, array: T[]) => boolean
): Unary<T[], [T[], T[]]>;
/**
 * Splits the array in two, determined by a specified predicate.
 *
 * @param predicate Function that determines which half to put each `T`.
 * @returns Tuple like `[[match the predicate], [do not match the predicate]]`.
 */
export function split(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _split(...args);
}

// tslint:disable-next-line: variable-name
const _split = infer(
  <T>(array: T[], predicate: (item: T, index: number, array: T[]) => boolean) =>
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
