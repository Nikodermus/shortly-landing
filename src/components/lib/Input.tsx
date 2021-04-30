import styled, { css } from 'styled-components';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const StyledInput = styled.input<InputProps>`
  background: white;
  border-radius: var(--border-radius-SM);
  border: var(--sizing-XS) solid transparent;
  color: var(--color-gray);
  margin-bottom: var(--sizing-LG);
  max-width: 100%;
  outline: 0;
  padding: var(--sizing-SM) var(--sizing-MD);

  &:focus {
    border-color: var(--color-cyan);
  }

  &:invalid {
    border-color: var(--color-red);
  }

  ${(p) =>
    p.error
      ? css`
          border-color: var(--color-red);
          margin-bottom: var(--sizing-XS);

          &::placeholder {
            color: var(--color-red);
          }
        `
      : ''}
`;

const StyledSpan = styled.span`
  color: var(--color-red);
  display: block;
  font-size: var(--font-size-XS);
  margin-bottom: var(--sizing-LG);
`;

const Input: React.FC<InputProps> = ({ error, ...props }) => {
  return (
    <>
      <StyledInput {...props} error={error} />
      {error && <StyledSpan>{error}</StyledSpan>}
    </>
  );
};

export default Input;
