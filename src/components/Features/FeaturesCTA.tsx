import styled, { css } from 'styled-components';

import { mediaDesktop } from '../../utils/styled';
import Button from '../lib/Button';
import Text from '../lib/Text';

const StyledArticle = styled.article`
  --url: url('/images/bg-boost-mobile.svg');

  background: var(--url), var(--color-violet);
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  margin-top: var(--sizing-6XL);
  padding: var(--sizing-6XL) 0;
  text-align: center;

  ${mediaDesktop(css`
    --url: url('/images/bg-boost-desktop.svg');

    align-items: center;
    border-bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `)}
`;

const FeaturesCTA: React.FC = () => {
  return (
    <StyledArticle>
      <Text as="h2" color="white">
        Boost your links today
      </Text>
      <Button> Get Started </Button>
    </StyledArticle>
  );
};

export default FeaturesCTA;
