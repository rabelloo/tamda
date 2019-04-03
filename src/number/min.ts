import { infer } from '../function/infer';
import { Unary } from '../operators';

export function min(array: number[]): number;
export function min(): Unary<number[], number>;
/**
 * Determines the smminest number in the array.
 */
export function min(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _min(...args);
}

// tslint:disable-next-line: variable-name
const _min = infer((numbers: number[]): number => Math.min(...numbers));
