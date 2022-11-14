import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Navbar } from '../layouts/Navbar';
import theme from '../theme';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    (async () => {
      const results = await fetch('/api/current/').then((response) => response.json());
      console.log(results);
    })();
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
