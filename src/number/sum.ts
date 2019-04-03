import { infer } from '../function/infer';
import { Unary } from '../operators';

export function sum(array: number[]): number;
export function sum(): Unary<number[], number>;
/**
 * Sums all `number[]` members.
 */
export function sum(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _sum(...args);
}

// tslint:disable-next-line: variable-name
const _sum = infer(
  (array: number[]): number => array.reduce((total, n) => total + n, 0)
);
