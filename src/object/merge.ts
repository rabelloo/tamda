import { infer } from '../function/infer';
import { Indexable } from '../indexable';

/**
 * Merges two objects, `objA` and `objB`, with preference for B's properties.
 * @note Same as `{ ...objA, ...objB }`
 * @param objA Object on the left of the merge.
 * @param objB Object on the right of the merge.
 */
export function merge<A extends Indexable, B extends Indexable>(
  objA: A,
  objB: B
): A & B;
/**
 * Returns a function that
 * merges two objects, `objA` and `objB`, with preference for B's properties.
 * @note Same as `{ ...objA, ...objB }`
 * @param objB Object on the right of the merge.
 */
export function merge<A extends Indexable, B extends Indexable>(
  objB: B
): typeof deferred;
export function merge() {
  return inferred.apply(undefined, arguments);
}

/**
 * Merges two objects, `objA` and previously specified `objB`, with preference for B's properties.
 * @note Same as `{ ...objA, ...objB }`
 * @param objA Object on the left of the merge.
 */
declare function deferred<A extends Indexable, B extends Indexable>(objA: A): A & B;

const inferred = infer(
  <A extends Indexable, B extends Indexable>(objA: A, objB: B): A & B => ({
    ...objA,
    ...objB,
  })
);
