import { infer } from '../function/infer';

/**
 * Filters duplicate items in an `array` using the keys extracted from each item by a function `keyFn`.
 * @note When keys are equal, the last item is kept.
 * @param array Array to filter.
 * @param keyFn Optional function that extracts a key from each item. Default: `identity()`.
 * @example
 * const array = [{ id: 4 }, { id: 1 }, { id: 4, last: true }];
 * unique(array, x => x.id);
 * // [{ id: 1 }, { id: 4, last: true }]
 */
export function unique<T>(array: T[], keyFn?: KeyFn<T>): T[];
/**
 * Returns a function that
 * filters duplicate items in an `array` using the keys extracted from each item by a function `keyFn`.
 * @note When keys are equal, the last item is kept.
 * @param keyFn Optional function that extracts a key from each item. Default: `identity()`.
 * @example
 * const array = [{ id: 4 }, { id: 1 }, { id: 4, last: true }];
 * const uniqId = unique(x => x.id);
 * uniqId(array);
 * // [{ id: 1 }, { id: 4, last: true }]
 */
export function unique<T>(keyFn?: KeyFn<T>): typeof deferred;
export function unique() {
  return inferred.apply(undefined, arguments);
}

/**
 * Filters duplicate items in an `array` using the keys extracted
 * from each item by a previously specified function `keyFn`.
 * @note When keys are equal, the last item is kept.
 * @param array Array to filter.
 */
declare function deferred<T>(array: T[]): T[];

type KeyFn<T> = (item: T, index: number) => any;

const inferred = infer(
  <T>(array: T[], keyFn?: KeyFn<T>): T[] =>
    keyFn
      ? Array.from(
          new Map(array.map((t, i) => [keyFn(t, i), t] as [any, T])).values()
        )
      : Array.from(new Set(array)),
  (args) => args[0] instanceof Array
);
