import {
  Dispatch,
  FormEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import styled, { css, keyframes } from 'styled-components';

import { MAX_LINKS } from '../../constants/site';
import Button from '../lib/Button';
import fetch from '../../utils/fetch';
import Input from '../lib/Input';
import ShortenedLink from '../../types/ShortenedLink.d';

interface ShortenBoxProps {
  setItems: Dispatch<SetStateAction<ShortenedLink[]>>;
}

const shimmer = keyframes`
  0% { left: -100% }
  100% { left: 100% }
`;

const StyledForm = styled.form<{ isLoading: boolean }>`
  --n-movement: calc(var(--movement) * -1);

  background: url('/images/bg-shorten-mobile.svg'), var(--color-violet);
  background-position: top right;
  background-repeat: no-repeat;
  background-size: 75%;
  border-radius: var(--border-radius-MD);
  margin: auto;
  margin-bottom: var(--n-movement);
  max-width: var(--box);
  padding: var(--sizing-XL);
  position: relative;
  transform: translateY(var(--n-movement));

  ${({ isLoading }) =>
    isLoading
      ? css`
          *,
          & {
            cursor: wait;
          }
        `
      : ''}

  &::after {
    animation: ${shimmer} 1.5s linear infinite paused;
    background: white;
    bottom: 0;
    content: '';
    display: block;
    height: var(--sizing-XS);
    opacity: 0;
    position: absolute;
    width: 100%;

    ${({ isLoading }) =>
      isLoading
        ? css`
            animation-play-state: running;
            opacity: 0.3;
          `
        : ''}
  }
`;

interface ShortenerResponse {
  result: {
    original_link: string;
    short_link: string;
  };
}

const ShortenBox: React.FC<ShortenBoxProps> = ({ setItems }) => {
  const [link, setLink] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const test: FormEventHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!link) {
      setError('Please add a link');
    } else {
      try {
        const data = await fetch<ShortenerResponse>(
          `https://api.shrtco.de/v2/shorten?url=${encodeURI(link)}`
        );

        const item = {
          original: data.result.original_link as string,
          short: data.result.short_link as string,
        };

        setItems((prev) => {
          const newItems = [item, ...prev];

          newItems.length = Math.min(newItems.length, MAX_LINKS);

          return newItems;
        });
        setLink('');
      } catch (resError) {
        setError(resError.message);
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    setError('');
  }, [link, setError]);

  return (
    <StyledForm name="shortener" onSubmit={test} isLoading={loading}>
      <Input
        error={error}
        name="link"
        onChange={(e) => setLink(e.target.value)}
        placeholder="Shorten a link here..."
        readOnly={loading}
        value={link}
      />

      <Button type="submit" block disabled={loading}>
        Shorten It!
      </Button>
    </StyledForm>
  );
};

export default ShortenBox;
