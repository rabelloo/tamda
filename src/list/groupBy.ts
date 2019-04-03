import { infer } from '../function/infer';
import { ObjectMap } from '../object-map';
import { Unary } from '../operators';

export function groupBy<T>(
  array: T[],
  keyFn: (item: T, index: number, array: T[]) => number | string
): ObjectMap<T[]>;
export function groupBy<T>(
  keyFn: (item: T, index: number, array: T[]) => number | string
): Unary<T[], ObjectMap<T[]>>;
/**
 * Groups the array by the key extracted from each item by the specified function.
 * @param keyFn Function that extracts a key from each `T`.
 */
export function groupBy(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _groupBy(...args);
}

// tslint:disable-next-line: variable-name
const _groupBy = infer(
  <T>(
    array: T[],
    keyFn: (item: T, index: number, array: T[]) => number | string
  ): ObjectMap<T[]> =>
    array.reduce(
      (groups, item, index) => {
        const key = `${keyFn(item, index, array)}`;

        // Initializes the array if undefined for the key.
        if (!groups[key]) {
          groups[key] = [];
        }

        // Faster than spreading the object and array,
        // i.e. { ...groups, [key]: [...groups[key], item] },
        // safe here.
        groups[key].push(item);

        return groups;
      },
      {} as ObjectMap<T[]>
    )
);
