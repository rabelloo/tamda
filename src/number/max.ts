import { infer } from '../function/infer';
import { Unary } from '../operators';

export function max(array: number[]): number;
export function max(): Unary<number[], number>;
/**
 * Determines the largest number in the array.
 */
export function max(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _max(...args);
}

// tslint:disable-next-line: variable-name
const _max = infer((numbers: number[]): number => Math.max(...numbers));
