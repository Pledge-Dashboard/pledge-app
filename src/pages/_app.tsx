import type { AppProps } from 'next/app';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { Navbar } from '../layouts/Navbar';
import theme from '../theme';

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
        />
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
