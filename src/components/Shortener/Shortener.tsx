import { useEffect, useState } from 'react';

import LinkBox from './LinkBox';
import ShortenBox from './ShortenBox';
import ShortenedLink from '../../types/ShortenedLink.d';

const KEY = 'shortly';

const Shortener: React.FC = () => {
  const [items, setItems] = useState<ShortenedLink[]>([]);

  useEffect(() => {
    const value = localStorage.getItem(KEY);
    if (value) setItems(JSON.parse(value));
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(items));
  }, [items]);

  return (
    <main>
      <ShortenBox setItems={setItems} />

      {items?.map((link) => (
        <LinkBox key={link.original} link={link} />
      ))}
    </main>
  );
};

export default Shortener;
