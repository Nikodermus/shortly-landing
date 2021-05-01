import styled from 'styled-components';
import { SOCIAL_MEDIA } from '../../constants/site';

const StyledDiv = styled.div`
  display: inline-flex;
  gap: var(--sizing-LG);
  margin-top: var(--sizing-3XL);
`;

const SocialMedia: React.FC = () => {
  return (
    <StyledDiv>
      {SOCIAL_MEDIA.map((item) => (
        <a
          href={item.url}
          key={item.url}
          rel="noreferrer noopener nofollow"
          target="_blank"
        >
          <img
            alt={`Follow us on ${item.name}`}
            src={`/images/icon-${item.icon}.svg`}
          />
        </a>
      ))}
    </StyledDiv>
  );
};

export default SocialMedia;
