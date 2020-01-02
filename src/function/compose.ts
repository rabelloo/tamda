import { Unary } from '../operators';

type Fn = (...args: any) => any;
type In<F extends Fn, R> = Unary<ReturnType<F>, R>;

/**
 * Composes a series of `Unary` operations into a single function.
 *
 * Performs right-to-left function composition.
 *
 * Opposite function composition direction of `pipe`.
 */
export function compose<Op extends Fn>(operator: Op): Op;
/**
 * Composes a series of `Unary` operations into a single function.
 *
 * Performs right-to-left function composition.
 *
 * Opposite function composition direction of `pipe`.
 */
export function compose<Op extends Fn, R>(
  op2: In<Op, R>,
  op1: Op
): // prettier-ignore
/** Executes all the previously specified functions in the composition. */
(...args: Parameters<Op>) => R;
/**
 * Composes a series of `Unary` operations into a single function.
 *
 * Performs right-to-left function composition.
 *
 * Opposite function composition direction of `pipe`.
 */
export function compose<Op extends Fn, A, R>(
  op3: Unary<A, R>,
  op2: In<Op, A>,
  op1: Op
): // prettier-ignore
/** Executes all the previously specified functions in the composition. */
(...args: Parameters<Op>) => R;
/**
 * Composes a series of `Unary` operations into a single function.
 *
 * Performs right-to-left function composition.
 *
 * Opposite function composition direction of `pipe`.
 */
export function compose<Op extends Fn, A, B, R>(
  op4: Unary<B, R>,
  op3: Unary<A, B>,
  op2: In<Op, A>,
  op1: Op
): // prettier-ignore
/** Executes all the previously specified functions in the composition. */
(...args: Parameters<Op>) => R;
/**
 * Composes a series of `Unary` operations into a single function.
 *
 * Performs right-to-left function composition.
 *
 * Opposite function composition direction of `pipe`.
 */
export function compose<Op extends Fn, A, B, C, R>(
  op5: Unary<C, R>,
  op4: Unary<B, C>,
  op3: Unary<A, B>,
  op2: In<Op, A>,
  op1: Op
): // prettier-ignore
/** Executes all the previously specified functions in the composition. */
(...args: Parameters<Op>) => R;
/**
 * Composes a series of `Unary` operations into a single function.
 *
 * Performs right-to-left function composition.
 *
 * Opposite function composition direction of `pipe`.
 */
export function compose<Op extends Fn, A, B, C, D, R>(
  op6: Unary<D, R>,
  op5: Unary<C, D>,
  op4: Unary<B, C>,
  op3: Unary<A, B>,
  op2: In<Op, A>,
  op1: Op
): // prettier-ignore
/** Executes all the previously specified functions in the composition. */
(...args: Parameters<Op>) => R;
/**
 * Composes a series of `Unary` operations into a single function.
 *
 * Performs right-to-left function composition.
 *
 * Opposite function composition direction of `pipe`.
 */
export function compose<Op extends Fn, A, B, C, D, E, R>(
  op7: Unary<E, R>,
  op6: Unary<D, E>,
  op5: Unary<C, D>,
  op4: Unary<B, C>,
  op3: Unary<A, B>,
  op2: In<Op, A>,
  op1: Op
): // prettier-ignore
/** Executes all the previously specified functions in the composition. */
(...args: Parameters<Op>) => R;
/**
 * Composes a series of `Unary` operations into a single function.
 *
 * Performs right-to-left function composition.
 *
 * Opposite function composition direction of `pipe`.
 */
export function compose<Op extends Fn, A, B, C, D, E, F, R>(
  op8: Unary<F, R>,
  op7: Unary<E, F>,
  op6: Unary<D, E>,
  op5: Unary<C, D>,
  op4: Unary<B, C>,
  op3: Unary<A, B>,
  op2: In<Op, A>,
  op1: Op
): // prettier-ignore
/** Executes all the previously specified functions in the composition. */
(...args: Parameters<Op>) => R;
/**
 * Composes a series of `Unary` operations into a single function.
 *
 * Performs right-to-left function composition.
 *
 * Opposite function composition direction of `pipe`.
 */
export function compose<Op extends Fn, A, B, C, D, E, F, G, R>(
  op9: Unary<G, R>,
  op8: Unary<F, G>,
  op7: Unary<E, F>,
  op6: Unary<D, E>,
  op5: Unary<C, D>,
  op4: Unary<B, C>,
  op3: Unary<A, B>,
  op2: In<Op, A>,
  op1: Op
): // prettier-ignore
/** Executes all the previously specified functions in the composition. */
(...args: Parameters<Op>) => R;
/**
 * Composes a series of `Unary` operations into a single function.
 *
 * Performs right-to-left function composition.
 *
 * Opposite function composition direction of `pipe`.
 */
export function compose<Op extends Fn, A, B, C, D, E, F, G, H, R>(
  op10: Unary<H, R>,
  op9: Unary<G, H>,
  op8: Unary<F, G>,
  op7: Unary<E, F>,
  op6: Unary<D, E>,
  op5: Unary<C, D>,
  op4: Unary<B, C>,
  op3: Unary<A, B>,
  op2: In<Op, A>,
  op1: Op
): // prettier-ignore
/** Executes all the previously specified functions in the composition. */
(...args: Parameters<Op>) => R;

/**
 * Composes a series of `Unary` operations into a single function.
 *
 * Performs right-to-left function composition.
 *
 * Opposite function composition direction of `pipe`.
 */
export function compose<O extends Unary<unknown, unknown>>(
  ...operators: O[]
): (start: unknown) => unknown {
  const lastOperator = operators.pop()!;
  return (...start) =>
    operators.reduceRight(
      (previousValue, op) => op(previousValue),
      lastOperator(...start)
    );
}
