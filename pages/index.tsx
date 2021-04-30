import styled from 'styled-components';

import Button from '../src/components/lib/Button';
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
  margin-bottom: var(--font-size-LG);
  margin-top: var(--font-size-XL);
`;

const StyledDiv = styled.div`
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
      <StyledDiv>
        <Shortener />
      </StyledDiv>
    </>
  );
};

export default Home;
