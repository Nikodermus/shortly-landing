import styled, { css } from 'styled-components';

import { mediaDesktop } from '../../utils/styled';

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

  ${mediaDesktop(css`
    padding: 0;
    text-align: left;
  `)}
`;

export default Text;
