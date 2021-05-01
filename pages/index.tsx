import Head from 'next/head';
import styled from 'styled-components';

import Features from '../src/components/Features/Features';
import Header from '../src/components/Header/Header';
import Shortener from '../src/components/Shortener/Shortener';

const Container = styled.main`
  --movement: var(--sizing-6XL);

  background: var(--color-violet-light);
  margin-top: var(--movement);
`;

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Shortly - More than just shorter links</title>
      </Head>

      <Header />

      <Container>
        <Shortener />
        <Features />
      </Container>
    </>
  );
};

export default Home;
