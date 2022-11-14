import type { AppProps } from 'next/app';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { Navbar } from '../layouts/Navbar';
import theme from '../theme';
import { DataStoreProvider } from '../context/DataStore';
import { Landing } from '../sections/Landing';
import { Stats } from '../sections/Stats';
import Platforms from '../sections/Platforms';
import LiquidStakingInfo from '../sections/LiquidStakingInfo';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataStoreProvider>
      <ChakraProvider theme={theme}>
        <Box>
          <Navbar />
          {/* <Component {...pageProps} /> */}
          <Landing />
          <Stats />
          <LiquidStakingInfo />
          <Platforms />
        </Box>
      </ChakraProvider>
    </DataStoreProvider>
  );
}
