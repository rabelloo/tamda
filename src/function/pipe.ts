import { Unary } from '../operators';

export function pipe<A, B>(operator: Unary<A, B>): Unary<A, B>;
export function pipe<A, B, C>(op1: Unary<A, B>, op2: Unary<B, C>): Unary<A, C>;
export function pipe<A, B, C, D>(
  op1: Unary<A, B>,
  op2: Unary<B, C>,
  op3: Unary<C, D>
): Unary<A, D>;
export function pipe<A, B, C, D, E>(
  op1: Unary<A, B>,
  op2: Unary<B, C>,
  op3: Unary<C, D>,
  op4: Unary<D, E>
): Unary<A, E>;
export function pipe<A, B, C, D, E, F>(
  op1: Unary<A, B>,
  op2: Unary<B, C>,
  op3: Unary<C, D>,
  op4: Unary<D, E>,
  op5: Unary<E, F>
): Unary<A, F>;
export function pipe<A, B, C, D, E, F, G>(
  op1: Unary<A, B>,
  op2: Unary<B, C>,
  op3: Unary<C, D>,
  op4: Unary<D, E>,
  op5: Unary<E, F>,
  op6: Unary<F, G>
): Unary<A, G>;
export function pipe<A, B, C, D, E, F, G, H>(
  op1: Unary<A, B>,
  op2: Unary<B, C>,
  op3: Unary<C, D>,
  op4: Unary<D, E>,
  op5: Unary<E, F>,
  op6: Unary<F, G>,
  op7: Unary<G, H>
): Unary<A, H>;
export function pipe<A, B, C, D, E, F, G, H, I>(
  op1: Unary<A, B>,
  op2: Unary<B, C>,
  op3: Unary<C, D>,
  op4: Unary<D, E>,
  op5: Unary<E, F>,
  op6: Unary<F, G>,
  op7: Unary<G, H>,
  op8: Unary<H, I>
): Unary<A, I>;
export function pipe<A, B, C, D, E, F, G, H, I, J>(
  op1: Unary<A, B>,
  op2: Unary<B, C>,
  op3: Unary<C, D>,
  op4: Unary<D, E>,
  op5: Unary<E, F>,
  op6: Unary<F, G>,
  op7: Unary<G, H>,
  op8: Unary<H, I>,
  op9: Unary<I, J>
): Unary<A, J>;
export function pipe<A, B, C, D, E, F, G, H, I, J, K>(
  op1: Unary<A, B>,
  op2: Unary<B, C>,
  op3: Unary<C, D>,
  op4: Unary<D, E>,
  op5: Unary<E, F>,
  op6: Unary<F, G>,
  op7: Unary<G, H>,
  op8: Unary<H, I>,
  op9: Unary<I, J>,
  op10: Unary<J, K>
): Unary<A, K>;

/**
 * Composes a series of `Unary` operations into a single function.
 *
 * Performs left-to-right function composition.
 *
 * Opposite function composition direction of `compose`.
 *
 * In some libraries this function is named `sequence`.
 */
export function pipe<O extends Unary<any, any>>(
  firstOperator: O,
  ...operators: O[]
): (start: any) => any {
  return (...start) =>
    operators.reduce(
      (previousValue, op) => op(previousValue),
      firstOperator(...start)
    );
}
