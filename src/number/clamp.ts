import { infer } from '../function/infer';

/**
 * Restricts a number `num` between a `min` and a `max`.
 * @param num Target number.
 * @param min Minimum value.
 * @param max Maximum value.
 */
export function clamp(num: number, min: number, max: number): number;

/**
 * Returns a function that
 * restricts a number `num` between a `min` and a `max`.
 * @param min Minimum value.
 * @param max Maximum value.
 */
export function clamp(min: number, max: number): typeof deferred;
export function clamp() {
  return inferred.apply(undefined, arguments);
}

/**
 * Restricts a number `num` between both previously specified `min` and `max`.
 * @param num Target number.
 */
declare function deferred(num: number): number;

const inferred = infer((num: number, min: number, max: number): number =>
  Math.max(Math.min(num, max), min)
);
