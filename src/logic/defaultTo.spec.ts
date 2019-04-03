import { defaultTo } from './defaultTo';

describe('defaultTo', () => {
  it('should return the result itself when not null, undefined or NaN', () => {
    const withDefault = defaultTo(1);

    expect(withDefault(2)).toBe(2);
  });

  it('should return the supplied argument when null, undefined or NaN', () => {
    const withDefault = defaultTo(1);

    expect(withDefault(undefined)).toBe(1);
    expect(withDefault(null)).toBe(1);
    expect(withDefault(NaN)).toBe(1);
  });
});
