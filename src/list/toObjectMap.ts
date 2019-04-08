import { infer } from '../function/infer';
import { ObjectMap } from '../object-map';

/**
 * Transforms an `array` into an `ObjectMap` using the keys extracted from a function `keyFn`.
 *
 * `ObjectMap`s are plain JavaScript objects that are similar to native `Map`s,
 * but serializable because the key is always a `string`.
 *
 * @note `number` keys wil be converted to `string`.
 * @param array Array to transform.
 * @param keyFn Function that extracts a key from each item.
 * @example ```typescript
 * toObjectMap(
 *   [{ id: 4, name: 'John' }, { id: 1, name: 'Mary' }],
 *   x => x.id
 * )
 * // { '1': { id: 1, name: 'Mary' }, '4': { id: 4, name: 'John' }} ```
 */
export function toObjectMap<T>(array: T[], keyFn: KeyFn<T>): ObjectMap<T>;
/**
 * Returns a function that
 * transforms an `array` into an `ObjectMap` using the keys extracted from a function `keyFn`.
 *
 * `ObjectMap`s are plain JavaScript objects that are similar to native `Map`s,
 * but serializable because the key is always a `string`.
 *
 * @note `number` keys wil be converted to `string`.
 * @param keyFn Function that extracts a key from each item.
 * @example ```typescript
 * const byId = toObjectMap(x => x.id);
 * byId(([{ id: 4, name: 'John' }, { id: 1, name: 'Mary' }]))
 * // { '1': { id: 1, name: 'Mary' }, '4': { id: 4, name: 'John' }} ```
 */
export function toObjectMap<T>(keyFn: KeyFn<T>): typeof deferred;
export function toObjectMap() {
  return inferred.apply(undefined, arguments);
}

/**
 * Transforms an `array` into an `ObjectMap` using the keys extracted from a previously specified function `keyFn`.
 *
 * `ObjectMap`s are plain JavaScript objects that are similar to native `Map`s,
 * but serializable because the key is always a `string`.
 *
 * @note `number` keys wil be converted to `string`.
 * @param array Array to transform.
 */
declare function deferred<T>(array: T[]): ObjectMap<T>;

type KeyFn<T> = (item: T, index: number) => string | number;

const inferred = infer(
  <T>(array: T[], keyFn: KeyFn<T>): ObjectMap<T> =>
    array.reduce(
      (objectMap, item, index) => {
        const key = `${keyFn(item, index)}`;

        // Faster than spreading, safe here
        objectMap[key] = item;
        return objectMap;
      },
      {} as ObjectMap<T>
    )
);
