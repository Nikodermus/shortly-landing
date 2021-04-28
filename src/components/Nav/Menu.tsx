import { Dispatch, SetStateAction, useCallback, useRef } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import Button from '../lib/Button';
import useClickOutside from '../../hooks/useClickOutside';

export interface MenuProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const StyledAside = styled.aside<{ open: boolean }>`
  align-items: center;
  background-color: var(--color-violet);
  border-radius: var(--border-radius-LG);
  color: white;
  display: flex;
  flex-direction: column;
  gap: var(--sizing-LG);
  justify-content: center;
  left: 50%;
  padding: var(--sizing-LG);
  padding-bottom: var(--sizing-XL);
  position: fixed;
  top: 90px;
  transform: translateX(-50%);
  width: calc(100vw - var(--sizing-3XL));

  ${({ open }) =>
    open
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `}

  > * {
    width: 100%;
  }
`;

const StyledA = styled.a`
  padding: var(--sizing-MD) var(--sizing-3XL);
  text-align: center;
`;

const StyledHR = styled.hr`
  border-bottom: 1px solid var(--color-gray-violet);
  border: 0;
  opacity: 0.5;
  width: 100%;
`;

const Menu: React.FC<MenuProps> = ({ open, setOpen }) => {
  const ref = useRef<HTMLDivElement>(null);

  const closeOutside = useCallback(() => {
    if (open) setOpen(false);
  }, [open, setOpen]);

  useClickOutside(ref, closeOutside);

  return (
    <StyledAside open={open} aria-hidden={open ? 'false' : 'true'} ref={ref}>
      <Link href="/">
        <StyledA>Features</StyledA>
      </Link>

      <Link href="/">
        <StyledA>Pricing</StyledA>
      </Link>

      <Link href="/">
        <StyledA>Resources</StyledA>
      </Link>

      <StyledHR />

      <Link href="/">
        <StyledA>Login</StyledA>
      </Link>
      <Button>Sign Up</Button>
    </StyledAside>
  );
};

export default Menu;
