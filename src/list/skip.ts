import { Unary } from '../operators';
import { slice } from './slice';

export function skip(text: string, amount: number): string;
export function skip<T>(array: T[], amount: number): T[];
export function skip<T>(amount: number): Unary<T[], T[]>;
/**
 * Skips the specified amount of items at the start of the list.
 * @param amount The amount of items to skip in the list.
 */
export function skip(...args: any[]) {
  return slice(...args) as any;
}
