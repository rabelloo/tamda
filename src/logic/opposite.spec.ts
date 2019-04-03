import { opposite } from './opposite';

describe('opposite', () => {
  it(`should create a function that returns the opposite of the supplied function's return (i.e. * -1)`, () => {
    const fn = () => 1;

    const negate = opposite(fn);

    expect(negate()).toBe(-1);
  });
});
