import { infer } from '../function/infer';
import { ObjectMap } from '../object-map';
import { Mapper } from '../operators';

/**
 * Groups an `array` by the key extracted from each item by a `keyFn`.
 * @param array Array to group by key.
 * @param keyFn Function that extracts a key from each item.
 */
export function groupBy<T>(array: T[], keyFn: KeyFn<T>): ObjectMap<T[]>;
/**
 * Returns a function that
 * groups an `array` by the key extracted from each item by a `keyFn`.
 * @param keyFn Function that extracts a key from each item.
 */
export function groupBy<T>(keyFn: KeyFn<T>): typeof deferred;
export function groupBy() {
  return inferred.apply(undefined, arguments);
}

/**
 * Groups an `array` by the key extracted from each item by a previously specified `keyFn`.
 * @param array Array to group by key.
 */
declare function deferred<T>(array: T[]): ObjectMap<T[]>;

type KeyFn<T> = Mapper<T, number | string>;

const inferred = infer(
  <T>(array: T[], keyFn: KeyFn<T>): ObjectMap<T[]> =>
    array.reduce(
      (groups, item, index) => {
        const key = `${keyFn(item, index, array)}`;

        // Initializes the array if undefined for the key.
        if (!groups[key]) {
          groups[key] = [];
        }

        // Faster than spreading the object and array, safe here
        // i.e. { ...groups, [key]: [...groups[key], item] }
        groups[key].push(item);

        return groups;
      },
      {} as ObjectMap<T[]>
    )
);
