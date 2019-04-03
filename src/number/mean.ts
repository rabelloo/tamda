import { infer } from '../function/infer';
import { Unary } from '../operators';
import { sum } from './sum';

export function mean(array: number[]): number;
export function mean(): Unary<number[], number>;
/**
 * Returns the mean of all `number[]` members.
 */
export function mean(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _mean(...args);
}

// tslint:disable-next-line: variable-name
const _mean = infer((array: number[]) => sum(array) / array.length);
