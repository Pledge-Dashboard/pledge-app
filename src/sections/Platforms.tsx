import { useContext, useEffect } from 'react';
import { SectionContainer } from '../layouts/SectionContainer';
import { Box, Text, Grid, GridItem } from '@chakra-ui/react';
import DataStoreContext from '../context/DataStore';
import { DataSnapshotAll, PlatformData, PLATFORMS } from '../types';

const Platforms = () => {
  const { current } = useContext(DataStoreContext);
  useEffect(() => {
    Object.keys(PLATFORMS).map((platform) => {
      const platformData = current?.[platform.toLowerCase() as keyof DataSnapshotAll];
      console.log(platformData?.toString());
    });
  }, [current]);

  return (
    <SectionContainer
      id="platforms"
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
              h="12rem"
              bg="bg.translucent"
              borderRadius="xl"
              p={4}
              textAlign="center"
            >
              <Text fontSize={{ base: 'md', md: 'lg' }}>{item}</Text>
              <Box
                h="1px"
                w={'100%'}
                mt={4}
                bgColor={'bg.translucent'}
                mb={4}
              />
              <Box textAlign={'left'}>
                <Text
                  fontSize={{ base: 'xs', md: 'sm' }}
                  as="span"
                >
                  APY
                </Text>
                <Text
                  fontSize={{ base: 'sm', md: 'md' }}
                  as="span"
                ></Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </>
    </SectionContainer>
  );
};

export default Platforms;
