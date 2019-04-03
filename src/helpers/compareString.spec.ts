import { compareString } from './compareString';

describe('compareString', () => {
  it(`should return 0 when stringA and stringB are equal`, () => {
    const result = compareString('a', 'a');

    expect(result).toBe(0);
  });

  it(`should return 1 when stringA > stringB`, () => {
    const result = compareString('ab', 'aa');

    expect(result).toBe(1);
  });

  it(`should return -1 when stringB > stringA`, () => {
    const result = compareString('ab', 'ac');

    expect(result).toBe(-1);
  });
});
