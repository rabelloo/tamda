import { infer } from '../function/infer';
import { Unary } from '../operators';

export function reverse<T>(array: T[]): T[];
export function reverse<T>(): Unary<T[], T[]>;
/**
 * Reverses the array sorting/order.
 */
export function reverse(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _reverse(...args);
}

// tslint:disable-next-line: variable-name
const _reverse = infer(<T>(array: T[]): T[] => array.slice().reverse());
