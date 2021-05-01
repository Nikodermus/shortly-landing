import styled from 'styled-components';
import { CARDS } from '../../constants/site';
import Text from '../lib/Text';
import FeatureCard from './FeatureCard';

const StyledSection = styled.section`
  padding-bottom: var(--sizing-6XL);
`;

const StyledH2 = styled.h2`
  margin-bottom: var(--sizing-XL);
`;

const Features: React.FC = () => {
  return (
    <StyledSection>
      <StyledH2>Advanced Statistics</StyledH2>
      <Text color="gray-violet">
        Track how your link are performing across teh web with out advanced
        statistics dashboard
      </Text>

      {CARDS.map((card) => (
        <FeatureCard card={card} key={card.title} />
      ))}
    </StyledSection>
  );
};

export default Features;
