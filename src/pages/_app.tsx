import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Navbar } from '../layouts/Navbar';
import theme from '../theme';
import { DataStoreProvider } from '../context/DataStore';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataStoreProvider>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </DataStoreProvider>
  );
}
