import { infer } from '../function/infer';
import { Unary } from '../operators';

export function unique<T>(
  array: T[],
  keyFn?: (item: T, index: number) => any
): T[];
export function unique<T>(
  keyFn?: (item: T, index: number) => any
): Unary<T[], T[]>;
/**
 * Filters duplicate items using the keys extracted from each item.
 *
 * @note When keys are equal, the last item is kept.
 *
 * @param keyFn Optional function that extracts a key from each `T`.
 * Default: `identity()`
 *
 * @example
 * ```typescript
 * const array = [{ id: 4 }, { id: 1 }, { id: 4, last: true }];
 * unique(array, x => x.id);
 * // [{ id: 1 }, { id: 4, last: true }]
 * ```
 */
export function unique(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _unique(...args);
}

const fn = <T>(array: T[], keyFn?: (item: T, index: number) => any): T[] =>
  keyFn
    ? Array.from(
        new Map(array.map((t, i) => [keyFn(t, i), t] as [any, T])).values()
      )
    : Array.from(new Set(array));

// tslint:disable-next-line: variable-name
const _unique = infer(fn, args => args[0] instanceof Array);
