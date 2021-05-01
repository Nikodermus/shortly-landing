import customFetch from '../../src/utils/fetch';

describe('customFetch', () => {
  it('resolves the json content directly', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ message: 'Happy dog' }),
        ok: true,
      } as any)
    );

    const data = await customFetch('url');
    expect(data).toEqual({ message: 'Happy dog' });
  });

  it('failes with a not ok status response', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ message: 'Sad dog' }),
      } as any)
    );

    expect(customFetch('url')).rejects.toBeTruthy();
  });

  it('failes in initial load', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('Fake CORS issue')));

    expect(customFetch('url')).rejects.toEqual(new Error('Fake CORS issue'));
  });
});
