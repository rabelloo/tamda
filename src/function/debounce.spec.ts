import { debounce } from './debounce';

describe('debounce', () => {
  it(`should queue function calls and only invoke once
  the specified time has elapsed in silence (no calls)`, async () => {
    let count = 0;
    const increment = debounce(() => count++);

    increment();
    increment();

    expect.assertions(2);
    expect(count).toBe(0);
    await wait();
    expect(count).toBe(1);
  });
});

function wait(time = 0) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
