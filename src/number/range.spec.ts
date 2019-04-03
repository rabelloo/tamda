import { range } from './range';

describe('range', () => {
  it('should an array of incremental numbers ranging from min to max', () => {
    const result = range(1, 5);

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
