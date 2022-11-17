import { Box, Grid, Heading, Code, Button } from '@chakra-ui/react';
import { useContext, useMemo } from 'react';
import DataStoreContext, { defaultPlatformData } from '../context/DataStore';
import { PlatformNames, PLATFORM_NAME, PLATFORM_TOKEN, PLATFORM_URI } from '../types';
import { formattedNum } from '../utils/numberFormatter';

const InfoContainer = ({ platform }: { platform: PlatformNames }) => {
  const { current } = useContext(DataStoreContext);
  const data = useMemo(() => {
    return current?.[platform] ?? defaultPlatformData;
  }, [current, platform]);

  return (
    <Box
      id="info-container"
      w={{ base: '100%', xl: '50%' }}
      h={{ base: '100%', xl: '50%' }}
      p="2rem 3rem"
      m="auto"
      ml={{ base: 0, xl: '-10%' }}
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
        mb="4"
      >
        <Code
          fontWeight="bold"
          bg="whiteAlpha.100"
          p="1rem"
          borderRadius="sm"
          fontSize="sm"
        >
          APY: {formattedNum(data.apy || data.apr)}%
        </Code>
        <Code
          fontWeight="bold"
          bg="whiteAlpha.100"
          p="1rem"
          borderRadius="sm"
          fontSize="sm"
        >
          Stakers: {formattedNum(data.stakers) || 'N/a'}
        </Code>
        <Code
          fontWeight="bold"
          bg="whiteAlpha.100"
          p="1rem"
          borderRadius="sm"
          fontSize="sm"
        >
          TVL: {formattedNum(data.totalStaked.usd)}
        </Code>
        <Code
          fontWeight="bold"
          bg="whiteAlpha.100"
          p="1rem"
          borderRadius="sm"
          fontSize="sm"
        >
          MATIC Staked: {formattedNum(data.totalStaked.matic)}
        </Code>
        <Code
          fontWeight="bold"
          bg="whiteAlpha.100"
          p="1rem"
          borderRadius="sm"
          fontSize="sm"
        >
          {PLATFORM_TOKEN[platform]}/MATIC: {formattedNum(data.priceMatic)}
        </Code>
        <Code
          fontWeight="bold"
          bg="whiteAlpha.100"
          p="1rem"
          borderRadius="sm"
          fontSize="sm"
        >
          {PLATFORM_TOKEN[platform]}/USD: {formattedNum(data.price)}
        </Code>
      </Grid>
      <Button
        as={'a'}
        variant="outline"
        borderRadius={0}
        borderColor="#FF7878"
        _hover={{ backgroundColor: '#FF787833' }}
        href={PLATFORM_URI[platform]}
        target="_blank"
      >
        Visit {platform[0].toUpperCase() + platform.slice(1)}
      </Button>
    </Box>
  );
};

export default InfoContainer;
