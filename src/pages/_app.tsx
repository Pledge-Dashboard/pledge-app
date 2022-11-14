import type { AppProps } from 'next/app';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { Navbar } from '../layouts/Navbar';
import theme from '../theme';
import { DataStoreProvider } from '../context/DataStore';
import { Landing } from '../sections/Landing';
import { Stats } from '../sections/Stats';
import Platforms from '../sections/Platforms';
import LiquidStakingInfo from '../sections/LiquidStakingInfo';
import BlurCircle from '../components/BlurCircle';
import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useParallax } from '../hooks/useParallax';

export default function App({ Component, pageProps }: AppProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, -100);

  return (
    <DataStoreProvider>
      <ChakraProvider theme={theme}>
        <Box ref={ref}>
          <Box
            as={motion.div}
            style={{ y }}
            position="absolute"
            w="75%"
            top="-10%"
            right="-10%"
            mixBlendMode={'color'}
          >
            <BlurCircle
              blur={80}
              w="100%"
              pt="100%"
              opacity={1}
              // display={{ base: 'none', lg: 'block' }}
            />
          </Box>
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
