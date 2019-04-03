import { infer } from '../function/infer';
import { sort } from '../list/sort';
import { Unary } from '../operators';

export function median(array: number[]): number;
export function median(): Unary<number[], number>;
/**
 * Returns the median of all `number[]` members.
 */
export function median(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _median(...args);
}

// tslint:disable-next-line: variable-name
const _median = infer((array: number[]) => {
  const sorted = sort(array);

  return sorted.length % 2 === 0 ? middleMean(sorted) : middle(sorted);
});

function middleLeft(array: number[]): number {
  return array[array.length / 2 - 1];
}
function middleRight(array: number[]): number {
  return array[array.length / 2];
}
function middleMean(array: number[]): number {
  return (middleLeft(array) + middleRight(array)) / 2;
}
function middle<T>(array: T[]): T {
  return array[(array.length - 1) / 2];
}
