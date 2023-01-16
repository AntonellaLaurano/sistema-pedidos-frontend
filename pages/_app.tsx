import type { AppProps } from 'next/app';
import '../styles/globals.css';
import 'styles/global-tailwind.css';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
          <title>Vigus Lunch</title>
          <meta name="description" content="Vigus Lunch" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
