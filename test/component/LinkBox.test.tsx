import { fireEvent, render, screen } from '@testing-library/react';

import LinkBox from '../../src/components/Shortener/LinkBox';

describe('LinkBox', () => {
  it('renders original and a short version of the link', () => {
    render(
      <LinkBox
        link={{ original: 'long_link', short: 'short_link' }}
        selected={false}
        setSelected={jest.fn}
      />
    );

    expect(screen.getByText(/long_link/i)).toBeInTheDocument();
    expect(screen.getByText(/short_link/i)).toBeInTheDocument();
  });

  it('changes the button when is the selected item', () => {
    const { rerender } = render(
      <LinkBox
        link={{ original: 'long_link', short: 'short_link' }}
        selected={false}
        setSelected={jest.fn}
      />
    );
    const button = screen.getByRole('button');

    expect(button.getAttribute('aria-selected')).toBe('false');

    rerender(
      <LinkBox
        link={{ original: 'long_link', short: 'short_link' }}
        selected
        setSelected={jest.fn}
      />
    );

    expect(button.getAttribute('aria-selected')).toBe('true');
  });

  it('selects the current element on click', () => {
    const select = jest.fn();
    const link = { original: 'long_link', short: 'short_link' };

    render(<LinkBox setSelected={select} link={link} selected={false} />);

    fireEvent.click(screen.getByRole('button'));

    expect(select).toBeCalledWith(link);
  });
});
