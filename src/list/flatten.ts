import { infer } from '../function/infer';
import { Unary } from '../operators';

export function flatten<T>(array: (T | T[])[]): T[];
export function flatten<T>(): Unary<(T | T[])[], T[]>;
/**
 * Flattens one level of the array.
 */
export function flatten(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _flatten(...args);
}

// tslint:disable-next-line: variable-name
const _flatten = infer(
  <T>(array: (T | T[])[]): T[] => Array.prototype.concat(...array)
);
