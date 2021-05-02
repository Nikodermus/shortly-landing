import { Dispatch, SetStateAction, useCallback, useRef } from 'react';
import styled, { css } from 'styled-components';

import NavActions from './NavActions';
import NavLinks from './NavLinks';
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
  z-index: var(--z-index-modal);

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

const StyledHR = styled.hr`
  border: 0;
  border-bottom: 1px solid var(--color-gray-violet);
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
    <StyledAside
      aria-expanded={open ? 'true' : 'false'}
      aria-hidden={open ? 'false' : 'true'}
      aria-label="menu"
      open={open}
      ref={ref}
    >
      <NavLinks />
      <StyledHR />
      <NavActions />
    </StyledAside>
  );
};

export default Menu;
