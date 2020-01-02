import { infer } from '../function/infer';

/**
 * Returns a substring of a string `text`, from `start` to `end`.
 * @param text String to slice.
 * @param start Index to start slicing the string. Default: `0`
 * @param end Index to end slicing the string. Default: `text.length`
 */
export function slice(text: string, start?: number, end?: number): string;
/**
 * Returns a subsection of an `array`, from `start` to `end`.
 * @param array Array to slice.
 * @param start The index to start slicing the list. Default: `0`
 * @param end The index to end slicing the list. Default: `list.length`
 */
export function slice<T>(array: T[], start?: number, end?: number): T[];
/**
 * Returns a function that
 * returns a subsection of a `list`, from `start` to `end`.
 * @param start The index to start slicing the list. Default: `0`
 * @param end The index to end slicing the list. Default: `list.length`
 */
export function slice<T>(start?: number, end?: number): typeof deferred;
export function slice() {
  return inferred.apply(undefined, arguments);
}

/**
 * Returns a subsection of a `list`, according to previously specified `start` and `end`.
 * @param list List to slice.
 */
declare function deferred<T, L extends string | T[]>(list: L): L;

const sliceable = (obj: any) => obj?.slice instanceof Function;

const inferred = infer(
  <T>(list: T[], start?: number, end?: number): T[] => list.slice(start, end),
  args => sliceable(args[0])
);
