import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Logo from '../lib/Logo';
import Menu from './Menu';
import Portal from '../lib/Portal';

const StyledNav = styled.nav`
  align-items: center;
  background: white;
  display: flex;
  justify-content: space-between;
  left: 0;
  padding: var(--sizing-2XL) var(--sizing-XL);
  padding-bottom: var(--sizing-LG);
  position: fixed;
  top: 0;
  width: 100vw;
`;

const StyledH1 = styled.h1`
  line-height: 0;
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

  return (
    <>
      <StyledNav>
        <StyledH1>
          <Link href="/">
            <a>
              <Logo aria-label="Shortly" />
            </a>
          </Link>
        </StyledH1>

        <StyledButton
          aria-label="open"
          onClick={() => setOpen((prev) => !prev)}
          open={open}
        >
          <BurgerMenu />
        </StyledButton>
      </StyledNav>

      <Portal>
        <Menu open={open} setOpen={setOpen} />
      </Portal>
    </>
  );
};

export default Nav;
