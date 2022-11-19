import DataStoreContext from '../context/DataStore';
import { Box, Text, Grid, GridItem, Button } from '@chakra-ui/react';
import { PLATFORM_URI } from '../constants';
import { PlatformData, PlatformNames, PLATFORMS } from '../types';
import { SectionContainer } from '../layouts/SectionContainer';
import { formattedNum } from '../utils/numberFormatter';
import { useContext, useMemo } from 'react';

interface Data {
  [key: string]: PlatformData;
}

const Platforms = () => {
  const { current } = useContext(DataStoreContext);
  const platforms: PlatformNames[] = Object.keys(PLATFORMS).map((key) => key.toLowerCase() as PlatformNames);
  const platformData = useMemo<Data>(() => {
    const data: Data = {};
    for (const platform of platforms) {
      data[platform] = current?.[platform] ?? {
        priceMatic: 0,
        price: 0,
        apr: '0',
        stakers: '0',
        totalStaked: {
          matic: '0',
          usd: '0',
        },
      };
    }
    return data;
  }, [current]);

  return (
    <SectionContainer
      id="Platforms"
      title="here!"
    >
      <>
        <Text
          fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
          mt={6}
        >
          Stake your MATIC
        </Text>
        <Grid
          mt={12}
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap={12}
        >
          {Object.keys(PLATFORMS).map((item, index) => (
            <GridItem
              key={index}
              w="16rem"
              bg="bg.translucent"
              textAlign="center"
            >
              <Box></Box>
              <Box
                bgColor={'bg.translucent'}
                mr={16}
              >
                <Box
                  textAlign={'left'}
                  px={2}
                >
                  <Text
                    fontSize={{ base: 'xs', md: 'sm' }}
                    as="span"
                    mr={4}
                  >
                    {platformData[item.toLowerCase()].apy ? 'APY' : 'APR'}
                  </Text>
                  <Text
                    fontSize={{ base: 'lg', md: 'xl' }}
                    as="span"
                    bg="bg.gradient"
                    backgroundClip="text"
                  >
                    {platformData[item.toLowerCase()].apy?.substring(0, 4) ||
                      platformData[item.toLowerCase()].apr?.substring(0, 4)}
                    %
                  </Text>
                </Box>
                <Box
                  textAlign={'left'}
                  px={2}
                  mt={2}
                >
                  <Text
                    fontSize={{ base: 'xs', md: 'sm' }}
                    as="span"
                    mr={4}
                  >
                    TVL
                  </Text>
                  <Text
                    fontSize={{ base: 'lg', md: 'xl' }}
                    as="span"
                    bg="bg.gradient"
                    backgroundClip="text"
                  >
                    {formattedNum(platformData[item.toLowerCase()].totalStaked?.usd)}
                  </Text>
                </Box>
              </Box>
              <Box
                mt={8}
                textAlign={'center'}
              >
                <a
                  href={PLATFORM_URI[item.toLowerCase() as PlatformNames]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    fontSize={{ base: 'xs', md: 'sm' }}
                    as="span"
                    size={'sm'}
                    variant="solid"
                    colorScheme={'pink'}
                  >
                    Stake Now
                  </Button>
                </a>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </>
    </SectionContainer>
  );
};

export default Platforms;
