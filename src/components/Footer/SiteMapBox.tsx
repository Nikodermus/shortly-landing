import Link from 'next/link';
import styled from 'styled-components';
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
`;

const StyledA = styled(Text).attrs({ as: 'a' })`
  margin-bottom: var(--sizing-SM);
`;

const SiteMapBox: React.FC<SiteMapBoxProps> = ({ title, items }) => {
  return (
    <StyledArticle>
      <Text as="h4" color="white">
        {title}
      </Text>

      {items.map((item) => (
        <Link href={item.path}>
          <StyledA>{item.name}</StyledA>
        </Link>
      ))}
    </StyledArticle>
  );
};

export default SiteMapBox;
