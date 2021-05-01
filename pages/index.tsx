import styled from 'styled-components';

import Button from '../src/components/lib/Button';
import Features from '../src/components/Features/Features';
import Shortener from '../src/components/Shortener/Shortener';
import Text from '../src/components/lib/Text';

const StyledHeader = styled.header`
  padding-bottom: var(--sizing-6XL);
  text-align: center;
`;

const StyledImg = styled.img`
  max-width: unset;
  padding-left: var(--sizing-LG);
  width: 140vw;
`;

const StyledFigcaption = styled.figcaption`
  font-size: var(--font-size-2XL);
  margin: var(--sizing-LG) 0;
`;

const Container = styled.main`
  --movement: var(--sizing-6XL);

  background: var(--color-violet-light);
  margin-top: var(--movement);
`;

const Home: React.FC = () => {
  return (
    <>
      <StyledHeader>
        <figure>
          <StyledImg
            alt="Working with Shortly"
            src="/images/illustration-working.svg"
          />

          <StyledFigcaption>
            <h2>More than just shorter links</h2>
          </StyledFigcaption>
        </figure>

        <Text>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </Text>

        <Button>Get Started</Button>
      </StyledHeader>
      <Container>
        <Shortener />
        <Features />
      </Container>
    </>
  );
};

export default Home;
