import { infer } from '../function/infer';
import { Unary } from '../operators';

export function flatMap<T, U>(
  array: T[],
  mapFn: (item: T, index: number, array: T[]) => U[]
): U[];
export function flatMap<T, U>(
  mapFn: (item: T, index: number, array: T[]) => U[]
): Unary<T[], U[]>;
/**
 * Flattens the array while mapping items according to the specified function.
 * @param mapFn Function that extracts an array from each `T`.
 */
export function flatMap(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _flatMap(...args);
}

// tslint:disable-next-line: variable-name
const _flatMap = infer(
  <T, U>(
    array: T[],
    mapFn: (item: T, index: number, array: T[]) => U[]
  ): U[] => {
    const mapOrEmpty = (item: T, index: number): U[] => {
      const mapped = mapFn(item, index, array);
      return mapped instanceof Array ? mapped : [];
    };

    return array.reduce(
      (flatten, item, index) => {
        // Faster than spreading, safe here
        flatten.push(...mapOrEmpty(item, index));
        return flatten;
      },
      [] as U[]
    );
  }
);
