import { Box, Grid, Heading, Code, Button } from '@chakra-ui/react';
import { useContext, useMemo } from 'react';
import DataStoreContext, { defaultPlatformData } from '../context/DataStore';
import { PlatformData, PlatformNames, PLATFORM_NAME, PLATFORM_TOKEN, PLATFORM_URI } from '../types';
import { formattedNum } from '../utils/numberFormatter';

const InfoCell = ({ label, value }: { label: string; value: string | number }) => {
  return (
    <Box
      bg="whiteAlpha.100"
      borderRadius="sm"
    >
      <Code
        fontWeight="bold"
        bg="transparent"
        p="1rem"
        borderRadius="sm"
        fontSize="sm"
      >
        {label}:
      </Code>
      <Code
        fontWeight="bold"
        bg="transparent"
        color="pink.400"
        fontSize="lg"
      >
        {value}
      </Code>
    </Box>
  );
};

const InfoContainer = ({ platform }: { platform: PlatformNames | 'all' }) => {
  const { current } = useContext(DataStoreContext);
  const data = useMemo<PlatformData>(() => {
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
        {platform !== 'all' && (
          <>
            <InfoCell
              label="APY"
              value={`${formattedNum(data.apy || data.apr)}%`}
            />

            <InfoCell
              label={`${PLATFORM_TOKEN[platform]}/MATIC`}
              value={formattedNum(data.priceMatic)}
            />
            <InfoCell
              label={`${PLATFORM_TOKEN[platform]}/USD`}
              value={`$${formattedNum(data.price)}`}
            />
          </>
        )}
        <InfoCell
          label="Stakers"
          value={formattedNum(data.stakers) || 'N/a'}
        />
        <InfoCell
          label="TVL (USD)"
          value={`$${formattedNum(data.totalStaked.usd)}`}
        />
        <InfoCell
          label="MATIC Staked"
          value={formattedNum(data.totalStaked.matic)}
        />
      </Grid>
      {platform !== 'all' ? (
        <Button
          as={'a'}
          variant="outline"
          borderRadius={0}
          borderColor="#FF7878"
          _hover={{ backgroundColor: '#FF787833' }}
          href={PLATFORM_URI[platform]}
          target="_blank"
        >
          Open {platform[0].toUpperCase() + platform.slice(1)}
        </Button>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default InfoContainer;
