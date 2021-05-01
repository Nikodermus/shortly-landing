import styled, { css } from 'styled-components';

import { mediaDesktop } from '../../utils/styled';
import Button from '../lib/Button';
import Text from '../lib/Text';

const StyledHeader = styled.header`
  padding-bottom: var(--sizing-6XL);
  text-align: center;

  ${mediaDesktop(css`
    align-items: center;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    margin: auto;
    min-height: 60vh;
    text-align: left;
    width: var(--box);
  `)}
`;

const StyledImg = styled.img`
  max-width: unset;
  padding-left: var(--sizing-LG);
  width: 140vw;

  ${mediaDesktop(css`
    bottom: 0;
    left: 0;
    position: absolute;
    transform: translateY(50%);
    width: auto;
  `)}
`;

const StyledFigcaption = styled.figcaption`
  font-size: var(--font-size-2XL);
  margin: var(--sizing-LG) 0;

  ${mediaDesktop(css`
    font-size: var(--font-size-5XL);
  `)}
`;

const StyledDiv = styled.div`
  flex: 0 0 60%;
`;

const StyledFigure = styled.figure`
  flex: 0 1 10px;
  position: relative;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledFigure>
        <StyledImg
          alt="Working with Shortly"
          src="/images/illustration-working.svg"
        />
      </StyledFigure>

      <StyledDiv>
        <StyledFigcaption>
          <h2>More than just shorter links</h2>
        </StyledFigcaption>

        <Text>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </Text>

        <Button>Get Started</Button>
      </StyledDiv>
    </StyledHeader>
  );
};

export default Header;
