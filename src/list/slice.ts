import { infer } from '../function/infer';
import { Unary } from '../operators';

export function slice(text: string, start?: number, end?: number): string;
export function slice<T>(array: T[], start?: number, end?: number): T[];
export function slice<T>(start?: number, end?: number): Unary<T[], T[]>;
/**
 * Creates a new list that is a section of the source list.
 * @param start The index to start slicing the list. Default: `0`
 * @param end The index to end slicing the list. Default: `list.length`
 */
export function slice(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _slice(...args);
}

// tslint:disable-next-line: variable-name
const _slice = infer(
  <T>(list: T[], start?: number, end?: number): T[] => list.slice(start, end),
  args => args[0] && args[0].slice
);
