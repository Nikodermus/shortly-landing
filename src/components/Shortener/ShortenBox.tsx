import {
  Dispatch,
  FormEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';

import Button from '../lib/Button';
import fetch from '../../utils/fetch';
import Input from '../lib/Input';
import ShortenedLink from '../../types/ShortenedLink.d';

interface ShortenBoxProps {
  setItems: Dispatch<SetStateAction<ShortenedLink[]>>;
}

const StyledForm = styled.form`
  --n-movement: calc(var(--movement) * -1);

  background: url('/images/bg-shorten-mobile.svg'), var(--color-violet);
  background-position: top right;
  background-repeat: no-repeat;
  background-size: 75%;
  border-radius: var(--border-radius-MD);
  margin-bottom: var(--n-movement);
  margin: auto;
  max-width: calc(100% - var(--sizing-3XL));
  padding: var(--sizing-XL);
  transform: translateY(var(--n-movement));
`;

const ShortenBox: React.FC<ShortenBoxProps> = () => {
  const [link, setLink] = useState('');
  const [error, setError] = useState('');

  const test: FormEventHandler = async (e) => {
    e.preventDefault();

    if (!link) {
      setError('Please add a link');
    } else {
      const data = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${encodeURI(link)}`
      );

      console.log(data);
    }
  };

  useEffect(() => {
    setError('');
  }, [link, setError]);

  return (
    <StyledForm name="shortener" onSubmit={test}>
      <Input
        error={error}
        name="link"
        onChange={(e) => setLink(e.target.value)}
        placeholder="Shorten a link here..."
        value={link}
      />

      <Button type="submit" block>
        Shorten It!
      </Button>
    </StyledForm>
  );
};

export default ShortenBox;
