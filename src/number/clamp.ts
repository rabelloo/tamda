import { infer } from '../function/infer';
import { Unary } from '../operators';

export function clamp(num: number, min: number, max: number): number;
export function clamp(min: number, max: number): Unary<number, number>;
/**
 * Restricts a number between a min and a max.
 */
export function clamp(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _clamp(...args);
}

// tslint:disable-next-line: variable-name
const _clamp = infer(
  (num: number, min: number, max: number): number =>
    Math.max(Math.min(num, max), min)
);
