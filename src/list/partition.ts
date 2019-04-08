import { identity } from '../function/identity';
import { infer } from '../function/infer';
import { Mapper } from '../operators';

/**
 * Creates partitions of an `array` by the key extracted from each item by a function `keyFn`.
 * @param array Array to partition.
 * @param keyFn Function that extracts a key from each item. Default: `identity`.
 */
export function partition<T, K>(array: T[], keyFn?: Mapper<T, K>): [K, T[]][];
/**
 * Returns a function that
 * creates partitions of an `array` by the key extracted from each item by a function `keyFn`.
 * @param keyFn Function that extracts a key from each item. Default: `identity`.
 */
export function partition<T, K>(keyFn?: Mapper<T, K>): typeof deferred;
export function partition() {
  return inferred.apply(undefined, arguments);
}

/**
 * Creates partitions of an `array` by the key extracted from each item by a previously defined function `keyFn`.
 * @param array Array to partition.
 */
declare function deferred<T, K>(array: T[]): [K, T[]][];

const inferred = infer(
  <T, K>(array: T[], keyFn: Mapper<T, K> = identity as any): [K, T[]][] =>
    Array.from(
      array.reduce((map, item, index) => {
        const key = keyFn(item, index, array);

        // Initializes the array if undefined for the key.
        if (!map.get(key)) {
          map.set(key, []);
        }

        // Faster than spreading the array,safe here.
        // i.e. map.set(key, [ ...map.get(key), item ]),
        map.get(key)!.push(item);

        return map;
      }, new Map<K, T[]>())
    ),
  args => args[0] instanceof Array
);
