import styled from 'styled-components';

import { CARDS } from '../../constants/site';
import FeatureCard from './FeatureCard';
import FeaturesCTA from './FeaturesCTA';
import Text from '../lib/Text';

const StyledH2 = styled.h2`
  margin-bottom: var(--sizing-XL);
`;

const Features: React.FC = () => {
  return (
    <section>
      <StyledH2>Advanced Statistics</StyledH2>
      <Text color="gray-violet">
        Track how your link are performing across teh web with out advanced
        statistics dashboard
      </Text>

      {CARDS.map((card) => (
        <FeatureCard card={card} key={card.title} />
      ))}

      <div>
        <FeaturesCTA />
      </div>
    </section>
  );
};

export default Features;
