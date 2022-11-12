import { SectionContainer } from '../layouts/SectionContainer';
import { Avatar, Text, Grid, GridItem } from '@chakra-ui/react';
import { dummyData } from '../data/dummy';

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
        <Grid
          mt={12}
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap={12}
        >
          {dummyData.derivatives.map((item, index) => (
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
