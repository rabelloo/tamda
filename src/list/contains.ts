import { infer } from '../function/infer';
import { Unary } from '../operators';

export function contains(text: string, item: string): boolean;
export function contains(item: string): Unary<string, boolean>;

export function contains<T>(array: T[], item: T): boolean;
export function contains<T>(item: T): Unary<T[], boolean>;

/**
 * Determines whether or not the list contains the specified item.
 * @param item Item to look for in the list.
 */
export function contains(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _contains(...args);
}

// tslint:disable-next-line: variable-name
const _contains = infer(
  <T>(list: T[], item: T): boolean => list.includes(item)
);
