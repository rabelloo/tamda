import { infer } from '../function/infer';
import { Unary } from '../operators';
import { slice } from './slice';

export function take(text: string, amount: number): string;
export function take<T>(array: T[], amount: number): T[];
export function take<T>(amount: number): Unary<T[], T[]>;
/**
 * Takes the specified amount of items from the start of the list.
 * @param amount The amount of items to take from the list.
 */
export function take(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _take(...args);
}

// tslint:disable-next-line: variable-name
const _take = infer(
  <T>(list: T[], amount: number): T[] => slice(list, 0, amount)
);
