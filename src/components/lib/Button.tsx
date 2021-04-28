import styled from 'styled-components';

const Button = styled.button.attrs({
  type: 'button',
})`
  background: var(--color-cyan);
  border-radius: var(--border-radius-XL);
  color: white;
  padding: var(--sizing-MD) var(--sizing-3XL);
  text-align: center;
`;

export default Button;
