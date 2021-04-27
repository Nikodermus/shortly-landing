import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import BaseStyle from '../src/components/style/BaseStyle';

import 'normalize.css/normalize.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <BaseStyle />

      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default App;
