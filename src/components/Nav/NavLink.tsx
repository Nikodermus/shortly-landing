import styled, { css } from 'styled-components';

import { mediaDesktop } from '../../utils/styled';

const NavLink = styled.a`
  padding: var(--sizing-MD) var(--sizing-3XL);
  text-align: center;

  ${mediaDesktop(css`
    color: var(--color-gray);
    padding: var(--sizing-XL);
  `)}
`;

export default NavLink;
