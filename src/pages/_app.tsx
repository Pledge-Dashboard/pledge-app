import type { AppProps } from 'next/app';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { Navbar } from '../layouts/Navbar';
import theme from '../theme';
import Lidoprice from '../data/lidoapi/lidoprice';
import Staderprice from '../data/stader/staderapi';
import Ankrbprice from '../data/ankr/abankrprice';
import Ankrcprice from '../data/ankr/acankrprice';
import Tenderizeprice from '../data/tenderize/tenderizeprice';
import { Landing } from '../sections/Landing';
import { Stats } from '../sections/Stats';
import { Here } from '../sections/Here';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      {/* <Component {...pageProps} /> */}
      <Landing />
      <Stats />
      <Here />
    </ChakraProvider>
  );
}
