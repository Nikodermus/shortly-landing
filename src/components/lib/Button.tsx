import styled, { css } from 'styled-components';

interface ButtonProps {
  block?: boolean;
}

const Button = styled.button.attrs<ButtonProps>(({ type }) => ({
  type: type || 'button',
}))<ButtonProps>`
  background: var(--color-cyan);
  border-radius: var(--border-radius-XL);
  color: white;
  padding: var(--sizing-MD) var(--sizing-3XL);
  text-align: center;

  ${({ block }) =>
    block
      ? css`
          border-radius: var(--border-radius-SM);
          width: 100%;
        `
      : ''}

  &[disabled] {
    cursor: inherit;
    filter: grayscale(0.35);
    pointer-events: none;
  }

  &:hover:not([disabled]) {
    filter: brightness(1.1);
  }
`;

export default Button;
