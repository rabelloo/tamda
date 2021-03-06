import { Unary } from '../operators';

type Fn = (...args: any) => any;
type In<F extends Fn, R> = Unary<ReturnType<F>, R>;

/**
 * Composes a series of `Unary` operations into a single function.
 *
 * Performs left-to-right function composition.
 *
 * Opposite function composition direction of `compose`.
 *
 * In some libraries this function is named `sequence`.
 */
export function pipe<Op extends Fn>(operator: Op): Op;
/**
 * Composes a series of `Unary` operations into a single function.
 *
 * Performs left-to-right function composition.
 *
 * Opposite function composition direction of `compose`.
 *
 * In some libraries this function is named `sequence`.
 */
export function pipe<Op extends Fn, R>(
  op1: Op,
  ops2: In<Op, R>
): // prettier-ignore
/** Executes all the previously specified functions in the pipe. */
(...args: Parameters<Op>) => R;
/**
 * Composes a series of `Unary` operations into a single function.
 *
 * Performs left-to-right function composition.
 *
 * Opposite function composition direction of `compose`.
 *
 * In some libraries this function is named `sequence`.
 */
export function pipe<Op extends Fn, A, R>(
  op1: Op,
  op2: In<Op, A>,
  op3: Unary<A, R>
): // prettier-ignore
/** Executes all the previously specified functions in the pipe. */
(...args: Parameters<Op>) => R;
/**
 * Composes a series of `Unary` operations into a single function.
 *
 * Performs left-to-right function composition.
 *
 * Opposite function composition direction of `compose`.
 *
 * In some libraries this function is named `sequence`.
 */
export function pipe<Op extends Fn, A, B, R>(
  op1: Op,
  op2: In<Op, A>,
  op3: Unary<A, B>,
  op4: Unary<B, R>
): // prettier-ignore
/** Executes all the previously specified functions in the pipe. */
(...args: Parameters<Op>) => R;
/**
 * Composes a series of `Unary` operations into a single function.
 *
 * Performs left-to-right function composition.
 *
 * Opposite function composition direction of `compose`.
 *
 * In some libraries this function is named `sequence`.
 */
export function pipe<Op extends Fn, A, B, C, R>(
  op1: Op,
  op2: In<Op, A>,
  op3: Unary<A, B>,
  op4: Unary<B, C>,
  op5: Unary<C, R>
): // prettier-ignore
/** Executes all the previously specified functions in the pipe. */
(...args: Parameters<Op>) => R;
/**
 * Composes a series of `Unary` operations into a single function.
 *
 * Performs left-to-right function composition.
 *
 * Opposite function composition direction of `compose`.
 *
 * In some libraries this function is named `sequence`.
 */
export function pipe<Op extends Fn, A, B, C, D, R>(
  op1: Op,
  op2: In<Op, A>,
  op3: Unary<A, B>,
  op4: Unary<B, C>,
  op5: Unary<C, D>,
  op6: Unary<D, R>
): // prettier-ignore
/** Executes all the previously specified functions in the pipe. */
(...args: Parameters<Op>) => R;
/**
 * Composes a series of `Unary` operations into a single function.
 *
 * Performs left-to-right function composition.
 *
 * Opposite function composition direction of `compose`.
 *
 * In some libraries this function is named `sequence`.
 */
export function pipe<Op extends Fn, A, B, C, D, E, R>(
  op1: Op,
  op2: In<Op, A>,
  op3: Unary<A, B>,
  op4: Unary<B, C>,
  op5: Unary<C, D>,
  op6: Unary<D, E>,
  op7: Unary<E, R>
): // prettier-ignore
/** Executes all the previously specified functions in the pipe. */
(...args: Parameters<Op>) => R;
/**
 * Composes a series of `Unary` operations into a single function.
 *
 * Performs left-to-right function composition.
 *
 * Opposite function composition direction of `compose`.
 *
 * In some libraries this function is named `sequence`.
 */
export function pipe<Op extends Fn, A, B, C, D, E, F, R>(
  op1: Op,
  op2: In<Op, A>,
  op3: Unary<A, B>,
  op4: Unary<B, C>,
  op5: Unary<C, D>,
  op6: Unary<D, E>,
  op7: Unary<E, F>,
  op8: Unary<F, R>
): // prettier-ignore
/** Executes all the previously specified functions in the pipe. */
(...args: Parameters<Op>) => R;
/**
 * Composes a series of `Unary` operations into a single function.
 *
 * Performs left-to-right function composition.
 *
 * Opposite function composition direction of `compose`.
 *
 * In some libraries this function is named `sequence`.
 */
export function pipe<Op extends Fn, A, B, C, D, E, F, G, R>(
  op1: Op,
  op2: In<Op, A>,
  op3: Unary<A, B>,
  op4: Unary<B, C>,
  op5: Unary<C, D>,
  op6: Unary<D, E>,
  op7: Unary<E, F>,
  op8: Unary<F, G>,
  op9: Unary<G, R>
): // prettier-ignore
/** Executes all the previously specified functions in the pipe. */
(...args: Parameters<Op>) => R;
/**
 * Composes a series of `Unary` operations into a single function.
 *
 * Performs left-to-right function composition.
 *
 * Opposite function composition direction of `compose`.
 *
 * In some libraries this function is named `sequence`.
 */
export function pipe<Op extends Fn, A, B, C, D, E, F, G, H, R>(
  op1: Op,
  op2: In<Op, A>,
  op3: Unary<A, B>,
  op4: Unary<B, C>,
  op5: Unary<C, D>,
  op6: Unary<D, E>,
  op7: Unary<E, F>,
  op8: Unary<F, G>,
  op9: Unary<G, H>,
  op10: Unary<H, R>
): // prettier-ignore
/** Executes all the previously specified functions in the pipe. */
(...args: Parameters<Op>) => R;

/**
 * Composes a series of `Unary` operations into a single function.
 *
 * Performs left-to-right function composition.
 *
 * Opposite function composition direction of `compose`.
 *
 * In some libraries this function is named `sequence`.
 */
export function pipe<O extends Unary<unknown, unknown>>(
  firstOperator: O,
  ...operators: O[]
): (start: unknown) => unknown {
  return (...start) =>
    operators.reduce(
      (previousValue, op) => op(previousValue),
      firstOperator(...start)
    );
}
