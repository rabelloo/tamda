/**
 * Composes a series of `Unary` operations into a single function.
 *
 * Performs left-to-right function composition.
 *
 * Opposite function composition direction of `compose`.
 *
 * In some libraries this function is named `sequence`.
 */
export const pipe: Pipe = <
  Args extends Arr,
  InitOp extends (...args: Args) => unknown,
  FinalOp extends (...args: Args) => Result,
  Result,
  Op extends Unary[]
>(
  initOperator: InitOp,
  ...operators: [...Op, FinalOp]
): ((...start: Args) => Result) => {
  return (...start: Args) =>
    operators.reduce(
      (currentValue, nextOp) => nextOp(currentValue),
      initOperator(...start)
    ) as Result;
};

type Arr = readonly unknown[];
type Fn = (...args: Arr) => unknown;
type Unary = (arg: unknown) => unknown;

interface Pipe {
  /**
   * Composes a series of `Unary` operations into a single function.
   *
   * Performs left-to-right function composition.
   *
   * Opposite function composition direction of `compose`.
   *
   * In some libraries this function is named `sequence`.
   */
  <Op extends Fn>(operator: Op): Op;
  /**
   * Composes a series of `Unary` operations into a single function.
   *
   * Performs left-to-right function composition.
   *
   * Opposite function composition direction of `compose`.
   *
   * In some libraries this function is named `sequence`.
   */
  <A extends Arr, B, R>(op1: (...args: A) => B, op2: (b: B) => R): (
    ...args: A
  ) => R;
  /**
   * Composes a series of `Unary` operations into a single function.
   *
   * Performs left-to-right function composition.
   *
   * Opposite function composition direction of `compose`.
   *
   * In some libraries this function is named `sequence`.
   */
  <A extends Arr, B, C, R>(
    op1: (...args: A) => B,
    op2: (b: B) => C,
    op3: (c: C) => R
  ): (...args: A) => R;
  /**
   * Composes a series of `Unary` operations into a single function.
   *
   * Performs left-to-right function composition.
   *
   * Opposite function composition direction of `compose`.
   *
   * In some libraries this function is named `sequence`.
   */
  <A extends Arr, B, C, D, R>(
    op1: (...args: A) => B,
    op2: (b: B) => C,
    op3: (c: C) => D,
    op4: (d: D) => R
  ): (...args: A) => R;
  /**
   * Composes a series of `Unary` operations into a single function.
   *
   * Performs left-to-right function composition.
   *
   * Opposite function composition direction of `compose`.
   *
   * In some libraries this function is named `sequence`.
   */
  <A extends Arr, B, C, D, E, R>(
    op1: (...args: A) => B,
    op2: (b: B) => C,
    op3: (c: C) => D,
    op4: (d: D) => E,
    op5: (e: E) => R
  ): (...args: A) => R;
  /**
   * Composes a series of `Unary` operations into a single function.
   *
   * Performs left-to-right function composition.
   *
   * Opposite function composition direction of `compose`.
   *
   * In some libraries this function is named `sequence`.
   */
  <A extends Arr, B, C, D, E, F, R>(
    op1: (...args: A) => B,
    op2: (b: B) => C,
    op3: (c: C) => D,
    op4: (d: D) => E,
    op5: (e: E) => F,
    op6: (f: F) => R
  ): (...args: A) => R;
  /**
   * Composes a series of `Unary` operations into a single function.
   *
   * Performs left-to-right function composition.
   *
   * Opposite function composition direction of `compose`.
   *
   * In some libraries this function is named `sequence`.
   */
  <A extends Arr, B, C, D, E, F, G, R>(
    op1: (...args: A) => B,
    op2: (b: B) => C,
    op3: (c: C) => D,
    op4: (d: D) => E,
    op5: (e: E) => F,
    op6: (f: F) => G,
    op7: (g: G) => R
  ): (...args: A) => R;
  /**
   * Composes a series of `Unary` operations into a single function.
   *
   * Performs left-to-right function composition.
   *
   * Opposite function composition direction of `compose`.
   *
   * In some libraries this function is named `sequence`.
   */
  <A extends Arr, B, C, D, E, F, G, H, R>(
    op1: (...args: A) => B,
    op2: (b: B) => C,
    op3: (c: C) => D,
    op4: (d: D) => E,
    op5: (e: E) => F,
    op6: (f: F) => G,
    op7: (g: G) => H,
    op8: (h: H) => R
  ): (...args: A) => R;
  /**
   * Composes a series of `Unary` operations into a single function.
   *
   * Performs left-to-right function composition.
   *
   * Opposite function composition direction of `compose`.
   *
   * In some libraries this function is named `sequence`.
   */
  <A extends Arr, B, C, D, E, F, G, H, I, R>(
    op1: (...args: A) => B,
    op2: (b: B) => C,
    op3: (c: C) => D,
    op4: (d: D) => E,
    op5: (e: E) => F,
    op6: (f: F) => G,
    op7: (g: G) => H,
    op8: (h: H) => I,
    op9: (i: I) => R
  ): (...args: A) => R;
  /**
   * Composes a series of `Unary` operations into a single function.
   *
   * Performs left-to-right function composition.
   *
   * Opposite function composition direction of `compose`.
   *
   * In some libraries this function is named `sequence`.
   */
  <A extends Arr, B, C, D, E, F, G, H, I, J, R>(
    op1: (...args: A) => B,
    op2: (b: B) => C,
    op3: (c: C) => D,
    op4: (d: D) => E,
    op5: (e: E) => F,
    op6: (f: F) => G,
    op7: (g: G) => H,
    op8: (h: H) => I,
    op9: (i: I) => J,
    op10: (j: J) => R
  ): (...args: A) => R;
}
