import styled from 'styled-components';

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

const StyledLogo = styled(Logo)`
  path {
    fill: white;
  }
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <StyledLogo aria-label="Shortly" />

      {SITE_MAP.map((site) => (
        <SiteMapBox {...site} />
      ))}

      <SocialMedia />
    </StyledFooter>
  );
};

export default Footer;
