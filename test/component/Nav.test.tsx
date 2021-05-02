import { fireEvent, render, screen } from '@testing-library/react';

import Nav from '../../src/components/Nav/Nav';

beforeAll(() => {
  Object.defineProperty(global.window, 'matchMedia', {
    value: () => ({
      matches: false,
    }),
  });
});

describe('Nav', () => {
  it('creates a collapsable menu', () => {
    render(<Nav />);
    expect(
      screen.getByRole('complementary', { hidden: true })
    ).toBeInTheDocument();
  });

  it('dismisses an open menu with a click outside', () => {
    render(<Nav />);
    // Open
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }));

    expect(screen.getByRole('complementary')).toBeInTheDocument();

    // Close
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }));

    expect(
      screen
        .getByRole('complementary', { hidden: true })
        .getAttribute('aria-hidden')
    ).toBe('true');
  });
});
