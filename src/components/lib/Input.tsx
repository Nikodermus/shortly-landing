import styled, { css } from 'styled-components';

import { mediaDesktop } from '../../utils/styled';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const StyledInput = styled.input<InputProps>`
  background: white;
  border-radius: var(--border-radius-SM);
  border: var(--sizing-XS) solid transparent;
  color: var(--color-violet-darkest);
  margin-bottom: var(--sizing-LG);
  width: 100%;
  outline: 0;
  padding: var(--sizing-SM) var(--sizing-MD);

  &:focus:not([readonly]) {
    border-color: var(--color-cyan);
  }

  &:invalid:not([readonly]) {
    border-color: var(--color-red);
  }

  ${(p) =>
    p.error
      ? css`
          &:not([readonly]) {
            border-color: var(--color-red);
            margin-bottom: var(--sizing-XS);

            ${mediaDesktop(css`
              margin-bottom: 0;
            `)}

            &::placeholder {
              color: var(--color-red);
            }
          }
        `
      : ''}
`;

const StyledSpan = styled.span`
  color: var(--color-red);
  display: block;
  font-size: var(--font-size-XS);
  margin-bottom: var(--sizing-LG);

  ${mediaDesktop(css`
    bottom: 0;
    left: 0;
    position: absolute;
    transform: translateY(calc(100% + var(--sizing-XL)));
  `)}
`;

const StyledDiv = styled.div`
  position: relative;
`;

const Input: React.FC<InputProps> = ({ error, ...props }) => {
  return (
    <StyledDiv>
      <StyledInput {...props} error={error} />
      {error && <StyledSpan>{error}</StyledSpan>}
    </StyledDiv>
  );
};

export default Input;
