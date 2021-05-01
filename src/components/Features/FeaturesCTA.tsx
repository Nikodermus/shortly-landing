import styled from 'styled-components';
import Button from '../lib/Button';
import Text from '../lib/Text';

const StyledArticle = styled.article`
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
  background: url('/images/bg-boost-mobile.svg'), var(--color-violet);
  color: white;
  margin-top: var(--sizing-6XL);
  padding: var(--sizing-6XL) 0;
  text-align: center;
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
