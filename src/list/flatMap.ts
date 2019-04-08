import { infer } from '../function/infer';
import { Mapper } from '../operators';

/**
 * Maps over an `array` according to a function `mapFn`, then flattens the result.
 * @param array Array to map over.
 * @param mapFn Function that extracts an array from each item.
 */
export function flatMap<T, R>(array: T[], mapFn: Mapper<T, R[]>): R[];
/**
 * Returns a function that
 * maps over an `array` according to a function `mapFn`, then flattens the result.
 * @param mapFn Function that extracts an array from each item.
 */
export function flatMap<T, R>(mapFn: Mapper<T, R[]>): typeof deferred;
export function flatMap() {
  return inferred.apply(undefined, arguments);
}

/**
 * Maps over an `array` according to a previously specified function `mapFn`, then flattens the result.
 * @param array Array to map over.
 */
declare function deferred<T, R>(array: T[]): R[];

const inferred = infer(
  <T, R>(array: T[], mapFn: Mapper<T, R[]>): R[] => {
    const mapOrEmpty = (item: T, index: number): R[] => {
      const mapped = mapFn(item, index, array);
      return mapped instanceof Array ? mapped : [];
    };

    return array.reduce(
      (flatten, item, index) => {
        // Faster than spreading, safe here
        // i.e. [ ...flatten, ...mapOrEmpty(item, index) ]
        flatten.push(...mapOrEmpty(item, index));
        return flatten;
      },
      [] as R[]
    );
  }
);
