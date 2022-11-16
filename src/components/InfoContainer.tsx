import { Box, Grid, Heading, Code } from '@chakra-ui/react';
import { useContext, useMemo } from 'react';
import DataStoreContext, { defaultPlatformData } from '../context/DataStore';
import { PlatformNames, PLATFORM_NAME, PLATFORM_TOKEN } from '../types';
import { formattedNum } from '../utils/numberFormatter';

const InfoContainer = ({ platform }: { platform: PlatformNames }) => {
  const { current } = useContext(DataStoreContext);
  const data = useMemo(() => {
    return current?.[platform] ?? defaultPlatformData;
  }, [current, platform]);

  return (
    <Box
      id="info-container"
      w="50%"
      h={{ base: '100%', md: '50%' }}
      p="2rem 3rem"
      m="auto"
      ml="-10%"
      bg="#000C3D"
      zIndex={10}
    >
      <Heading
        as="h4"
        size="lg"
        mb="8"
      >
        {PLATFORM_NAME[platform]}
      </Heading>
      <Grid
        templateColumns="1fr 1fr"
        gridGap="4"
      >
        <Code
          bg="whiteAlpha.100"
          p="1rem"
          borderRadius="sm"
          fontSize="sm"
        >
          APY: {data.apy || data.apr}
        </Code>
        <Code
          bg="whiteAlpha.100"
          p="1rem"
          borderRadius="sm"
          fontSize="sm"
        >
          Stakers: {formattedNum(data.stakers) || 'N/a'}
        </Code>
        <Code
          bg="whiteAlpha.100"
          p="1rem"
          borderRadius="sm"
          fontSize="sm"
        >
          TVL: {formattedNum(data.totalStaked.usd)}
        </Code>
        <Code
          bg="whiteAlpha.100"
          p="1rem"
          borderRadius="sm"
          fontSize="sm"
        >
          MATIC Staked: {formattedNum(data.totalStaked.matic)}
        </Code>
        <Code
          bg="whiteAlpha.100"
          p="1rem"
          borderRadius="sm"
          fontSize="sm"
        >
          {PLATFORM_TOKEN[platform]}/MATIC: {formattedNum(data.priceMatic)}
        </Code>
        <Code
          bg="whiteAlpha.100"
          p="1rem"
          borderRadius="sm"
          fontSize="sm"
        >
          {PLATFORM_TOKEN[platform]}/USD: {formattedNum(data.price)}
        </Code>
      </Grid>
    </Box>
  );
};

export default InfoContainer;
