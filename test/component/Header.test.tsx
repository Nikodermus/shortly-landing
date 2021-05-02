import { render, screen } from '@testing-library/react';
import Header from '../../src/components/Header/Header';

describe('Header', () => {
  it('renders without crashing', () => {
    render(<Header />);
    expect(
      screen.getByRole('heading', { name: 'More than just shorter links' })
    ).toBeInTheDocument();
  });
});
