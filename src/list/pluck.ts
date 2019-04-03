import { infer } from '../function/infer';
import { Unary } from '../operators';

export function pluck<T extends object, K extends keyof T>(
  array: T[],
  key: K
): T[K][];
export function pluck<T extends object>(key: keyof T): Unary<T[], T[keyof T][]>;
/**
 * Maps the extracted value of the specified property in an object.
 * @note Same as `map(prop())`
 */
export function pluck(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _pluck(...args);
}

// tslint:disable-next-line: variable-name
const _pluck = infer(
  <T extends object, K extends keyof T>(array: T[], key: K): T[K][] =>
    array.map(obj => obj[key])
);
