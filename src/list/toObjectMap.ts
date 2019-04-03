import { infer } from '../function/infer';
import { ObjectMap } from '../object-map';
import { Unary } from '../operators';

export function toObjectMap<T>(
  array: T[],
  keyFn: (item: T, index: number) => string | number
): ObjectMap<T>;
export function toObjectMap<T>(
  keyFn: (item: T, index: number) => string | number
): Unary<T[], ObjectMap<T>>;
/**
 * Transforms the array into an `ObjectMap` using the keys extracted from the specified function.
 *
 * `ObjectMap`s are plain JavaScript objects that behave like native `Map`s,
 * but serializable because the key is always a `string`.
 *
 * @note `number` keys wil be converted to `string`.
 * @param keyFn Function that extracts a key from each `T`.
 *
 * @example
 * toObjectMap(
 *   [{ id: 4, name: 'John' }, { id: 1, name: 'Mary' }],
 *   x => x.id
 * )
 * // { '1': { id: 1, name: 'Mary' }, '4': { id: 4, name: 'John' }}
 */
export function toObjectMap(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _toObjectMap(...args);
}

// tslint:disable-next-line: variable-name
const _toObjectMap = infer(
  <T>(
    array: T[],
    keyFn: (item: T, index: number) => string | number
  ): ObjectMap<T> =>
    array.reduce(
      (objectMap, item, index) => {
        const key = `${keyFn(item, index)}`;

        // Faster than spreading, safe here
        objectMap[key] = item;

        return objectMap;
      },
      {} as any
    )
);
