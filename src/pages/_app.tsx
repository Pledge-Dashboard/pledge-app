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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      {/* <Component {...pageProps} /> */}
      <Landing />
      <Stats />
      <Box
        h="95vh"
        id="LiquidStaking"
        as="section"
        w="full"
        bg="green.300"
      >
        <Lidoprice />
        <Staderprice />
        <Ankrbprice />
        <Ankrcprice />
        <Tenderizeprice />
      </Box>
      <Box
        h="95vh"
        id="Platforms"
        as="section"
        w="full"
        bg="green.400"
      />
    </ChakraProvider>
  );
}
