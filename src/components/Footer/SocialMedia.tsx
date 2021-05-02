import styled, { css } from 'styled-components';

import { mediaDesktop } from '../../utils/styled';
import { SOCIAL_MEDIA } from '../../constants/site';

const StyledDiv = styled.div`
  align-items: flex-start;
  display: inline-flex;
  gap: var(--sizing-LG);
  margin-top: var(--sizing-3XL);

  ${mediaDesktop(css`
    margin-top: 0;
  `)}
`;

const StyledA = styled.a`
  ${mediaDesktop(css`
    &:hover img {
      filter: brightness(0.8) sepia(1) hue-rotate(131deg) saturate(6);
    }
  `)}
`;

const SocialMedia: React.FC = () => {
  return (
    <StyledDiv>
      {SOCIAL_MEDIA.map((item) => (
        <StyledA
          href={item.url}
          key={item.url}
          rel="noreferrer noopener nofollow"
          target="_blank"
        >
          <img
            alt={`Follow us on ${item.name}`}
            src={`/images/icon-${item.icon}.svg`}
          />
        </StyledA>
      ))}
    </StyledDiv>
  );
};

export default SocialMedia;
