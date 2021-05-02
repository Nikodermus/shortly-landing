import styled, { css } from 'styled-components';

import { CARDS } from '../../constants/site';
import { mediaDesktop } from '../../utils/styled';
import FeatureCard from './FeatureCard';
import FeaturesCTA from './FeaturesCTA';
import Text from '../lib/Text';

const StyledH2 = styled.h2`
  margin-bottom: var(--sizing-XL);

  ${mediaDesktop(css`
    font-size: var(--font-size-3XL);
    white-space: nowrap;
  `)}
`;

const StyledDiv = styled.div`
  ${mediaDesktop(css`
    margin: var(--sizing-4XL) auto;
    max-width: 40vw;
    padding-bottom: var(--sizing-3XL);
    text-align: center;

    * {
      text-align: center;
    }
  `)}
`;

const CardsContainer = styled.div`
  --tickness: var(--sizing-SM);

  ${mediaDesktop(css`
    display: flex;
    gap: var(--sizing-XL);
    margin: auto;
    position: relative;
    width: var(--box);

    &::before {
      background: var(--color-cyan);
      content: '';
      height: var(--tickness);
      left: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      z-index: 0;
    }
  `)}
`;

const Features: React.FC = () => {
  return (
    <section>
      <StyledDiv>
        <StyledH2>Advanced Statistics</StyledH2>
        <Text color="gray-violet">
          Track how your link are performing across teh web with out advanced
          statistics dashboard
        </Text>
      </StyledDiv>

      <CardsContainer>
        {CARDS.map((card, index) => (
          <FeatureCard card={card} key={card.title} index={index} />
        ))}
      </CardsContainer>

      <div>
        <FeaturesCTA />
      </div>
    </section>
  );
};

export default Features;
