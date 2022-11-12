import { SectionContainer } from '../layouts/SectionContainer';
import { Text, Grid, GridItem } from '@chakra-ui/react';

export const Here = () => {
  return (
    <SectionContainer
      id="here"
      title="here!"
    >
      <>
        <Text
          fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
          mt={6}
        >
          Stake your MATIC
        </Text>
        {/*Create a responsive grid with fixed width cards*/}
        <Grid
          mt={12}
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap={12}
        >
          <GridItem
            w="16rem"
            h="12rem"
            bg="bg.translucent"
            borderRadius="xl"
          />
          <GridItem
            w="16rem"
            h="12rem"
            bg="bg.translucent"
            borderRadius="xl"
          />
          <GridItem
            w="16rem"
            h="12rem"
            bg="bg.translucent"
            borderRadius="xl"
          />
          <GridItem
            w="16rem"
            h="12rem"
            bg="bg.translucent"
            borderRadius="xl"
          />
          <GridItem
            w="16rem"
            h="12rem"
            bg="bg.translucent"
            borderRadius="xl"
          />
        </Grid>
      </>
    </SectionContainer>
  );
};
