import { identity } from './identity';

describe('identity', () => {
  it('should return the supplied argument itself', () => {
    const obj = {};

    const result = identity(obj);

    expect(result).toBe(obj);
  });
});
