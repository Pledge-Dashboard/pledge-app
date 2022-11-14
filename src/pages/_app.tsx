import type { AppProps } from 'next/app';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { Navbar } from '../layouts/Navbar';
import theme from '../theme';
import { DataStoreProvider } from '../context/DataStore';
import { Landing } from '../sections/Landing';
import { Stats } from '../sections/Stats';
import Platforms from '../sections/Platforms';
import LiquidStakingInfo from '../sections/LiquidStakingInfo';
import CssDoodle from '../components/CssDoodle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataStoreProvider>
      <ChakraProvider theme={theme}>
        <Box pos="relative">
          <Navbar />
          {/* <Component {...pageProps} /> */}
          <CssDoodle
            position="absolute"
            top="32"
            left="-24"
            transform="translate(0%, 50%)"
            zIndex={-1}
            h="64"
            w="64"
            doodle={`
              <css-doodle grid="10">
                :doodle {
                  width: 100%; 
                  height: 100%;
                  grid-gap: 20px;
                  border-radius: 50px;
                }
                border-radius: 50px;

                --alpha: calc(@abs(@abs(@row - 5) + @abs(@col - 5) - 13) / 8);
                will-change: transform;
                transform: rotate(15deg) scale(var(--alpha));
                background: #60569e;
              </css-doodle>`}
          />
          <CssDoodle
            position="absolute"
            top="0rem"
            right="-90rem"
            transform="rotate(-10deg)"
            h="100rem"
            w="100rem"
            doodle={`
              <css-doodle grid="45">
                :doodle {
                  width: 100%; 
                  height: 100%;
                  grid-gap: 25px;
                  border-radius: 100px;
                }
                border-radius: 50px;
                background: #60569e3F;
                will-change: transform;
                transform: rotate(15deg);
              </css-doodle>`}
          />

          <Landing />
          <Stats />
          <LiquidStakingInfo />
          <Platforms />
        </Box>
      </ChakraProvider>
    </DataStoreProvider>
  );
}
