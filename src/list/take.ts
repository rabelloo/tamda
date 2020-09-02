import { infer } from '../function/infer';
import { slice } from './slice';

/**
 * Takes an `amount` of characters from the start of a string `text`.
 * @param text String to take characters from.
 * @param amount Amount of characters to take from the string.
 */
export function take(text: string, amount: number): string;
/**
 * Takes an `amount` of items from the start of an `array`.
 * @param array Array to take items from.
 * @param amount Amount of items to take from the array.
 */
export function take<T>(array: T[], amount: number): T[];
/**
 * Returns a function that
 * takes an `amount` of items from the start of a `list`.
 * @param amount Amount of items to take from the list.
 */
export function take<T>(amount: number): typeof deferred;
export function take() {
  return inferred.apply(undefined, arguments);
}

/**
 * Takes a previously specified `amount` of items from the start of a `list`.
 * @param list List to take items from.
 */
declare function deferred<T, L extends string | T[]>(list: L): L;

const inferred = infer(<T>(list: T[], amount: number): T[] =>
  slice(list, 0, amount)
);
