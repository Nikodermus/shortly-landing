import { useState } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import { mediaDesktop } from '../../utils/styled';
import DesktopMenu from './DesktopMenu';
import Logo from '../lib/Logo';
import Menu from './Menu';
import Portal from '../lib/Portal';
import useScreenType from '../../hooks/useScreenType';

const StyledNav = styled.nav`
  background: white;
  left: 0;
  padding: var(--sizing-2XL) var(--sizing-XL);
  padding-bottom: var(--sizing-LG);
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: var(--z-index-nav);

  ${mediaDesktop(css`
    position: absolute;
  `)}
`;

const StyledH1 = styled.h1`
  line-height: 0;
`;

const NavContainer = styled.div`
  ${mediaDesktop(css`
    align-items: center;
    border-bottom: 0;
    display: flex;
    margin: auto;
    width: var(--box);
  `)}
`;

const StyledButton = styled.button<{ open: boolean }>`
  --background: var(--color-gray-violet);
  --height: 4px;
  --width: var(--sizing-XL);

  background: transparent;
  height: var(--sizing-LG);
  position: relative;
  width: var(--width);

  pointer-events: ${({ open }) => (open ? 'none' : 'auto')};
`;

const BurgerMenu = styled.span`
  background: var(--background);
  display: block;
  height: var(--height);
  width: var(--width);

  &::after,
  &::before {
    background: var(--background);
    content: '';
    display: block;
    height: var(--height);
    left: 0;
    position: absolute;
    width: 100%;
  }

  &::after {
    top: 0;
  }

  &::before {
    bottom: 0;
  }
`;

const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { isMobile } = useScreenType();

  return (
    <>
      <StyledNav>
        <NavContainer>
          <StyledH1>
            <Link href="/">
              <a>
                <Logo aria-label="Shortly" />
              </a>
            </Link>
          </StyledH1>

          {isMobile ? (
            <StyledButton
              aria-label="open menu"
              onClick={() => setOpen((prev) => !prev)}
              open={open}
            >
              <BurgerMenu role="presentation" />
            </StyledButton>
          ) : (
            <DesktopMenu />
          )}
        </NavContainer>
      </StyledNav>

      {isMobile && (
        <Portal>
          <Menu open={open} setOpen={setOpen} />
        </Portal>
      )}
    </>
  );
};

export default Nav;
