import styled, { css } from 'styled-components';

import { mediaDesktop } from '../../utils/styled';
import NavActions from './NavActions';
import NavLinks from './NavLinks';

const StyledDiv = styled.div`
  ${mediaDesktop(css`
    align-items: center;
    display: flex;
    flex-direction: row;
    flex: 1 0 auto;
    justify-content: space-between;
    padding-left: var(--sizing-MD);
  `)}
`;

const DesktopMenu: React.FC = () => {
  return (
    <StyledDiv>
      <div>
        <NavLinks />
      </div>

      <div>
        <NavActions />
      </div>
    </StyledDiv>
  );
};

export default DesktopMenu;
