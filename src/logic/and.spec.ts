import { and } from './and';

describe('and', () => {
  it('should create a function that returns whether or not every supplied function returns true', () => {
    const fnA = () => true;
    const fnB = () => true;

    const all = and(fnA, fnB);

    expect(all()).toBe(true);
  });
});
