import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html
        lang="en"
        style={{ scrollBehavior: 'smooth' }}
      >
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Liquid Staking Derivates on Polygon PoS"
          />
          <link
            rel="icon"
            href="/favicon.ico"
          />
          {/* Meta og tag */}
          <meta
            property="og:title"
            content="Pledge - A MATIC LSD Dashboard"
          />
          <meta
            property="og:description"
            content="Find out the best platform to stake MATIC and earn rewards. Explore Now!!!"
          />
          <meta
            property="og:image"
            content="https://pledge-dashboard.vercel.app/screenshot.png"
          />
          <meta
            property="og:url"
            content="https://pledge-dashboard.vercel.app"
          />
          {/* twitter og tags */}
          <meta
            name="twitter:card"
            content="summary_large_image"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
