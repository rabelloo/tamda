/**
 * Creates a clone function that can infer the call readiness state of `fn` according to `ready`.
 *
 * When called, if `ready(...args)`, immediately invokes `fn`.
 *
 * Otherwise, returns a `partialRight` applied function that expects the first argument of `fn`.
 *
 * @param fn Function to infer.
 *
 * @param ready Optionally determine when a function is ready for execution.
 * Default `args.length >= fn.length`.
 *
 * @example
 * const map = (array, fn) => array.map(fn);
 * const inferredMap = infer(map);
 * inferredMap([1, 2, 3], n => n + 1);
 * // [2, 3, 4]
 * inferredMap (n => n + 1) ([1, 2, 3]);
 * // [2, 3, 4]
 */
export function infer<FirstArg, TailArgs extends Arr, Result>(
  fn: (...args: [FirstArg, ...TailArgs]) => Result,
  ready = isReady<FirstArg, TailArgs>(fn)
): Inferred<FirstArg, TailArgs, Result> {
  return ((...args: [FirstArg, ...TailArgs] | TailArgs) =>
    ready(args)
      ? fn(...args)
      : (firstArg: FirstArg) => fn(firstArg, ...args)) as any;
}

const isReady = <FirstArg, TailArgs extends Arr>(fn: Func) => (
  args: [FirstArg, ...TailArgs] | TailArgs
): args is [FirstArg, ...TailArgs] => args.length >= fn.length;

type Arr = readonly unknown[];
type Func = (...args: Arr) => unknown;

type Inferred<F, T extends Arr, R> = ReadyFn<F, T, R> & PartialFn<F, T, R>;

type ReadyFn<F, T extends Arr, R> = (firstArg: F, ...tailArgs: T) => R;
type PartialFn<F, T extends Arr, R> = (...tailArgs: T) => (firstArg: F) => R;
