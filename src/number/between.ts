import { infer } from '../function/infer';
import { Unary } from '../operators';

export function between(array: number[], min: number, max: number): number[];
export function between(min: number, max: number): Unary<number[], number[]>;
/**
 * Filters only members that are between the specified min and max.
 */
export function between(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _between(...args);
}

// tslint:disable-next-line: variable-name
const _between = infer(
  (array: number[], min: number, max: number): number[] =>
    array.filter(n => min <= n && n <= max)
);
