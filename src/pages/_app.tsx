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
        px={{ base: 4, md: 16, lg: 32 }}
      >
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
