import styled, { css } from 'styled-components';

import { mediaDesktop } from '../../utils/styled';
import { SITE_MAP } from '../../constants/site';
import Logo from '../lib/Logo';
import SiteMapBox from './SiteMapBox';
import SocialMedia from './SocialMedia';

const StyledFooter = styled.footer`
  background: var(--color-violet-dark);
  color: white;
  padding: var(--sizing-4XL);
  text-align: center;
`;

const Container = styled.div`
  ${mediaDesktop(css`
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: var(--box);
  `)}
`;

const StyledLogo = styled(Logo)`
  path {
    fill: white;
  }
`;

const RightContainer = styled.div`
  ${mediaDesktop(css`
    display: flex;
    gap: var(--sizing-6XL);
    justify-content: flex-end;
    width: var(--box);
  `)}
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledLogo aria-label="Shortly" />

        <RightContainer>
          {SITE_MAP.map((site) => (
            <SiteMapBox key={site.title} {...site} />
          ))}

          <SocialMedia />
        </RightContainer>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
