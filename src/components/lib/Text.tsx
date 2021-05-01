import styled, { css } from 'styled-components';

const Text = styled.p<{ color?: string }>`
  color: var(--color-gray);
  line-height: var(--line-height-LG);
  margin-bottom: var(--sizing-XL);
  padding: 0 var(--sizing-LG);
  text-align: center;

  ${({ color }) =>
    color
      ? css`
          color: ${color};
          color: var(--color-${color});
        `
      : ''}
`;

export default Text;
