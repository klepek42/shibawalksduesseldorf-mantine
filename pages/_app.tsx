import '@mantine/core/styles.css';

import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { FooterSocial } from '@/components/Footer/FooterSocial';
import { NavigationBar } from '@/components/NavigationBar';
import { theme } from '../theme';
import '@mantine/carousel/styles.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Shibawalks Düsseldorf</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <NavigationBar />
      <Component {...pageProps} />
      <FooterSocial />
    </MantineProvider>
  );
}
