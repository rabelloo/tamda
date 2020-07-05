/**
 * Composes a series of `Unary` operations into a single function.
 *
 * Performs right-to-left function composition.
 *
 * Opposite function composition direction of `pipe`.
 */
export const compose: Compose = <
  Args extends Arr,
  InitOp extends (...args: Args) => unknown,
  FinalOp extends (...args: Args) => Result,
  Result,
  Op extends Unary[]
>(
  ...operators: [FinalOp, ...Op, InitOp]
): ((...start: Args) => Result) => {
  const initOperator = operators.pop() as InitOp;
  return (...start: Args) =>
    operators.reduceRight(
      (previousValue, nextOp) => nextOp(previousValue),
      initOperator(...start)
    ) as Result;
};

type Arr = readonly unknown[];
type Fn = (...args: Arr) => unknown;
type Unary = (arg: unknown) => unknown;

interface Compose {
  /**
   * Composes a series of `Unary` operations into a single function.
   *
   * Performs right-to-left function composition.
   *
   * Opposite function composition direction of `pipe`.
   */
  <Op extends Fn>(operator: Op): Op;

  /**
   * Composes a series of `Unary` operations into a single function.
   *
   * Performs right-to-left function composition.
   *
   * Opposite function composition direction of `pipe`.
   */
  <A extends Arr, B, R>(op2: (b: B) => R, op1: (...args: A) => B): (
    ...args: A
  ) => R;
  /**
   * Composes a series of `Unary` operations into a single function.
   *
   * Performs right-to-left function composition.
   *
   * Opposite function composition direction of `pipe`.
   */
  <A extends Arr, B, C, R>(
    op3: (c: C) => R,
    op2: (b: B) => C,
    op1: (...args: A) => B
  ): (...args: A) => R;
  /**
   * Composes a series of `Unary` operations into a single function.
   *
   * Performs right-to-left function composition.
   *
   * Opposite function composition direction of `pipe`.
   */
  <A extends Arr, B, C, D, R>(
    op4: (d: D) => R,
    op3: (c: C) => D,
    op2: (b: B) => C,
    op1: (...args: A) => B
  ): (...args: A) => R;
  /**
   * Composes a series of `Unary` operations into a single function.
   *
   * Performs right-to-left function composition.
   *
   * Opposite function composition direction of `pipe`.
   */
  <A extends Arr, B, C, D, E, R>(
    op5: (e: E) => R,
    op4: (d: D) => E,
    op3: (c: C) => D,
    op2: (b: B) => C,
    op1: (...args: A) => B
  ): (...args: A) => R;
  /**
   * Composes a series of `Unary` operations into a single function.
   *
   * Performs right-to-left function composition.
   *
   * Opposite function composition direction of `pipe`.
   */
  <A extends Arr, B, C, D, E, F, R>(
    op6: (f: F) => R,
    op5: (e: E) => F,
    op4: (d: D) => E,
    op3: (c: C) => D,
    op2: (b: B) => C,
    op1: (...args: A) => B
  ): (...args: A) => R;
  /**
   * Composes a series of `Unary` operations into a single function.
   *
   * Performs right-to-left function composition.
   *
   * Opposite function composition direction of `pipe`.
   */
  <A extends Arr, B, C, D, E, F, G, R>(
    op7: (g: G) => R,
    op6: (f: F) => G,
    op5: (e: E) => F,
    op4: (d: D) => E,
    op3: (c: C) => D,
    op2: (b: B) => C,
    op1: (...args: A) => B
  ): (...args: A) => R;
  /**
   * Composes a series of `Unary` operations into a single function.
   *
   * Performs right-to-left function composition.
   *
   * Opposite function composition direction of `pipe`.
   */
  <A extends Arr, B, C, D, E, F, G, H, R>(
    op8: (h: H) => R,
    op7: (g: G) => H,
    op6: (f: F) => G,
    op5: (e: E) => F,
    op4: (d: D) => E,
    op3: (c: C) => D,
    op2: (b: B) => C,
    op1: (...args: A) => B
  ): (...args: A) => R;
  /**
   * Composes a series of `Unary` operations into a single function.
   *
   * Performs right-to-left function composition.
   *
   * Opposite function composition direction of `pipe`.
   */
  <A extends Arr, B, C, D, E, F, G, H, I, R>(
    op9: (i: I) => R,
    op8: (h: H) => I,
    op7: (g: G) => H,
    op6: (f: F) => G,
    op5: (e: E) => F,
    op4: (d: D) => E,
    op3: (c: C) => D,
    op2: (b: B) => C,
    op1: (...args: A) => B
  ): (...args: A) => R;
  /**
   * Composes a series of `Unary` operations into a single function.
   *
   * Performs right-to-left function composition.
   *
   * Opposite function composition direction of `pipe`.
   */
  <A extends Arr, B, C, D, E, F, G, H, I, J, R>(
    op10: (j: J) => R,
    op9: (i: I) => J,
    op8: (h: H) => I,
    op7: (g: G) => H,
    op6: (f: F) => G,
    op5: (e: E) => F,
    op4: (d: D) => E,
    op3: (c: C) => D,
    op2: (b: B) => C,
    op1: (...args: A) => B
  ): (...args: A) => R;
}
