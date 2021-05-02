import Link from 'next/link';

import styled, { css } from 'styled-components';
import { mediaDesktop } from '../../utils/styled';
import Text from '../lib/Text';

export interface SiteMapBoxProps {
  title: string;
  items: {
    name: string;
    path: string;
  }[];
}

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  padding-top: var(--sizing-XL);

  ${mediaDesktop(css`
    padding-top: 0;
  `)}
`;

const StyledA = styled(Text).attrs({ as: 'a' })`
  margin-bottom: var(--sizing-SM);

  &:hover {
    color: var(--color-cyan);
  }
`;

const StyledText = styled(Text)`
  ${mediaDesktop(css`
    font-size: var(--font-size-MD);
  `)}
`;

const SiteMapBox: React.FC<SiteMapBoxProps> = ({ title, items }) => {
  return (
    <StyledArticle>
      <StyledText as="h4" color="white">
        {title}
      </StyledText>

      {items.map((item) => (
        <Link key={item.path} href={item.path}>
          <StyledA>{item.name}</StyledA>
        </Link>
      ))}
    </StyledArticle>
  );
};

export default SiteMapBox;
