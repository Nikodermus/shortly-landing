import copyToClipboard from '../../src/utils/copy';

describe('copyToClipboard', () => {
  it('copies a given text using a fallback', () => {
    document.execCommand = jest.fn();
    copyToClipboard('yellow blue and red');

    expect(document.execCommand).toHaveBeenCalledWith('copy');
  });

  it('copies a value using the Navigator API', () => {
    // Mock Navigator in Node
    Object.defineProperty(global.navigator, 'clipboard', {
      value: {
        writeText: jest.fn(),
      },
    });

    copyToClipboard('yellow blue and red');

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      'yellow blue and red'
    );
  });
});
