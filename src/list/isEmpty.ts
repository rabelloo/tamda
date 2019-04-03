import { infer } from '../function/infer';
import { Unary } from '../operators';

export function isEmpty(text: string): boolean;
export function isEmpty<T>(array: T[]): boolean;
export function isEmpty<T>(): Unary<string | T[], boolean>;

/**
 * Determines whether or not the source array is empty.
 */
export function isEmpty(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _isEmpty(...args);
}

// tslint:disable-next-line: variable-name
const _isEmpty = infer(<T>(list: string | T[]): boolean => list.length === 0);
