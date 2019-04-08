import { slice } from './slice';

/**
 * Skips an `amount` of characters at the start of a string `text`.
 * @param text String to skip items in.
 * @param amount Amount of items to skip in the string.
 */
export function skip(text: string, amount: number): string;
/**
 * Skips an `amount` of items at the start of an `array`.
 * @param array Array to skip items in.
 * @param amount Amount of items to skip in the array.
 */
export function skip<T>(array: T[], amount: number): T[];
/**
 * Returns a function that
 * skips an `amount` of items at the start of a `list`.
 * @param amount Amount of items to skip in the list.
 */
export function skip(amount: number): typeof deferred;
export function skip() {
  return slice.apply(undefined, arguments);
}

/**
 * Skips a previously specified `amount` of items at the start of a `list`.
 * @param list List to skip items in.
 */
declare function deferred<T, L extends string | T[]>(list: L): L;
