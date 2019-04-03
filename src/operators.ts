export type Nullary<A> = () => A;
export type Unary<A, B> = (a: A) => B;
export type Binary<A, B, C> = (a: A, b: B) => C;
export type Ternary<A, B, C, D> = (a: A, b: B, c: C) => D;
