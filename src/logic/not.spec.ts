import { not } from './not';

describe('not', () => {
  it(`should create a function that returns the complement of the supplied function's return`, () => {
    const fn = () => false;

    const complement = not(fn);

    expect(complement()).toBe(true);
  });
});
