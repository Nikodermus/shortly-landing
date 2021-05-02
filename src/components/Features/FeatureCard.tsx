import styled, { css } from 'styled-components';

import { mediaDesktop } from '../../utils/styled';
import Card from '../../types/Card.d';
import Text from '../lib/Text';

export interface FeatureCardProps {
  card: Card;
  index: number;
}

const StyledArticle = styled.article<{ index: number }>`
  --line: var(--sizing-6XL);

  background: white;
  border-radius: var(--border-radius-MD);
  margin: auto;
  margin-top: var(--line);
  max-width: var(--box);
  padding-bottom: var(--sizing-LG);
  padding-top: var(--sizing-6XL);
  position: relative;
  z-index: var(--z-index-tap);

  &::after {
    background: var(--color-cyan);
    bottom: 0;
    content: '';
    display: block;
    height: var(--line);
    left: 50%;
    position: absolute;
    transform: translate(-50%, 100%);
    width: var(--tickness);

    ${mediaDesktop(css`
      content: unset;
    `)}
  }

  &:last-of-type::after {
    content: unset;
  }

  ${({ index }) =>
    mediaDesktop(css`
      margin-top: ${`calc(${index} * var(--sizing-3XL))`};
      padding-left: var(--sizing-2XL);
      padding-right: var(--sizing-2XL);

      &::after {
      }
    `)}
`;

const StyledDiv = styled.div`
  --size: 5rem;
  --x: -50%;

  align-items: center;
  background: var(--color-violet);
  border-radius: var(--border-radius-round);
  display: flex;
  height: var(--size);
  justify-content: center;
  left: 50%;
  padding: var(--sizing-LG);
  position: absolute;
  top: 0;
  transform: translate(var(--x), -50%);
  width: var(--size);

  ${mediaDesktop(css`
    --x: 0;

    left: var(--sizing-2XL);
  `)}
`;

const StyledFigcaption = styled.figcaption`
  margin-bottom: var(--sizing-LG);
`;

const FeatureCard: React.FC<FeatureCardProps> = ({ card, index }) => {
  return (
    <StyledArticle index={index}>
      <figure>
        <StyledDiv>
          <img src={`/images/icon-${card.image}.svg`} alt={card.title} />
        </StyledDiv>

        <StyledFigcaption>
          <h3>{card.title}</h3>
        </StyledFigcaption>
      </figure>
      <Text color="gray-violet">{card.content}</Text>
    </StyledArticle>
  );
};

export default FeatureCard;
