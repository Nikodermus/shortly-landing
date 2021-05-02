import { Dispatch, SetStateAction } from 'react';
import styled, { css } from 'styled-components';

import { mediaDesktop, toREM } from '../../utils/styled';
import Button from '../lib/Button';
import ShortenedLink from '../../types/ShortenedLink.d';

export interface LinkBoxProps {
  link: ShortenedLink;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<ShortenedLink | null>>;
}

const StyledArticle = styled.article`
  background: white;
  border-radius: var(--border-radius-MD);
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: var(--sizing-LG);
  max-width: var(--box);
  position: relative;

  ${mediaDesktop(css`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: var(--sizing-XS) var(--sizing-SM);
  `)}
`;

const StyledA = styled.a`
  border-bottom: 1px solid var(--color-violet-light);
  max-width: 100%;
  overflow: hidden;
  padding-top: var(--sizing-LG);
  padding: var(--sizing-MD);
  text-overflow: ellipsis;
  white-space: nowrap;

  ${mediaDesktop(css`
    border-bottom: 0;
  `)}
`;

const StyledDiv = styled.div`
  padding: var(--sizing-MD);

  ${mediaDesktop(css`
    align-items: center;
    display: flex;
    gap: var(--sizing-LG);
    justify-content: flex-end;
  `)}
`;

const StyledShort = styled.p`
  color: var(--color-cyan);
  padding-bottom: var(--sizing-MD);

  ${mediaDesktop(css`
    padding-bottom: 0;
  `)}
`;

const StyledButton = styled(Button)<{ selected: boolean }>`
  ${({ selected }) =>
    selected
      ? css`
          background: var(--color-violet);
        `
      : ''}

  ${mediaDesktop(css`
    width: ${toREM(150)};
  `)}
`;

const LinkBox: React.FC<LinkBoxProps> = ({ link, selected, setSelected }) => {
  return (
    <StyledArticle>
      <StyledA
        href={link.original}
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        {link.original}
      </StyledA>
      <StyledDiv>
        <StyledShort>{link.short}</StyledShort>
        <StyledButton
          aria-selected={selected}
          block
          onClick={() => setSelected(link)}
          selected={selected}
        >
          {selected ? 'Copied!' : 'Copy'}
        </StyledButton>
      </StyledDiv>
    </StyledArticle>
  );
};

export default LinkBox;
