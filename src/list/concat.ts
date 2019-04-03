import { infer } from '../function/infer';
import { Unary } from '../operators';

export function concat(text: string, item: string): string;
export function concat(item: string): Unary<string, string>;

export function concat<T>(list: T[], item: T | T[]): T[];
export function concat<T>(item: T | T[]): Unary<T[], T[]>;

/**
 * Appends an item to a specified list.
 * @param item Item to append to list.
 */
export function concat(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _concat(...args);
}

// tslint:disable-next-line: variable-name
const _concat = infer(<T>(list: T[], item: T | T[]): T[] => list.concat(item));
