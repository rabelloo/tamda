import { Unary } from '../operators';

/**
 * Object with an already supplied value that will be used to
 * immediately execute `compose` or `pipe` when called.
 */
export interface WithValue<A> {
  /**
   * Composes a series of `Unary` operations into a single function.
   *
   * Performs right-to-left function composition.
   *
   * Opposite function composition direction of `pipe`.
   */
  compose<B>(operator: Unary<A, B>): B;
  compose<B, C>(op1: Unary<A, B>, op2: Unary<B, C>): C;
  compose<B, C, D>(op1: Unary<A, B>, op2: Unary<B, C>, op3: Unary<C, D>): D;
  compose<B, C, D, E>(
    op1: Unary<A, B>,
    op2: Unary<B, C>,
    op3: Unary<C, D>,
    op4: Unary<D, E>
  ): E;
  compose<B, C, D, E, F>(
    op1: Unary<A, B>,
    op2: Unary<B, C>,
    op3: Unary<C, D>,
    op4: Unary<D, E>,
    op5: Unary<E, F>
  ): F;
  compose<B, C, D, E, F, G>(
    op1: Unary<A, B>,
    op2: Unary<B, C>,
    op3: Unary<C, D>,
    op4: Unary<D, E>,
    op5: Unary<E, F>,
    op6: Unary<F, G>
  ): G;
  compose<B, C, D, E, F, G, H>(
    op1: Unary<A, B>,
    op2: Unary<B, C>,
    op3: Unary<C, D>,
    op4: Unary<D, E>,
    op5: Unary<E, F>,
    op6: Unary<F, G>,
    op7: Unary<G, H>
  ): H;
  compose<B, C, D, E, F, G, H, I>(
    op1: Unary<A, B>,
    op2: Unary<B, C>,
    op3: Unary<C, D>,
    op4: Unary<D, E>,
    op5: Unary<E, F>,
    op6: Unary<F, G>,
    op7: Unary<G, H>,
    op8: Unary<H, I>
  ): I;
  compose<B, C, D, E, F, G, H, I, J>(
    op1: Unary<A, B>,
    op2: Unary<B, C>,
    op3: Unary<C, D>,
    op4: Unary<D, E>,
    op5: Unary<E, F>,
    op6: Unary<F, G>,
    op7: Unary<G, H>,
    op8: Unary<H, I>,
    op9: Unary<I, J>
  ): J;
  compose<B, C, D, E, F, G, H, I, J, K>(
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
  ): K;

  /**
   * Composes a series of `Unary` operations into a single function.
   *
   * Performs right-to-left function composition.
   *
   * Opposite function composition direction of `pipe`.
   */
  compose(...operators: Unary<any, any>[]): any;

  /**
   * Composes a series of `Unary` operations into a single function.
   *
   * Performs left-to-right function composition.
   *
   * Opposite function composition direction of `compose`.
   *
   * In some libraries this function is named `sequence`.
   */
  pipe<B>(operator: Unary<A, B>): B;
  pipe<B, C>(op1: Unary<A, B>, op2: Unary<B, C>): C;
  pipe<B, C, D>(op1: Unary<A, B>, op2: Unary<B, C>, op3: Unary<C, D>): D;
  pipe<B, C, D, E>(
    op1: Unary<A, B>,
    op2: Unary<B, C>,
    op3: Unary<C, D>,
    op4: Unary<D, E>
  ): E;
  pipe<B, C, D, E, F>(
    op1: Unary<A, B>,
    op2: Unary<B, C>,
    op3: Unary<C, D>,
    op4: Unary<D, E>,
    op5: Unary<E, F>
  ): F;
  pipe<B, C, D, E, F, G>(
    op1: Unary<A, B>,
    op2: Unary<B, C>,
    op3: Unary<C, D>,
    op4: Unary<D, E>,
    op5: Unary<E, F>,
    op6: Unary<F, G>
  ): G;
  pipe<B, C, D, E, F, G, H>(
    op1: Unary<A, B>,
    op2: Unary<B, C>,
    op3: Unary<C, D>,
    op4: Unary<D, E>,
    op5: Unary<E, F>,
    op6: Unary<F, G>,
    op7: Unary<G, H>
  ): H;
  pipe<B, C, D, E, F, G, H, I>(
    op1: Unary<A, B>,
    op2: Unary<B, C>,
    op3: Unary<C, D>,
    op4: Unary<D, E>,
    op5: Unary<E, F>,
    op6: Unary<F, G>,
    op7: Unary<G, H>,
    op8: Unary<H, I>
  ): I;
  pipe<B, C, D, E, F, G, H, I, J>(
    op1: Unary<A, B>,
    op2: Unary<B, C>,
    op3: Unary<C, D>,
    op4: Unary<D, E>,
    op5: Unary<E, F>,
    op6: Unary<F, G>,
    op7: Unary<G, H>,
    op8: Unary<H, I>,
    op9: Unary<I, J>
  ): J;
  pipe<B, C, D, E, F, G, H, I, J, K>(
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
  ): K;

  /**
   * Composes a series of `Unary` operations into a single function.
   *
   * Performs left-to-right function composition.
   *
   * Opposite function composition direction of `compose`.
   *
   * In some libraries this function is named `sequence`.
   */
  pipe(...operators: Unary<any, any>[]): any;
}
