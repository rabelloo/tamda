import { infer } from '../function/infer';
import { Unary } from '../operators';

export function any<T>(
  array: T[],
  predicate: (item: T, index: number, array: T[]) => boolean
): boolean;
export function any<T>(
  predicate: (item: T, index: number, array: T[]) => boolean
): Unary<T[], boolean>;
/**
 * Determines whether or not any item in the array match a specified predicate.
 * @param predicate Function to determine a match.
 */
export function any(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _any(...args);
}

// tslint:disable-next-line: variable-name
const _any = infer(
  <T>(
    array: T[],
    predicate: (item: T, index: number, array: T[]) => boolean
  ): boolean => array.some(predicate)
);
