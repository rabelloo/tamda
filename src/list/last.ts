import { infer } from '../function/infer';
import { Unary } from '../operators';

export function last(text: string): string;
export function last<T>(array: T[]): T;
export function last<T>(): Unary<T[], T>;

/**
 * Returns the last item of the list.
 */
export function last(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _last(...args);
}

// tslint:disable-next-line: variable-name
const _last = infer(<T>(list: T[]): T => list[list.length - 1]);
