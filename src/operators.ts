export type Nullary<A> = () => A;
export type Unary<A, B> = (a: A) => B;
export type Binary<A, B, C> = (a: A, b: B) => C;
export type Ternary<A, B, C, D> = (a: A, b: B, c: C) => D;
export type Quaternary<A, B, C, D, E> = (a: A, b: B, c: C, d: D) => E;
export type Quinary<A, B, C, D, E, F> = (a: A, b: B, c: C, d: D, e: E) => F;
export type Senary<A, B, C, D, E, F, G> = (a: A, b: B, c: C, d: D, e: E, f: F) => G;
export type Septenary<A, B, C, D, E, F, G, H> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H;
export type Octonary<A, B, C, D, E, F, G, H, I> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => I;
export type Novenary<A, B, C, D, E, F, G, H, I, J> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => J;
export type Denary<A, B, C, D, E, F, G, H, I, J, K> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => K;

export type Mapper<T, R> = (item: T, index: number, array: T[]) => R;
export type Predicate<T> = (item: T, index: number, array: T[]) => boolean;
export type Reducer<T, A> = (accumulator: A, item: T, index: number, array: T[]) => A;
export type ReducePredicate<T, A> = (accumulator: A, item: T, index: number, array: T[]) => boolean;
