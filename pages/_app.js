import '../src/styles/global.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
  <>
  <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
  </Head>
  <Component {...pageProps} />;

  </> 
  )
}