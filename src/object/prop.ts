import { infer } from '../function/infer';
import { Unary } from '../operators';

export function prop<T extends object, K extends keyof T>(
  obj: T,
  prop: K
): T[K];
export function prop<T extends object>(prop: keyof T): Unary<T, T[keyof T]>;
/**
 * Extracts the value of the specified property in an object.
 */
export function prop(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _prop(...args);
}

// tslint:disable-next-line: variable-name
const _prop = infer(
  <T extends object, K extends keyof T>(obj: T, key: K): T[K] => obj[key]
);
