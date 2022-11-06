import type { AppProps } from 'next/app';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { Navbar } from '../layouts/Navbar';
import theme from '../theme';
import Lidoprice from '../data/lidoapi/lidoprice';
import Staderprice from '../data/stader/staderapi';
import Ankrbprice from '../data/ankr/abankrprice';
import Ankrcprice from '../data/ankr/acankrprice';
import Tenderizeprice from '../data/tenderize/tenderizeprice';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box
        mt={24}
        scrollBehavior="smooth"
      >
        {/* <Component {...pageProps} /> */}
        <Box
          h="95vh"
          id="Landing"
          as="section"
          w="full"
          bg="green.100"
        >
          <Lidoprice />
          <Staderprice />
          <Ankrbprice />
          <Ankrcprice />
          <Tenderizeprice />
        </Box>
        <Box
          h="95vh"
          id="Statistics"
          as="section"
          w="full"
          bg="green.200"
        />
        <Box
          h="95vh"
          id="LiquidStaking"
          as="section"
          w="full"
          bg="green.300"
        />
        <Box
          h="95vh"
          id="Platforms"
          as="section"
          w="full"
          bg="green.400"
        />
      </Box>
    </ChakraProvider>
  );
}
