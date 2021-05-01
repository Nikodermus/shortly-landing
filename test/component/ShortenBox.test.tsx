import { fireEvent, render, screen } from '@testing-library/react';

import ShortenBox from '../../src/components/Shortener/ShortenBox';

describe('ShortenBox', () => {
  it('errors when no link is provided', () => {
    render(<ShortenBox setItems={jest.fn} />);
    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByText(/add a link/i)).toBeInTheDocument();
  });

  it('enters in loading state when submitting a link', () => {
    render(<ShortenBox setItems={jest.fn} />);
    const input = screen.getByRole('textbox');
    const submit = screen.getByRole('button');

    fireEvent.change(input, { target: { value: 'https://finn.auto/' } });
    fireEvent.click(submit);

    expect(input).toHaveAttribute('readonly');
    expect(submit).toHaveAttribute('disabled');
  });
});
