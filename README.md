# Tamda ~ [![Build Status](https://img.shields.io/travis/rabelloo/tamda.svg?logo=travis)](https://travis-ci.org/rabelloo/tamda) [![Coverage Status](https://codecov.io/gh/rabelloo/tamda/branch/master/graph/badge.svg)](https://codecov.io/gh/rabelloo/tamda) [![npm version](https://img.shields.io/npm/v/tamda.svg?logo=npm)](https://www.npmjs.com/package/tamda) [![dependencies](https://img.shields.io/david/rabelloo/tamda.svg)](https://david-dm.org/rabelloo/tamda)

Practical functional programming library for TypeScript

## Goal

Other functional programming languages either lack TypeScript support - or has it very shallowly, or dive too deep into functional programming with mandatory data structures such as Functors and Monads.

Tamda aims to address these issues:

- TypeScript is a first-class citizen
- Low friction API - intuitive to use and easy to understand
- No specialized data structures - just plain objects and primitives

The entire Tamda API revolves around pure functions: input/output.

All of them are exported separately so that they can be tree-shaken, but they can all be imported from index, e.g. `import { <fn> } from 'tamda'`.

## Similarities

Like the name suggests, Tamda borrows much from [Ramda](https://github.com/ramda/ramda), but also from [lodash](https://github.com/lodash/lodash) and [underscore](https://github.com/jashkenas/underscore), and the functional programming paradigm in general.

Most functions share names and sometimes arguments, but implementation may differ wildly as all were built from scratch.

Tamda is also just a bunch of functions, as specified earlier, there are no specialized data structures.

## Differences

The major one is that it's built with and for TypeScript, hence the API design had to accomodate related expectations and the implementation to workaround some intrinsic complexities.

For example, most functions that would take the data argument as the last parameter instead take it as first so that TypeScript can infer the object's type, e.g. `map(array, i => {})`.

However, all functions have an overload where the data argument is provided last so that it's easily composable, in a way that would be called "curried" in `Ramda`, but perhaps more accurately is just a "partially applied function", e.g. `map (i => {}) (array)`.

Since the idea of using TypeScript is actually benefiting from type safety and inference, having these two overloads for each function makes using them stand-alone or when composing/piping a breeze, especially when TypeScript will be giving you all hints.

Some functions have limitations on how much TypeScript can infer and may require some hinting - the API tries to make that as easy as possible, but the vast majority *just works*.

It also means that functions are not "automatically curried" like in `Ramda`, where any number of arguments can be provided and the function will partially apply accordingly.

## Usage

### Standalone function

```typescript
import { groupBy } from 'tamda';

const data = [
  { type: 'functional', name: 'groupBy' },
  { type: 'functional', name: 'map' },
  { type: 'imperative', name: 'for' },
];

groupBy(data, d => d.type);
// {
//   functional: [
//     { type: 'functional', name: 'groupBy' },
//     { type: 'functional', name: 'map' },
//   ],
//   imperative: [
//     { type: 'imperative', name: 'for' },
//   ],
// }
```

### Compose/pipe

Both achieve the same thing, the difference is that `compose` is right-to-left and `pipe` is left-to-right.

If you're used to imperative, in general `pipe` feels more natural.

```typescript
import { filter, map, pipe, sum, unique } from 'tamda';

const data = [1, 1, 2, 3, 4, 5, 5];

const doubleSumUniqueOdds = pipe(
  //         vvvvvv    needs a type hint here
  filter((n: number) => n % 2),
  unique(),
  sum(),
  map(n => n * 2) // infers the rest
);

doubleSumUniqueOdds(data);
// 18
```

You can also inline pipe execution with `use`, which will infer the type beforehand and immediately invoke `pipe` or `compose` when either is called.

```typescript
import { not, pluck, reduceWhile, tap, union, use } from 'tamda';

const data = [
  { amount: 3 },
  { amount: 5 },
  { amount: 3 },
];

const moreData = [
  { amount: 4 },
  { amount: 2 },
  { amount: 8 },
];

const hasEnough = (total: number) => total > 10;
const accumulate = pipe(
  tap(console.log),
  (total: number, amount: number) => total + amount
);

use(data).pipe(
  union(moreData, d => d.amount),
  pluck('amount'), // same as  map(prop('amount'))
  reduceWhile(not(hasEnough), accumulate, 0)
);
// 0, 3, ...
// 3, 5, ...
// 8, 4, ...
// 8
```
