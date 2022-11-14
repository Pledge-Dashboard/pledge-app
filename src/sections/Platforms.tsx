import { SectionContainer } from '../layouts/SectionContainer';
import { Text, Grid, GridItem } from '@chakra-ui/react';
import { PLATFORMS } from '../context/DataStore';

const Platforms = () => {
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
            </GridItem>
          ))}
        </Grid>
      </>
    </SectionContainer>
  );
};

export default Platforms;
