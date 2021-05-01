import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { LOCALSTORAGE_KEY } from '../../constants/site';
import copyToClipboard from '../../utils/copy';
import LinkBox from './LinkBox';
import ShortenBox from './ShortenBox';
import ShortenedLink from '../../types/ShortenedLink.d';

const StyledSection = styled.section`
  padding-bottom: var(--sizing-6XL);
`;

const Shortener: React.FC = () => {
  const [items, setItems] = useState<ShortenedLink[]>([]);
  const [selected, setSelected] = useState<ShortenedLink | null>(null);

  useEffect(() => {
    const value = localStorage.getItem(LOCALSTORAGE_KEY);
    if (value) setItems(JSON.parse(value));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (selected) {
      copyToClipboard(selected.short);
    }
  }, [selected]);

  return (
    <StyledSection>
      <ShortenBox setItems={setItems} />

      {items?.map((link) => (
        <LinkBox
          key={link.short}
          link={link}
          selected={selected?.short === link.short}
          setSelected={setSelected}
        />
      ))}
    </StyledSection>
  );
};

export default Shortener;
