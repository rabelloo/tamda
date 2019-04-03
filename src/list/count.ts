import { infer } from '../function/infer';
import { Unary } from '../operators';

export function count(text: string): number;
export function count<T>(array: T[]): number;
export function count<T>(): Unary<string | T[], number>;

/**
 * Counts the number of members in the list, i.e. `length`.
 */
export function count(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _count(...args);
}

// tslint:disable-next-line: variable-name
const _count = infer(<T>(list: T[]): number => list.length);
