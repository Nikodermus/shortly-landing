import styled from 'styled-components';
import Card from '../../types/Card.d';
import Text from '../lib/Text';

export interface FeatureCardProps {
  card: Card;
}

const StyledArticle = styled.article`
  --line: var(--sizing-6XL);

  background: white;
  border-radius: var(--border-radius-MD);
  margin: auto;
  margin-top: var(--line);
  max-width: calc(100% - var(--sizing-3XL));
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
    width: var(--sizing-SM);
  }

  &:last-of-type::after {
    content: unset;
  }
`;

const StyledDiv = styled.div`
  --size: 5rem;

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
  transform: translate(-50%, -50%);
  width: var(--size);
`;

const StyledFigcaption = styled.figcaption`
  margin-bottom: var(--sizing-LG);
`;

const FeatureCard: React.FC<FeatureCardProps> = ({ card }) => {
  return (
    <StyledArticle>
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
