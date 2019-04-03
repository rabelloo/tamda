import { identity } from '../function/identity';
import { infer } from '../function/infer';
import { Unary } from '../operators';

export function partition<T, K>(
  array: T[],
  keyFn?: (item: T, index: number, array: T[]) => K
): [K, T[]];
export function partition<T, K>(
  keyFn?: (item: T, index: number, array: T[]) => K
): Unary<T[], [K, T[]]>;
/**
 * Creates partitions of the array by the key extracted from each item by the specified function.
 * @param keyFn Function that extracts a key from each `T`. Default: `identity`.
 */
export function partition(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _partition(...args);
}

// tslint:disable-next-line: variable-name
const _partition = infer(
  <T, K>(
    array: T[],
    keyFn: (item: T, index?: number, array?: T[]) => K = identity as any
  ): [K, T[]] =>
    Array.from(
      array.reduce((map, item, index) => {
        const key = keyFn(item, index, array);

        // Initializes the array if undefined for the key.
        if (!map.get(key)) {
          map.set(key, []);
        }

        // Faster than spreading the array,
        // i.e. map.set(key, [ ...map.get(key), item ]),
        // safe here.
        map.get(key).push(item);

        return map;
      }, new Map())
    ) as any,
  args => args[0] instanceof Array
);
