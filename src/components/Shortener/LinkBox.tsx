import { Dispatch, SetStateAction } from 'react';
import styled, { css } from 'styled-components';

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
  margin-top: var(--sizing-LG);
  margin: auto;
  max-width: calc(100% - var(--sizing-3XL));
  position: relative;
`;

const StyledP = styled.p`
  border-bottom: 1px solid var(--color-violet-light);
  max-width: 100%;
  overflow: hidden;
  padding-top: var(--sizing-LG);
  padding: var(--sizing-MD);
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledDiv = styled.div`
  padding: var(--sizing-MD);
`;

const StyledShort = styled.p`
  color: var(--color-cyan);
  padding-bottom: var(--sizing-MD);
`;

const StyledButton = styled(Button)<{ selected: boolean }>`
  ${({ selected }) =>
    selected
      ? css`
          background: var(--color-violet);
        `
      : ''}
`;

const LinkBox: React.FC<LinkBoxProps> = ({ link, selected, setSelected }) => {
  return (
    <StyledArticle>
      <StyledP>{link.original}</StyledP>
      <StyledDiv>
        <StyledShort>{link.short}</StyledShort>
        <StyledButton
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
